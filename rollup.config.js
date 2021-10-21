import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'; // 让 rollup 认识 ts 的代码
// 为了将引入的 npm 包，也打包进最终结果中
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';


// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._TiktokOpenAPI_VERSION_ = '${pkg.version}'
}`;

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            footer,
        },
        {
            file: pkg.module,
            format: 'esm',
            footer,
        },
        {
            file: pkg.browser,
            format: 'umd',
            name: 'TiktokOpenAPI',
            footer,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
    ]
};
