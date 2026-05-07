import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    overflow-x: hidden;
    color: #172033;
    background:
      radial-gradient(circle at top left, rgba(87, 110, 255, 0.16), transparent 34rem),
      linear-gradient(135deg, #f5f7fb 0%, #eef3f8 52%, #f7f6f1 100%);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  button,
  input {
    font: inherit;
  }

  button:focus-visible,
  input:focus-visible {
    outline: 3px solid rgba(57, 89, 255, 0.28);
    outline-offset: 2px;
  }
`;

export const AppContainer = styled.main`
  width: min(100%, 980px);
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 48px 20px;
  overflow-x: hidden;

  @media (max-width: 640px) {
    width: 100%;
    max-width: 100vw;
    padding: 28px 14px;
  }
`;

export const AppHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 22px;

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }
`;

export const AppTitle = styled.h1`
  margin: 0;
  color: #111827;
  font-size: clamp(2rem, 6vw, 4.25rem);
  font-weight: 800;
  line-height: 0.96;
`;

export const AppSubtitle = styled.p`
  margin: 12px 0 0;
  color: #5f6b7a;
  font-size: 1rem;
  font-weight: 600;
`;

export const HeaderSummary = styled.div`
  max-width: 100%;
  min-width: 220px;
  padding: 14px 18px;
  color: #27364f;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(174, 184, 204, 0.56);
  border-radius: 18px;
  box-shadow: 0 18px 42px rgba(31, 42, 68, 0.08);
  text-align: center;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const HeaderSummaryValue = styled.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
`;

export const MainPanel = styled.section`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  padding: 26px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(213, 219, 230, 0.92);
  border-radius: 28px;
  box-shadow: 0 28px 80px rgba(30, 45, 77, 0.12);
  backdrop-filter: blur(18px);

  @media (max-width: 640px) {
    width: calc(100vw - 28px);
    max-width: calc(100vw - 28px);
    padding: 18px;
    border-radius: 22px;
  }
`;

export const StatsGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  min-width: 0;
  gap: 12px;
  margin: 18px 0;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
  }
`;

export const StatCard = styled.div`
  min-height: 88px;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e4e9f2;
  border-radius: 18px;
`;

export const StatValue = styled.dt`
  color: #172033;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
`;

export const StatLabel = styled.dd`
  margin: 8px 0 0;
  color: #677489;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin: 8px 0 18px;

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const FilterButtonsContainer = styled.div`
  display: inline-flex;
  gap: 4px;
  padding: 5px;
  background: #edf2f7;
  border: 1px solid #dce4ee;
  border-radius: 999px;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;

export const FilterButton = styled.button`
  min-height: 40px;
  padding: 0 16px;
  color: ${(props) => (props.$active ? "#ffffff" : "#4c5c70")};
  background: ${(props) => (props.$active ? "#3157d5" : "transparent")};
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 800;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;

  &:hover {
    color: ${(props) => (props.$active ? "#ffffff" : "#203047")};
    background: ${(props) => (props.$active ? "#2648b7" : "#ffffff")};
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 380px) {
    padding: 0 10px;
    font-size: 0.82rem;
  }
`;

export const ClearCompletedButton = styled.button`
  min-height: 40px;
  padding: 0 16px;
  color: #8f3f22;
  background: #fff4ef;
  border: 1px solid #ffd7c8;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 800;
  transition: background 160ms ease, border-color 160ms ease, color 160ms ease;

  &:hover {
    color: #742d16;
    background: #ffe9df;
    border-color: #ffc5b0;
  }
`;
