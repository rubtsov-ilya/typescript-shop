import { useContext } from "react";
import { bodyLockContext } from "../providers/BodyLockProvider";

export default function useBodyLock() {
  return (
    useContext(bodyLockContext)
  )
}
