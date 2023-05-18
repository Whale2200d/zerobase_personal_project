import ModalBasicLayout from "../modal/ModalBasicLayout";
import LoginModal from "../modal/LoginModal";
import SignUpModal from "../modal/SignUpModal";
import DeliveryInfoModal from "../modal/DeliveryInfoModal";
import AlarmInfoModal from "../modal/AlarmInfoModal";
import TakerInfoModal from "../modal/TakerInfoModal";

export default function Modal() {
  return (
    <>
      <ModalBasicLayout />
      <LoginModal />
      <SignUpModal />
      <DeliveryInfoModal />
      <AlarmInfoModal />
      <TakerInfoModal />
    </>
  );
}
