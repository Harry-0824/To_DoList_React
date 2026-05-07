import styled from "styled-components";

const baseButton = `
  min-height: 36px;
  padding: 0 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 800;
  transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;

  &:active {
    transform: translateY(1px);
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: ${(props) => (props.$completed ? "#f4f7fb" : "#ffffff")};
  border: 1px solid ${(props) => (props.$completed ? "#dfe6ef" : "#e3e8f0")};
  border-left: 4px solid ${(props) => (props.$completed ? "#9aa7b8" : "#3157d5")};
  border-radius: 18px;
  box-shadow: ${(props) =>
    props.$completed ? "none" : "0 14px 36px rgba(30, 45, 77, 0.08)"};
  opacity: ${(props) => (props.$completed ? 0.82 : 1)};

  @media (max-width: 720px) {
    grid-template-columns: auto minmax(0, 1fr);
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  accent-color: #3157d5;
  cursor: pointer;
`;

export const TodoContent = styled.div`
  min-width: 0;
`;

export const TodoMainRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  @media (max-width: 520px) {
    align-items: flex-start;
    gap: 8px;
  }
`;

export const TodoText = styled.span`
  min-width: 0;
  color: ${(props) => (props.$completed ? "#6f7d90" : "#172033")};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.45;
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
  overflow-wrap: anywhere;
`;

export const StatusLabel = styled.span`
  flex: 0 0 auto;
  padding: 4px 10px;
  color: ${(props) => (props.$completed ? "#59677a" : "#3157d5")};
  background: ${(props) => (props.$completed ? "#e8edf4" : "#edf3ff")};
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const TodoMeta = styled.div`
  margin-top: 9px;
`;

export const TimeDisplay = styled.button`
  padding: 0;
  color: #677489;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 700;
  text-align: left;

  &:hover {
    color: #3157d5;
    text-decoration: underline;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 720px) {
    grid-column: 2;
    justify-content: flex-start;
    width: 100%;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const TimeEditControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const TimeInput = styled.input`
  min-height: 38px;
  padding: 0 10px;
  color: #172033;
  background: #ffffff;
  border: 1px solid #cfd8e6;
  border-radius: 10px;
  font-size: 0.88rem;
`;

export const TimeActionButton = styled.button`
  ${baseButton}
  color: #3157d5;
  background: #edf3ff;
  border: 1px solid #d7e2ff;

  &:hover {
    background: #e2ebff;
    border-color: #c7d6ff;
  }
`;

export const EditButton = styled.button`
  ${baseButton}
  color: #3157d5;
  background: #edf3ff;
  border: 1px solid #d7e2ff;

  &:hover {
    background: #e2ebff;
    border-color: #c7d6ff;
  }
`;

export const DeleteButton = styled.button`
  ${baseButton}
  color: #a0442a;
  background: #fff4ef;
  border: 1px solid #ffd8c9;

  &:hover {
    color: #7d2f18;
    background: #ffe8dd;
    border-color: #ffc6b1;
  }
`;

export const EditMode = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.45fr) auto auto;
  align-items: center;
  gap: 10px;
  width: 100%;
  grid-column: 1 / -1;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const EditTextInput = styled.input`
  min-height: 44px;
  padding: 0 12px;
  color: #172033;
  background: #ffffff;
  border: 1px solid #cfd8e6;
  border-radius: 12px;
  font-size: 0.95rem;
`;

export const EditTimeInput = styled.input`
  min-height: 44px;
  padding: 0 12px;
  color: #172033;
  background: #ffffff;
  border: 1px solid #cfd8e6;
  border-radius: 12px;
  font-size: 0.95rem;
`;

export const SaveButton = styled.button`
  ${baseButton}
  color: #ffffff;
  background: #35a86b;
  border: 1px solid #35a86b;

  &:hover {
    background: #2f965f;
    border-color: #2f965f;
  }
`;

export const CancelButton = styled.button`
  ${baseButton}
  color: #4c5c70;
  background: #f3f6fa;
  border: 1px solid #dbe3ee;

  &:hover {
    color: #263347;
    background: #e8eef6;
  }
`;
