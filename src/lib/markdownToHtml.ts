import { remark } from "remark";
import html from "remark-html";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import unified from "unified";
import stringify from "remark-stringify";


export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkMdx)
    .use(stringify)
    .process(markdown);

  return result.toString();
}
