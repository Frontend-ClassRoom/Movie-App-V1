import styled from 'styled-components';

export const StyledPreview = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.25);
  max-height: 95px;
  overflow-y: auto;
  padding: 12px;
`;

export const StyledPreviewItem = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:not(:first-child) {
    margin-top: 4px;
  }
`;
