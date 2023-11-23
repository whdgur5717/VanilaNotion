export default class Component {
  constructor({ $target, props }) {
    this.$target = $target
    this.props = props || null
    this.setup()
    this.render()
  }
  setup() {
    //state 초기화
  }

  render() {
    //조건부로 렌더링 해야할 경우에는 어떻게??
    this.$target.innerHTML = this.template()
    this.componentDidMount()
  }

  template() {
    return ``
  }

  componentDidMount() {
    //자식 렌더링 등등
  }

  setState(nextState) {
    if (this.state === nextState) {
      return
    }
    this.state = nextState
    this.render()
  }
}
