import styled from 'styled-components';
import { SC } from '../../theme';
import { boxReset, boxSystem, InjectedBoxProps } from '../../theme/mixin';

export type TestProps = InjectedBoxProps<any>;

export const Test: SC<TestProps> = styled.div`
    ${boxReset()}
    ${boxSystem}
`;
