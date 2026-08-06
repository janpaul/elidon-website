/*
 * NOTE
 *
 * The clipboard API is only available over HTTPS. So the clipboard
 * functionality will not work on localhost.
 * For UI testing, just add `true || ` in front of the hasClipboard condition.
 */

type ReturnProps = [
  boolean, // if the clipboard is available in the browser
  (payload: string) => Promise<void>, // copy function
  () => Promise<string>, // paste function
];

const clipBoardNotSupportedMsg = `clipboard not supported`;

export const useClipboard = (): ReturnProps => {
  const hasClipboard = !!navigator?.clipboard;
  const copyToClipboard = async (text: string) =>
    hasClipboard
      ? navigator.clipboard.writeText(text)
      : Promise.reject(clipBoardNotSupportedMsg);

  const pasteFromClipboard = async (): Promise<string> =>
    hasClipboard
      ? navigator.clipboard.readText()
      : Promise.reject(clipBoardNotSupportedMsg);

  return [hasClipboard, copyToClipboard, pasteFromClipboard];
};
