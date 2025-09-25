export {};

declare global {
  interface Window {
    __suppressSmartSnap?: boolean;
  }
}
