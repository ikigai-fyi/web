type OutLinkProps = {
  title: string;
  url: string;
};

export default function OutLink({ title, url }: OutLinkProps) {
  return (
    <a href={url} title={title}>
      {title}
    </a>
  );
}
