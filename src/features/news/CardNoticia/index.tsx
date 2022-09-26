import * as S from "../styled"
import { CardNoticiaType } from "./types"

export function CardNoticia({ image, titulo, date, descriptionCurto, setModal }: CardNoticiaType) {
    return (
        <S.CardNoticia>
            <S.ImageCardNoticia src={image} />
            <S.TituloCardNoticia>{titulo}</S.TituloCardNoticia>
            <S.DateCardNoticia>{date}</S.DateCardNoticia>
            <S.DescriptionCardNoticia>
                {descriptionCurto}
            </S.DescriptionCardNoticia>
            <S.BotaoLeitura onClick={setModal}>Ver mais</S.BotaoLeitura>
        </S.CardNoticia>
    )
}