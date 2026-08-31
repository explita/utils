import { useEffect, useState } from "react";

type NetworkData = {
  online: boolean;
  rtt?: number;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | "unknown";
  saveData?: boolean;
  networkType?:
    | "bluetooth"
    | "cellular"
    | "ethernet"
    | "wifi"
    | "wimax"
    | "none"
    | "other"
    | "unknown";
};

/**
 * useNetwork
 *
 * A hook to get the current network information.
 *
 * It returns an object with the following properties:
 * - online: a boolean indicating if the browser is online or not.
 * - rtt: the round trip time in milliseconds of the current connection.
 * - downlink: the estimated effective bandwidth in megabits per second of the
 *   current connection in megabits per second.
 * - downlinkMax: the maximum downlink speed in megabits per second of the
 *   current connection.
 * - effectiveType: the effective type of the connection, which is one of the
 *   following:
 *   - "slow-2g"
 *   - "2g"
 *   - "3g"
 *   - "4g"
 * - saveData: a boolean indicating if the user has requested a reduced data
 *   usage mode.
 * - networkType: the type of the connection, which is one of the following:
 *   - "bluetooth"
 *   - "cellular"
 *   - "ethernet"
 *   - "wifi"
 *   - "wimax"
 *   - "none"
 *   - "other"
 *   - "unknown"
 *
 * The hook updates the returned value when the connection type changes.
 *
 * @returns {NetworkData} an object with the current network information.
 */

function getConnection(): any {
  if (typeof navigator === "undefined") return undefined;
  return (
    (navigator as any).connection ||
    (navigator as any).mozConnection ||
    (navigator as any).webkitConnection
  );
}

function getNetworkData(): NetworkData {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {
      online: true,
      downlink: 0,
      effectiveType: "unknown",
    };
  }

  const connection = getConnection();

  return {
    online: typeof navigator.onLine === "boolean" ? navigator.onLine : true,
    rtt: connection ? connection.rtt : undefined,
    downlink: connection ? connection.downlink : 0,
    downlinkMax: connection ? connection.downlinkMax : undefined,
    effectiveType: connection ? connection.effectiveType : "unknown",
    saveData: connection ? connection.saveData : undefined,
    networkType: connection ? connection.type : undefined,
  };
}

export function useNetwork() {
  const [networkInfo, setNetworkInfo] = useState<NetworkData>(() =>
    getNetworkData(),
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const connection = getConnection();

    function updateNetworkInfo() {
      setNetworkInfo(getNetworkData());
    }

    window.addEventListener("online", updateNetworkInfo);
    window.addEventListener("offline", updateNetworkInfo);
    connection?.addEventListener?.("change", updateNetworkInfo);

    return () => {
      window.removeEventListener("online", updateNetworkInfo);
      window.removeEventListener("offline", updateNetworkInfo);
      connection?.removeEventListener?.("change", updateNetworkInfo);
    };
  }, []);

  return networkInfo;
}
