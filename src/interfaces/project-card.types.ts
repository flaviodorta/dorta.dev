import ModalProps from './modal.type';

type ProjectCardProps = {
  title?: string;
  imgSrc?: string;
  githubLink?: string;
  projectLink?: string;
  techTags?: string[];
  description?: JSX.Element;
  modalProps?: ModalProps;
};

export default ProjectCardProps;
