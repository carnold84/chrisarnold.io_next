import Github from "../../../../icons/Github";
import Link from "../../../../icons/Link";
import "./CodeItem.css";

interface Props {
  content: string;
  demoLink: string;
  number: number;
  repositoryLink: string;
  tags?: string;
  title: string;
}

const paddedNumber = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

const CodeItem = ({
  content,
  demoLink,
  number,
  repositoryLink,
  tags,
  title,
}: Props) => {
  return (
    <div className="code_item grid w-full border border-neutral-100 bg-neutral-50 p-10">
      <h3
        className="hidden shrink-0 font-display text-h4 text-text-200 lg:flex"
        style={{ gridArea: "number" }}
      >
        {paddedNumber(number)}.
      </h3>
      <h2
        className="mb-2 w-full shrink-0 font-display text-h4 text-text-500"
        style={{ gridArea: "header" }}
      >
        {title}
      </h2>
      <div
        className="mb-5 w-full text-body text-text-300"
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ gridArea: "content" }}
      />
      {tags && (
        <p
          className="text-body text-text-400 sm:mb-5"
          style={{ gridArea: "meta" }}
        >
          <span className="text-text-tertiary">Tags:</span> {tags}
        </p>
      )}
      <div
        className="mt-8 flex justify-end gap-5"
        style={{ gridArea: "links" }}
      >
        {repositoryLink && repositoryLink !== "" && (
          <a
            className="fill-text-secondary hover:fill-text-primary hover:text-text-primary flex items-center justify-center bg-transparent text-body text-text-400 sm:inline-flex"
            href={repositoryLink}
            rel="noopener"
            target="_blank"
          >
            <Github />
            <span className="ml-1">Code</span>
          </a>
        )}
        {demoLink && demoLink !== "" && (
          <a
            className="fill-text-secondary hover:fill-text-primary hover:text-text-primary flex items-center justify-center bg-transparent text-body text-text-400 sm:inline-flex"
            href={demoLink}
            rel="noopener"
            target="_blank"
          >
            <Link />
            <span className="ml-1 text-body">View</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default CodeItem;
