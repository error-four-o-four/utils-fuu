export enum HtmlChars {
  '&' = '&amp;',
  '<' = '&lt;',
  '>' = '&gt;',
  "'" = '&#39;',
  '"' = '&quot;',
}

type StringDict = {
  [key: string]: string;
};

const htmlRegex = new RegExp(`[${Object.keys(HtmlChars)}]`, 'g');

export const escapeHtml = (str: string) =>
  str.replace(
    htmlRegex,
    (tag: string) => (HtmlChars as StringDict)[tag] || tag
  );
