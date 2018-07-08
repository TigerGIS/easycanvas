module.exports = `
    <article id="WebGL">
        <h1>WebGL</h1>

        <p>Easycanvas支持在canvas中同时渲染2D和3D元素。移动端请避免大量（数百个物体以上）交替使用2D、3D或者颜色纹理、图片纹理进行绘制，否则容易引起卡顿。用WebGL渲染文字时，Easycanvas将使用图片纹理。</p>

        <p>使用时，图片的response需要有跨域的支持，否则图片无法渲染（浏览器会报错）。未来版本会通过base64转换来解决这个问题，但是为了提升性能，建议为域名所在的域名配置跨域的响应头。</p>

        <p>需要注意是的，<strong>WebGL的2D渲染效率可能会比Canvas渲染2D图形要差一些</strong>，因为目前很多浏览器的Canvas API是使用了硬件加速的，浏览器利用GPU进行图形的绘制，效率更高一些。WebGL的优势主要在于可以利用GPU高效进行3D效果所需要的计算。</p>

        <h2>引入方式</h2>

        <code>
            <!-- js文件方式引入 -->
            <!-- 注意放在easycanvas.js后；prod为线上压缩版、dev为开发版；开发版带有调试、警告信息 -->

            <script src="http://your-path/easycanvas.standalone.prod.js"></script>
            <script src="http://your-path/plugin.webgl.standalone.prod.js"></script>

            <!-- node环境引入 -->

            import Easycanvas from easycanvas;
            import EasycanvasWebgl from easycanvas/build/plugin.webgl.js;
            Easycanvas.use(EasycanvasWebgl);

            <!-- 引入后，常用形状可以在Easycanvas.webglShapes下找到 -->
            console.log(Easycanvas.webglShapes);
        </code>

        <h2>WebGL 2D</h2>

        <p>在创建painter实例、或者使用register注册实例到dom上时，指定webgl为true就可以使用WebGL进行渲染。开启WebGL之后，整个canvas实例将自动转化为WebGL的绘制，包括content中的img和text都将用WebGL进行渲染。</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <head>
                    <script src="./lib/easycanvas/plugin.webgl.standalone.prod.js"></script>
                </head>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400,
                        webgl: true, // 开启WebGL渲染
                    });

                    var $letterG = new Easycanvas.sprite({
                        content: {
                            img: 'https://raw.githubusercontent.com/chenzhuo1992/easycanvas/master/demos/G.png',
                        },
                        style: {
                            tw: 50,
                            th: 50,
                            tx: Easycanvas.transition.pendulum(50, 150, 3000).loop(),
                            ty: 100,
                        },
                        events: {
                            click: function (e) {
                                this.style.tw = 100;
                                return true;
                            },
                        },
                    });

                    $app.add($letterG);
                    $app.start();
                </script>
            </code>
        </section>

        // fallback

        <h2>WebGL 3D</h2>

        <p>如果要展示3D图形，可以向sprite类增加webgl参数。引入了WebGL插件之后，会向Easycanvas.webglShapes挂载一些基本的几何体。例如下例是一个旋转的立方体：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <head>
                    <script src="./lib/easycanvas/plugin.webgl.standalone.prod.js"></script>
                </head>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400,
                        webgl: true, // 开启WebGL渲染
                    });

                    var $letterG = new Easycanvas.sprite({
                        style: {
                            tx: 100, ty: 200,
                        },
                        webgl:Easycanvas.webglShapes.block({
                            a: 20, b: 40, c: 80,
                            rx: Easycanvas.transition.linear(0, 360, 1000).loop(),
                            ry: Easycanvas.transition.linear(0, 360, 2000).loop(),
                            rz: 45,
                            colors: [
                                255,255,0,
                                255,0,0,
                                0,255,0
                            ],
                        }),
                    });

                    $app.add($letterG);
                    $app.start();
                </script>
            </code>
        </section>

        <p>这个例子中，向场景中添加了一个block形状，其中a、b、c是物体的长宽高，rx、ry、rz是x、y、z三个方向的旋转角度。这个例子的位置是用style里的tx和ty指定的。<strong>如果webgl里指定了tx、ty，那么将不再遵守style里的tx和ty参数。</strong>。</p>

        <p>除了指定颜色，也可以为几何体指定一张贴图，例如下面是两个圆形的石头：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <head>
                    <script src="./lib/easycanvas/plugin.webgl.standalone.prod.js"></script>
                </head>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400,
                        webgl: true, // 开启WebGL渲染
                    });

                    var stone = $app.imgLoader('https://raw.githubusercontent.com/chenzhuo1992/tanyitan/3d/debug/docs/stone.jpg');

                    var $stone1 = new Easycanvas.sprite({
                        style: {
                            tx: 100, ty: 200,
                        },
                        webgl:Easycanvas.webglShapes.ball({
                            r: 80, b: 40,
                            rx: Easycanvas.transition.linear(0, 360, 1000).loop(),
                            ry: Easycanvas.transition.linear(0, 360, 2000).loop(),
                            rz: 45,
                            img: stone
                        }),
                    });
                    var $stone2 = new Easycanvas.sprite({
                        style: {
                            tx: 300, ty: 200,
                        },
                        webgl:Easycanvas.webglShapes.ball({
                            r: 80, b: 10,
                            rx: Easycanvas.transition.linear(0, 360, 1000).loop(),
                            ry: Easycanvas.transition.linear(0, 360, 2000).loop(),
                            rz: 45,
                            img: stone
                        }),
                    });

                    $app.add($stone1);
                    $app.add($stone2);
                    $app.start();
                </script>
            </code>
        </section>

        <p>可以看到，第一个球比第二个“更圆一些”。这是因为<strong>WebGL渲染时，是没有球体或者圆形的，只能用多个三角形来近似渲染</strong>。这里的b参数代表了三角形的密集程度，b越大，越趋近于圆形，但是也越消耗性能。</p>

    </article>
`;
