import type { z } from "zod";
import { mapZodIssues } from "./zod-helpers.js";

type ValidationResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      errors: Partial<Record<keyof T, string>>;
      message: string;
      data: T;
    };

/**
 * Validates form data against a Zod schema.
 *
 * @param {FormData | Record<string, unknown> | undefined} formData - The form data to validate.
 * @param {Schema} validationSchema - The Zod schema to validate the form data against.
 * @param {object} [options] - Optional configuration for validation.
 * @returns {Promise<ValidationResponse<z.infer<Schema>>>} - A promise that resolves to a validation response.
 *
 * @throws {Error} Throws an error if a valid Zod schema or valid FormData is not provided,
 * or if an unexpected error occurs during validation.
 */
export async function validateForm<Schema extends z.ZodObject>(
  formData: FormData | Record<string, unknown> | undefined,
  validationSchema: Schema,
  options?: {
    /**
     * The message to display when validation fails.
     * @default "Invalid data submitted"
     */
    message?: string;
  },
): Promise<ValidationResponse<z.infer<Schema>>> {
  if (typeof validationSchema?.safeParseAsync !== "function") {
    throw new Error(
      "A valid Zod schema is required for form validation. Please provide a valid Zod schema and try again.",
    );
  }

  if (!formData) {
    throw new Error(
      "A valid FormData object is required for form validation. Please provide a valid FormData object and try again.",
    );
  }

  const message = options?.message || "Invalid data submitted";

  try {
    let form = formData;

    if (formData instanceof FormData) {
      form = Object.fromEntries(formData.entries()) as Record<string, unknown>;
    }

    const result = await validationSchema.safeParseAsync(form);

    if (result.success) {
      return {
        success: true,
        data: result.data,
      };
    }

    const errors = mapZodIssues(result.error.issues) as Partial<
      Record<keyof z.core.output<Schema>, string>
    >;

    return {
      success: false,
      errors,
      message,
      data: form as z.infer<Schema>,
    };
  } catch (error: any) {
    throw new Error(
      `Validation failed due to an unexpected error: ${
        error.message || "Please make sure Zod is installed and try again."
      }`,
    );
  }
}
