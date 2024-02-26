import { useState, useEffect } from "react";

type ReturnProps = [
  boolean, // if the clipboard is available in the browser
  (payload: string) => Promise<void>, // copy function
  () => Promise<string>, // paste function
];

const clipboardNotSupportedMsg = `clipboard not supported`;

export const useClipboard = (): ReturnProps => {
  const [hasClipboard, setHasClipboard] = useState(false);
  useEffect(() => {
    setHasClipboard(!!navigator.clipboard);
  }, []);
  const copyToClipboard = async (payload: string) =>
    hasClipboard ?
      navigator.clipboard.writeText(payload)
    : Promise.reject(clipboardNotSupportedMsg);

  const pasteFromClipboard = async (): Promise<string> =>
    hasClipboard ?
      navigator.clipboard.readText()
    : Promise.reject(clipboardNotSupportedMsg);

  return [hasClipboard, copyToClipboard, pasteFromClipboard];
};
