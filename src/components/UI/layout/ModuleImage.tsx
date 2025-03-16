import { Card, Flex, FormInstance } from "antd";
import { useTranslation } from "react-i18next";
import TextCustom from "../TextCustom";
import CardCustom from "../card/CardCustom";

interface ModuleSaveProps {
  form: FormInstance;
  image?: string;
}

const ModuleImage = ({ form, image }: ModuleSaveProps) => {
  const { t } = useTranslation();

  return (
    <CardCustom
      size="small"
      title={t("FEATURED_IMAGE")}
      styled={{ width: 280, border: "1px solid #dadada" }}
    >
      <Flex vertical gap={12}>
        <img src={image} alt="" width="100%" />
        {image ? (
          <>
            <TextCustom isDescription>
              {t("FEATURED_IMAGE_DESCRIPTION")}
            </TextCustom>
            <TextCustom isDeleteLink>{t("REMOVE_FEATURED_IMAGE")}</TextCustom>
          </>
        ) : (
          <TextCustom isLink>
            {t("SET_FEATURED_IMAGE")}
          </TextCustom>
        )}
      </Flex>
    </CardCustom>
  );
};

export default ModuleImage;
