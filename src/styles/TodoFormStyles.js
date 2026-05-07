import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.42fr) auto;
  align-items: end;
  gap: 12px;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 16px;
  background: #172033;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
    max-width: calc(100vw - 64px);
    padding: 14px;
    border-radius: 18px;
  }
`;

export const FieldGroup = styled.div`
  width: 100%;
  min-width: 0;
  max-width: 100%;
`;

export const FieldLabel = styled.label`
  display: block;
  margin: 0 0 7px;
  color: #aeb9ca;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  min-height: 52px;
  padding: 0 16px;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(219, 226, 239, 0.16);
  border-radius: 14px;
  font-size: 1rem;

  &::placeholder {
    color: #8d9aaf;
  }

  @media (max-width: 480px) {
    max-width: calc(100vw - 92px);
  }
`;

export const TimeInput = styled.input`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  min-height: 52px;
  padding: 0 14px;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(219, 226, 239, 0.16);
  border-radius: 14px;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    max-width: calc(100vw - 92px);
  }
`;

export const AddButton = styled.button`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  min-height: 52px;
  padding: 0 20px;
  color: #ffffff;
  background: #35a86b;
  border: 0;
  border-radius: 14px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 900;
  white-space: nowrap;
  transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;

  @media (max-width: 480px) {
    max-width: calc(100vw - 92px);
  }

  &:hover {
    background: #2f965f;
    box-shadow: 0 12px 24px rgba(27, 128, 78, 0.26);
  }

  &:active {
    transform: translateY(1px);
  }
`;
