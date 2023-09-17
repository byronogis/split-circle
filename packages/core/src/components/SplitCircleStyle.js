import { css } from 'lit'

export default css`
.circle {
  --part-degree: calc(360deg / var(--parts));
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  width: calc(var(--radius) * 2);
  height: calc(var(--radius) * 2);
  background-color: #ccc;
  transform: rotate(v-bind(rotate));
}

.circle-part {
  overflow: hidden;
  position: absolute;
  top: -50%;
  left: -50%;
  width: 100%;
  height: 100%;
  list-style: none;
  transform: rotate(calc(var(--part-degree) * calc(var(--part) - 1)))
             skew(calc(90deg - var(--part-degree))) ;
  transform-origin: right bottom;
}

.circle-part:hover {
  background-color: #42b883;
}

.circle-part-inner_wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  transform: skew(calc(var(--part-degree) - 90deg))
             rotate(calc(calc(var(--part-degree) / 2) - 90deg))
             translate(50%);
  transform-origin: right bottom;
}

.circle-part-inner {
  height: 50%;
}
`
