module.exports = `
    <article id="嵌套与继承">
        <h1>嵌套与继承</h1>

        <p>这里将介绍父子sprite之间的嵌套关系及属性继承。将一些具有方法、事件绑定的sprite抽离出来，便于被其它项目或者模块嵌套，可以显著提升开发效率。</p>
        
        <h2>嵌套</h2>

        <p>嵌套让树型结构更加清晰，既便于大型动画的设计，又可以更方便地在开发者工具中找到要调试的特定sprite。嵌套的父、子级sprite之间有属性的继承规则，类似HTML和CSS一样。</p>

        <p>下面是一个例子，最顶层是一个字母G，它又含有两个children。两个children的位置是继承父级sprite的。</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var G = 'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png';

                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400
                    });

                    // 父级sprite
                    var $parent = new Easycanvas.sprite({
                        content: {
                            img: G,
                        },
                        style: {
                            tw: 50, th: 50,
                            ty: 50, tx: Easycanvas.transition.pendulum(50, 150, 4000).loop(),
                        },
                        // 可以通过children属性来指定它的子节点sprite
                        children: [{
                            content: {
                                img: G,
                            },
                            style: {
                                tw: 20, th: 20,
                                tx: 50, ty: 0,
                            }
                        }],
                    });

                    $app.add($parent);
                    $app.start();

                    // 也可以通过add来动态增加子节点sprite
                    $parent.add(new Easycanvas.sprite({
                        content: {
                            img: G,
                        },
                        style: {
                            tw: 20, th: 20,
                            tx: 50, ty: 50,
                        }
                    }));
                </script>
            </code>
        </section>

        <p>第一个child是放在了children属性里，直接挂载在parent上面的。<strong>当创建一个sprite类的时候，children中的每一个object都会被转化为sprite类.</strong>因此，这两个child的添加方式本质上没有任何区别。</p>

        <p>可以通过remove方法来移除某一个sprite，还是上面这个例子：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <body>
                    <canvas id="app"></canvas>
                    <p>点击小的字母G时调用remove方法</p>
                </body>

                <script>
                    var G = 'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png';

                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400
                    });

                    var $parent = new Easycanvas.sprite({
                        content: {
                            img: G,
                        },
                        style: {
                            tw: 50, th: 50,
                            ty: 50, tx: Easycanvas.transition.pendulum(50, 150, 4000).loop(),
                        },
                        // 这里通过children增加第一个子sprite
                        children: [{
                            content: {
                                img: G,
                            },
                            style: {
                                tw: 20, th: 20,
                                tx: 100, ty: 0,
                            },
                            events: {
                                click: function () {
                                    this.remove();
                                }
                            }
                        }],
                    });

                    // 这里通过add增加第二个子sprite
                    $parent.add(new Easycanvas.sprite({
                        content: {
                            img: G,
                        },
                        style: {
                            tw: 20, th: 20,
                            tx: 100, ty: 80,
                        },
                        events: {
                            click: function () {
                                this.remove();
                            }
                        }
                    }));

                    $app.add($parent);
                    $app.start();
                </script>
            </code>
        </section>

        <p>关于events的具体用法将在后续介绍。</p>

        <p><strong>每一个子sprite都有一个$parent属性，指向它的父级sprite</strong>。根实例没有$parent属性。例如：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <script>
                    var $a = new Easycanvas.sprite();
                    var $b = new Easycanvas.sprite();
                    $b.add($a);

                    document.write($a.$parent === $b); // true

                    var c = {};
                    var $c = new Easycanvas.sprite(c);
                    $c.add($b);

                    document.write($b.$parent === $c); // true
                    document.write($b.$parent === c); // false

                    document.write($c.$parent); // undefined
                </script>
            </code>
        </section>

        <h2>继承</h2>

        <p>子sprite的绘制坐标tx、ty会继承父级sprite，而透明度、缩放将相乘处理。在上面的例子中，children之所以左右摇摆，就是因为parent节点的tx在左右移动。</p>

        <p><strong>默认情况下，tx（渲染的X坐标）、ty（渲染的Y坐标）、scale（缩放）、opacity（透明度）会继承。</strong>当父子sprite同时具有属性时，坐标会相加，透明度和缩放会相乘。例如下例：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <body>
                    <canvas id="app"></canvas>
                    <p>看起来就像左上角源源不断地出现新的字母G</p>
                </body>

                <script>
                    var G = 'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png';

                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400
                    });

                    var $parent = new Easycanvas.sprite({
                        content: {
                            img: G,
                        },
                        style: {
                            tw: 50, th: 50,
                            // 这里让x和y坐标从30线性变化到50，并循环（到50之后会立即变为30，开始下一次线性过度）
                            tx: Easycanvas.transition.linear(30, 50, 1000).loop(),
                            ty: Easycanvas.transition.linear(30, 50, 1000).loop(),
                        },
                    });

                    var $lastChild = $parent;

                    for (var i = 0; i < 10; i++) {
                        // 创建10个sprite，连续嵌套10层。每一层的透明度都是上一层的0.7倍
                        var $newChild = new Easycanvas.sprite({
                            content: {
                                img: G,
                            },
                            style: {
                                tw: 50, th: 50,
                                ty: 20, tx: 20,
                                opacity: 0.7,
                                // 让子sprite被父sprite遮挡
                                zIndex: -1
                            },
                        });

                        $lastChild.add($newChild);

                        $lastChild = $newChild;
                    }

                    $app.add($parent);
                    $app.start();
                </script>
            </code>
        </section>

        <p>可以通过修改inherit来改变要继承的属性，例如下面的例子。但是<strong>不建议这么做</strong>，这样可能会让代码不易理解，或是影响一些插件的正常使用。</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var G = 'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png';

                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400
                    });

                    var $parent = new Easycanvas.sprite({
                        content: {
                            img: G,
                        },
                        style: {
                            tw: 50, th: 50,
                            tx: 50, ty: Easycanvas.transition.pendulum(100, 150, 2000).loop(),
                            opacity: 0.5, rotate: 180,
                        },
                    });

                    var $child = new Easycanvas.sprite({
                        content: {
                            img: G,
                        },
                        style: {
                            tw: 50, th: 50,
                            ty: 100, tx: 100,
                            rotate: 45,
                        },
                    });

                    $child.inherit = ['tx', 'rotate'];
                    // tx（渲染X坐标）会变为50+100=150
                    // rotate（旋转角度）会变为180+45=225
                    // 透明度不继承，为1

                    $app.add($parent);
                    $app.start();
                    $parent.add($child);
                </script>
            </code>
        </section>
    </article>
`;
