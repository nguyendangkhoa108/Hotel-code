import { useTranslate, BaseKey } from "@refinedev/core";

import { DeleteButton, NumberField } from "@refinedev/antd";

import {
    CloseCircleOutlined,
    FormOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import {
    Avatar,
    Card,
    Divider,
    InputNumber,
    Dropdown,
    Menu,
    Typography,
} from "antd";

const { Text, Paragraph } = Typography;

import { IHotel } from "interfaces";

type ProductItemProps = {
    item: IHotel;
    updateStock?: (changedValue: number, clickedProduct: IHotel) => void;
    editShow: (id?: BaseKey) => void;
};

export const HotelItem: React.FC<ProductItemProps> = ({
    item,
    updateStock,
    editShow,
}) => {
    const t = useTranslate();

    return (
        <Card
            style={{
                margin: "8px",
                opacity: item.rooms <= 0 ? 0.5 : 1,
            }}
            bodyStyle={{ height: "500px" }}
        >
            <div style={{ position: "absolute", top: "10px", right: "5px" }}>
                <Dropdown
                    overlay={
                        <Menu mode="vertical">
                            {updateStock && (
                                <Menu.Item
                                    key="1"
                                    disabled={item.stock <= 0}
                                    style={{
                                        fontWeight: 500,
                                    }}
                                    icon={
                                        <CloseCircleOutlined
                                            style={{
                                                color: "red",
                                            }}
                                        />
                                    }
                                    onClick={() => updateStock(0, item)}
                                >
                                    {t("stores.buttons.outOfStock")}
                                </Menu.Item>
                            )}
                            <Menu.Item
                                key="2"
                                style={{
                                    fontWeight: 500,
                                }}
                                icon={
                                    <FormOutlined
                                        style={{
                                            color: "green",
                                        }}
                                    />
                                }
                                onClick={() => editShow(item.id)}
                            >
                                {t("stores.buttons.edit")}
                            </Menu.Item>

                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={item.id}
                            />

                        </Menu>
                    }
                    trigger={["click"]}
                >
                    <MoreOutlined
                        style={{
                            fontSize: 24,
                        }}
                    />
                </Dropdown>
            </div >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <img src={item.avatar} width={'100%'} />
                </div>
                <Divider />
                <Paragraph
                    ellipsis={{ rows: 2, tooltip: true }}
                    style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        marginBottom: "8px",
                    }}
                >
                    {item.name}
                </Paragraph>
                <Paragraph
                    ellipsis={{ rows: 3, tooltip: true }}
                    style={{ marginBottom: "8px" }}
                >
                    {item.desreption}
                </Paragraph>
                <Text
                    className="item-id"
                    style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#999999",
                    }}
                >
                    #{item.id}
                </Text>
                <NumberField
                    style={{
                        fontSize: "24px",
                        fontWeight: 500,
                        marginBottom: "8px",
                    }}
                    options={{
                        currency: "USD",
                        style: "currency",
                    }}
                    value={Number(item.price) / 100}
                />
            </div>
        </Card >
    );
};
