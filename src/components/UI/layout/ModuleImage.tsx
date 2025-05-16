import { Flex, FormInstance } from "antd";
import { useTranslation } from "react-i18next";
import TextCustom from "../text-custom/TextCustom";
import CardCustom from "../card/CardCustom";
import ImageStorage from "../image-storage/ImageStorage";

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
      styled={{ width: 280 }}
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
          <ImageStorage type="link" title={t("SET_FEATURED_IMAGE")} />
        )}
      </Flex>
    </CardCustom>
  );
};

export default ModuleImage;
