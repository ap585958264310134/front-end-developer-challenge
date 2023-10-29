import { renderHook, waitFor } from '@testing-library/react';

import { usePath } from './usePath';
import { useSelectionDispatch, useSelectionState } from "contexts/SelectionContextProvider";

jest.mock('contexts/SelectionContextProvider', () => {
  return {
    useSelectionState: jest.fn(),
    useSelectionDispatch: jest.fn()
  };
});

describe('usePath', () => {
  const buttonsDefinition = [
    { "id": "icon0", "iconPositionInFile": 0 },
    { "id": "icon1", "iconPositionInFile": 1 },
    { "id": "icon2", "iconPositionInFile": 2 },
    { "id": "icon3", "iconPositionInFile": 3 }
  ];

  const setUseSelectionState = (value: NonNullable<ReturnType<typeof useSelectionState>>) => {
    (useSelectionState as jest.MockedFunction<typeof useSelectionState>)
      .mockReturnValue(value);
  }

  beforeEach(() => {
    (useSelectionDispatch as jest.MockedFunction<typeof useSelectionDispatch>).mockReturnValue({
      setSelected: jest.fn()
    })
  });

  it('should return initial state', async () => {
    /* Arrange */
    setUseSelectionState({
      maxSelected: 6,
      selected: []
    });

    /* Act */
    const {
      result
    } = renderHook(() => usePath(buttonsDefinition));

    /* Assert */
    const {
      connectorStatuses,
      parsedButtonDefinitions
    } = result.current;

    expect(connectorStatuses).toEqual([false, false, false]);

    expect(parsedButtonDefinitions).toHaveLength(4);

    const clickableMap = parsedButtonDefinitions.map(button => button.clickable);
    expect(clickableMap).toEqual([true, false, false, false]);

    expect(parsedButtonDefinitions[1]).toHaveProperty('borderType', 'border-dark');
    expect(parsedButtonDefinitions[1]).toHaveProperty('position', {
      x: 1,
      y: 1
    });
    expect(parsedButtonDefinitions[1]).toHaveProperty('lastButton', false);

    expect(parsedButtonDefinitions[3]).toHaveProperty('lastButton', true);

    expect(useSelectionDispatch()?.setSelected).not.toBeCalled();
  });

  it('should handle situation when something is selected', () => {
    /* Arrange */
    setUseSelectionState({
      maxSelected: 6,
      selected: ['icon0', 'icon1']
    })

    /* Act */
    const {
      result
    } = renderHook(() => usePath(buttonsDefinition));

    /* Assert */
    const {
      connectorStatuses,
      parsedButtonDefinitions
    } = result.current;

    expect(connectorStatuses).toEqual([true, true, false]);

    const clickableMap = parsedButtonDefinitions.map(button => button.clickable);
    expect(clickableMap).toEqual([false, true, true, false]);

    expect(parsedButtonDefinitions[1]).toHaveProperty('borderType', 'border-light');
  });

  it('should trigger dispatcher', () => {
    /* Arrange */
    setUseSelectionState({
      maxSelected: 6,
      selected: []
    });

    const {
      result
    } = renderHook(() => usePath(buttonsDefinition));

    /* Act */
    result.current.parsedButtonDefinitions[0].onClick('icon0');

    /* Assert */
    expect(useSelectionDispatch()?.setSelected).toBeCalled();
  });

  it('should respect maxSelected', () => {
    /* Arrange */
    setUseSelectionState({
      maxSelected: 2,
      selected: ['icon0', 'icon1']
    })

    /* Act */
    const {
      result
    } = renderHook(() => usePath(buttonsDefinition));

    /* Assert */
    const clickableMap = result.current.parsedButtonDefinitions.map(button => button.clickable);
    expect(clickableMap).toEqual([false, true, false, false]);
  })
});
