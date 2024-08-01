type ModalProps = {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  githubLink: string;
  projectLink: string;
  techTags: string[];
  description: JSX.Element;
};

export default ModalProps;
