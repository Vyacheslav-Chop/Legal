import { refs } from "./refs";
const { burgerBtn } = refs;
import { handleOpenMenu } from "./handle";

burgerBtn.addEventListener('click', handleOpenMenu)