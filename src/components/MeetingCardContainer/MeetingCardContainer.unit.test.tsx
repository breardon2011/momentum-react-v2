import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MeetingCardContainer, { MEETING_CARD_CONTAINER_CONSTANTS as CONSTANTS } from './';
import { MEETING_CARD_CONTAINER_STATUS_CONSTANTS as STATUS_CONSTANTS } from './MeetingCardContainerStatus';

describe('<MeetingCardContainer />', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      expect.assertions(1);

      const { container } = render(<MeetingCardContainer />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with class name', () => {
      expect.assertions(1);

      const className = 'example-class';

      const { container } = render(<MeetingCardContainer className={className} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with id', () => {
      expect.assertions(1);

      const id = 'example-id';

      const { container } = render(<MeetingCardContainer id={id} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with style', () => {
      expect.assertions(1);

      const style = { color: 'pink' };

      const { container } = render(<MeetingCardContainer style={style} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with children', () => {
      expect.assertions(1);

      const children = <div>example child</div>;

      const { container } = render(<MeetingCardContainer>{children}</MeetingCardContainer>);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with color', () => {
      expect.assertions(1);

      const color = Object.values(CONSTANTS.COLORS).pop();

      const { container } = render(<MeetingCardContainer color={color} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with height', () => {
      expect.assertions(1);

      const height = Object.values(CONSTANTS.HEIGHTS).pop();

      const { container } = render(<MeetingCardContainer height={height} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with outline', () => {
      expect.assertions(1);

      const outline = true;

      const { container } = render(<MeetingCardContainer outline={outline} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with rounding', () => {
      expect.assertions(1);

      const rounding = Object.values(CONSTANTS.ROUNDINGS).pop();

      const { container } = render(<MeetingCardContainer rounding={rounding} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with statusColor', () => {
      expect.assertions(1);

      const statusColor = Object.values(STATUS_CONSTANTS.COLORS).pop();

      const { container } = render(<MeetingCardContainer statusColor={statusColor} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with statusStriped', () => {
      expect.assertions(1);

      const statusStriped = true;

      const { container } = render(<MeetingCardContainer statusStriped={statusStriped} />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('attributes', () => {
    const testid = 'test-id';

    it('should have class attribute when className prop is provided', async () => {
      expect.assertions(1);

      const className = 'example-class';

      render(<MeetingCardContainer className={className} data-testid={testid} />);

      const component = await screen.findByTestId(testid);

      expect(component.classList.contains(className)).toBe(true);
    });

    it('should have id attribute when id prop is provided', async () => {
      expect.assertions(1);

      const id = 'example-id';

      render(<MeetingCardContainer id={id} data-testid={testid} />);

      const component = await screen.findByTestId(testid);

      expect(component.id).toBe(id);
    });

    it('should have style attribute when style prop is provided', async () => {
      expect.assertions(1);

      const style = { color: 'pink' };

      render(<MeetingCardContainer style={style} data-testid={testid} />);

      const component = await screen.findByTestId(testid);

      expect(component.style.color).toBe(style.color);
    });

    it('should have child nodes that when children prop is provided', async () => {
      expect.assertions(1);

      render(
        <MeetingCardContainer>
          <div data-testid={testid}>example-text</div>
        </MeetingCardContainer>
      );

      const component = await screen.findByTestId(testid);

      expect(component).toBeTruthy();
    });

    it('should have data-color attribute when color prop is provided', async () => {
      expect.assertions(1);

      const attribute = 'data-color';
      const color = Object.values(CONSTANTS.COLORS).pop();

      render(<MeetingCardContainer color={color} data-testid={testid} />);

      const component = await screen.findByTestId(testid);

      expect(component.getAttribute(attribute)).toBe(color);
    });

    it('should have data-height attribute when height prop is provided', async () => {
      expect.assertions(1);

      const attribute = 'data-height';
      const height = Object.values(CONSTANTS.HEIGHTS).pop();

      render(<MeetingCardContainer height={height} data-testid={testid} />);

      const component = await screen.findByTestId(testid);

      expect(component.getAttribute(attribute)).toBe(height);
    });

    it('should have data-outline attribute when outline prop is provided', async () => {
      expect.assertions(1);

      const attribute = 'data-outline';
      const outline = true;

      render(<MeetingCardContainer outline={outline} data-testid={testid} />);

      const component = await screen.findByTestId(testid);

      expect(component.getAttribute(attribute)).toBe(`${outline}`);
    });

    it('should have data-rounding attribute when rounding prop is provided', async () => {
      expect.assertions(1);

      const attribute = 'data-rounding';
      const rounding = Object.values(CONSTANTS.ROUNDINGS).pop();

      render(<MeetingCardContainer rounding={rounding} data-testid={testid} />);

      const component = await screen.findByTestId(testid);

      expect(component.getAttribute(attribute)).toBe(`${rounding}`);
    });

    it('should have status with data-color attribute when statusColor prop is provided', async () => {
      expect.assertions(1);

      const attribute = 'data-color';
      const statusColor = Object.values(STATUS_CONSTANTS.COLORS).pop();

      render(<MeetingCardContainer statusColor={statusColor} data-testid={testid} />);

      const component = await screen.findByTestId(testid);
      const target = component.firstElementChild;

      expect(target.getAttribute(attribute)).toBe(statusColor);
    });

    it('should have status with data-striped attribute when statusStriped prop is provided', async () => {
      expect.assertions(1);

      const attribute = 'data-striped';
      const statusStriped = true;

      render(<MeetingCardContainer statusStriped={statusStriped} data-testid={testid} />);

      const component = await screen.findByTestId(testid);
      const target = component.firstElementChild;

      expect(target.getAttribute(attribute)).toBe(`${statusStriped}`);
    });
  });
});
