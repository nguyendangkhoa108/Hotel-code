import { useTranslate, useApiUrl, BaseKey } from "@refinedev/core";

import { Edit, getValueFromEvent, useSelect } from "@refinedev/antd";

import {
  Drawer,
  DrawerProps,
  Form,
  FormProps,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  ButtonProps,
  Avatar,
  Typography,
  Upload,
  Grid,
} from "antd";

const { Text } = Typography;

type EditProductProps = {
  drawerProps: DrawerProps;
  formProps: FormProps;
  saveButtonProps: ButtonProps;
  editId?: BaseKey;
};
export const EditHotel: React.FC<EditProductProps> = ({
  drawerProps,
  formProps,
  saveButtonProps,
  editId,
}) => {
  const t = useTranslate();
  const apiUrl = useApiUrl();
  const breakpoint = Grid.useBreakpoint();

  return (
    <Drawer
      {...drawerProps}
      width={breakpoint.sm ? "500px" : "100%"}
      zIndex={1001}
    >
      <Edit
        saveButtonProps={saveButtonProps}
        resource="hotels"
        recordItemId={editId}
        contentProps={{
          style: {
            boxShadow: "none",
          },
          bodyStyle: {
            padding: 0,
          },
        }}
      >
        <Form {...formProps} layout="vertical">
          <Form.Item label={t("products.fields.images.label")}>
            <Form.Item
              name="images"
              valuePropName="fileList"
              getValueFromEvent={getValueFromEvent}
              noStyle
              rules={[
                {
                  required: true,
                },
              ]}
            >
<<<<<<< HEAD
              <Upload.Dragger
                name="file"
                action={`${apiUrl}/media/upload`}
                listType="picture"
                maxCount={1}
                accept=".png"
              >
                <Space direction="vertical" size={2}>
                  <Avatar
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "256px",
                    }}
                    src="/images/product-default-img.png"
                    alt="Store Location"
                  />
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: "16px",
                      marginTop: "8px",
                    }}
                  >
                    {t("products.fields.images.description")}
                  </Text>
                  <Text style={{ fontSize: "12px" }}>
                    {t("products.fields.images.validation")}
                  </Text>
                </Space>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item
            label={t("products.fields.name")}
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("products.fields.address")}
            name="address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("products.fields.description")}
            name="desreption"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item
            label={t("products.fields.city")}
            name="city"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("products.fields.phonenumber")}
            name="phonenumber"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("products.fields.starRating")}
            name="starRating"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("products.fields.price")}
            name="price"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber style={{ width: "150px" }} />
          </Form.Item>
          <Form.Item
            label={t("products.fields.category")}
            name="category"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label={t("products.fields.room")}
            name="rooms"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber style={{ width: "150px" }} />
          </Form.Item>
        </Form>
      </Edit>
    </Drawer>
  );
};
=======
                <Form {...formProps} layout="vertical">
                    <Form.Item label={t("products.fields.images.label")}>
                        <Form.Item
                            name="avatar"
                            valuePropName="avatar"
                            getValueFromEvent={getValueFromEvent}
                            noStyle
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Upload.Dragger
                                name="file"
                                action={`${apiUrl}/media/upload`}
                                listType="picture"
                                maxCount={1}
                                accept=".png"
                            >
                                <Space direction="vertical" size={2}>
                                    <Avatar
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            maxWidth: "256px",
                                        }}
                                        src="/images/product-default-img.png"
                                        alt="Store Location"
                                    />
                                    <Text
                                        style={{
                                            fontWeight: 800,
                                            fontSize: "16px",
                                            marginTop: "8px",
                                        }}
                                    >
                                        {t(
                                            "products.fields.images.description",
                                        )}
                                    </Text>
                                    <Text style={{ fontSize: "12px" }}>
                                        {t("products.fields.images.validation")}
                                    </Text>
                                </Space>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.name")}
                        name="name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.address")}
                        name="address"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.description")}
                        name="desreption"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.TextArea rows={6} />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.city")}
                        name="city"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.phonenumber")}
                        name="phonenumber"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.starRating")}
                        name="starRating"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.price")}
                        name="price"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <InputNumber
                            formatter={(value) => `$ ${value}`}
                            style={{ width: "150px" }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.category")}
                        name="category"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select {...categorySelectProps} />
                    </Form.Item>
                    <Form.Item
                        label={t("products.fields.room")}
                        name="rooms"
                        rules={[
                            {
                                required: true,
                                type: "number",
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: "150px" }}
                        />
                    </Form.Item>
                </Form>
            </Edit>
        </Drawer>
    );
};
>>>>>>> 3f7770e21375a5b31bf08cc6ba478bfe05519df3
