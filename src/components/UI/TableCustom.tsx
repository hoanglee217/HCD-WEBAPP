import {
  Flex,
  Form,
  Input,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { debounce } from "lodash";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { IPaginationMeta } from "../../interfaces/IPagination";
import "./TableCustom.scss";
import ButtonCustom from "./button/ButtonCustom";

interface TableCustomProps<TItem> extends TableProps<TItem> {
  readonly onAdd?: () => void;
  readonly showHeader?: boolean;
  readonly showFooter?: boolean;
  readonly dataSource?: TItem[];
  readonly onFilter?: () => void;
  readonly disableFilter?: boolean;
  readonly onExportExcel?: () => void;
  readonly pageInfo?: IPaginationMeta;
  readonly titleTableTransCode?: string;
  readonly subTitleTable?: React.ReactNode;
  readonly columns?: TableColumnsType<TItem>;
  readonly onSearch?: (value: string) => void;
  readonly placeholderSearchTransCode?: string;
  readonly expandable?: TableProps<TItem>["expandable"];
  readonly setPageInfo?: (pageInfo: IPaginationMeta) => void;
  readonly fetchData?: (pagination: IPaginationMeta) => void;
  readonly onPageChange?: (nextPage: number, pageSize?: number) => void;
}

const defaultPageInfo: IPaginationMeta = {
  page: 1,
  pageSize: 10,
  totalItems: 0,
  pageCount: 0,
};

interface TableCustomItem {
  readonly id?: string;
}

type TableCustomTypeType = <TItem extends TableCustomItem>(
  props: TableCustomProps<TItem>
) => React.ReactElement<TableCustomProps<TItem>>;

export const TableCustom: TableCustomTypeType = (props) => {
  const { t } = useTranslation();

  const handlePageChange = (
    newPage?: number,
    newPageSize?: number,
    newSearch?: string
  ) => {
    const newPageInfo = {
      ...props.pageInfo,
      search: newSearch,
      page: newPage ?? 1,
      pageSize: newPageSize ?? 10,
    };
    props.setPageInfo?.(newPageInfo);
    props.fetchData?.(newPageInfo);
  };

  const debouncedSearch = debounce((value) => {
    handlePageChange(undefined, undefined, value);
  }, 500);

  const renderHeader = useCallback(() => {
    return (
      <div className="table-header">
        <Flex justify="space-between" align="center">
          <div className="table-header__title">
            <h2>{props.titleTableTransCode ?? t("MISSING_TITLE_TABLE")}</h2>
            {props.subTitleTable}
          </div>
          <div className="table-header__action">
            <Space direction="horizontal" size="middle">
            <Form.Item
              name={["search"]}
              rules={[{ required: true }]}
              style={{ marginBottom: 0 }}
            >
              <Input
                allowClear
                placeholder={t("SEARCH_PLACEHOLDER")}
                onChange={(e) => debouncedSearch(e.target.value)}
              />
            </Form.Item>
            {props.onAdd && (
              <ButtonCustom customVariant="primary" onClick={props.onAdd}>
                {t("ADD")}
              </ButtonCustom>
            )}
            </Space>
          </div>
        </Flex>
      </div>
    );
  }, [props.titleTableTransCode, props.subTitleTable, props.onAdd, t, debouncedSearch]);

  const renderFooter = useCallback(() => {
    return (
      <Pagination
        align="end"
        showSizeChanger
        onChange={handlePageChange}
        className="custom-pagination"
        current={props?.pageInfo?.page}
        total={props?.pageInfo?.totalItems}
        pageSize={props.pageInfo?.pageSize}
        onShowSizeChange={props.onPageChange}
        showTotal={(total) => `Total ${total} items`}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    // <Block borderRadius={16} backgroundColor='white' overflow='hidden' border='1px solid #eaecf0'>
    <Table
      pagination={false}
      scroll={props.scroll}
      columns={props.columns}
      className="custom-table"
      dataSource={props.dataSource}
      expandable={props.expandable}
      rowKey={(e) => e.id ?? Math.random()}
      title={props.showHeader ? renderHeader : undefined}
      footer={props.showFooter ? renderFooter : undefined}
      loading={props.loading ? props.loading : props.dataSource ? false : true}
      rowClassName={(record, index) =>
        index % 2 === 0 ? "even-row" : "odd-row"
      }
    >
      {props.children}
    </Table>
    // </Block>
  );
};

(
  TableCustom as React.ComponentType<TableCustomProps<TableCustomItem>>
).defaultProps = {
  pageInfo: defaultPageInfo,
  showHeader: true,
  showFooter: true,
  scroll: { x: "max-content" },
};
