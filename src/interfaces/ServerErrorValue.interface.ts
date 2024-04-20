export interface IValueServerError {
  isTooManyRequestsError: boolean;
  doServerError: () => void
}