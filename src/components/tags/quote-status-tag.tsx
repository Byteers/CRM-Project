import React from "react";

import {
  CheckCircleOutlined,
  ExpandOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

import { QuoteStatus } from "@/graphql/schema.types";

const variant: Record<
  QuoteStatus,
  { color: string; icon: React.ReactElement }
> = {
  DRAFT: {
    color: "blue",
    icon: <ExpandOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  },
  SENT: {
    color: "cyan",
    icon: <SendOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  },
  ACCEPTED: {
    color: "green",
    icon: <CheckCircleOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  },
};

type Props = {
  status: QuoteStatus;
};

export const QuoteStatusTag = ({ status }: Props) => {
  return (
    <Tag
      style={{
        textTransform: "capitalize",
      }}
      color={variant[status].color}
      icon={variant[status].icon}
    >
      {status.toLowerCase()}
    </Tag>
  );
};