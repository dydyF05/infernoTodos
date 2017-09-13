import { render } from 'inferno'
import InfernoTestUtils from 'inferno-test-utils'
import App from './App'

const { findAllInVNodeTree } = InfernoTestUtils

it('renders without crashing', () => {
  const vNodeTree = ( <App /> )
  const predicate = (vNode) => vNode.type === App
  const result = findAllInVNodeTree(vNodeTree, predicate);
});
