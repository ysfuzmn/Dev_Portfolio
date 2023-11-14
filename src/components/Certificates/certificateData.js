const importAll = (context) => {
  return context.keys().map((key) => ({
    name: key.replace(/^.*[\\/]/, '').replace(/\.pdf$/, ''),
    link: context(key).default,
  }));
};

const certificateContext = importAll(
  import.meta.globEager('./certificates/*.pdf')
);

export default certificateContext;