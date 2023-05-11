import ModalBasicLayout from "../modal/ModalBasicLayout";
import LoginModal from "../modal/LoginModal";
import SignUpModal from "../modal/SignUpModal";

export default function Modal() {
  return (
    <>
      <ModalBasicLayout />
      <LoginModal />
      <SignUpModal />
    </>
  );
}
