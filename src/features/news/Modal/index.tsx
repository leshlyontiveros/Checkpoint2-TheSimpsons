import * as S from ".././styled"
import { ModalType } from "./types"

export function Modal({close, image, titulo, description, setModal}: ModalType) {
    return (
        <S.ContainerModal>
            <S.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </S.CloseButton>
            <S.CardModal>
                <S.ImageModal src={image} alt="news-image" />
                <S.ContainerTexto>
                    <S.TituloModal>{titulo}</S.TituloModal>
                    <S.DescriptionModal>{description}</S.DescriptionModal>
                </S.ContainerTexto>
            </S.CardModal>
        </S.ContainerModal>
    )
}