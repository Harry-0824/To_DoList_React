import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const EmptyListMessage = styled.div`
  display: grid;
  place-items: center;
  min-height: 220px;
  padding: 36px 24px;
  color: #58667b;
  background:
    linear-gradient(135deg, rgba(49, 87, 213, 0.08), rgba(53, 168, 107, 0.08)),
    #f8fafc;
  border: 1px dashed #cbd6e5;
  border-radius: 22px;
  text-align: center;
`;

export const EmptyStateIcon = styled.span`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  color: #3157d5;
  background: #ffffff;
  border: 1px solid #dfe6f1;
  border-radius: 16px;
  font-size: 1.25rem;
  font-weight: 900;
`;

export const EmptyStateTitle = styled.h2`
  margin: 0;
  color: #172033;
  font-size: 1.1rem;
  font-weight: 800;
`;

export const EmptyStateText = styled.p`
  max-width: 360px;
  margin: 8px 0 0;
  color: #677489;
  font-size: 0.95rem;
  line-height: 1.5;
`;
