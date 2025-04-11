import styled from "styled-components";

/**
 * 待辦事項列表容器
 * 移除默認列表標記並清除內邊距
 */
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

/**
 * 空列表提示訊息
 * 當沒有任務時顯示，使用斜體字和灰色文字
 */
export const EmptyListMessage = styled.div`
  text-align: center;
  color: #888;
  margin: 20px 0;
  font-style: italic;
`;
