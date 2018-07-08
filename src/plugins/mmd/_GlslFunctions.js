var cross = function (a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
};

// var mat = [1.299038052558899, 0, 0, 0, 0, 1.7320507764816284, 0, 0, 0, 0, 1.000100016593933, 1, 0, -17.320507049560547, 21.80219078063965, 22];
var qtransform = function (v, q) {
  // v + 2.0 * cross(cross(v, q.xyz) - q.w*v, q.xyz);
  var res =  arrayAdd(
    v,
    arrayMuti(
      cross(
        arrayMns(
          cross(
            v,
            [q[0],q[1],q[2]]
          ),
          arrayMuti(v, q[3])
        ),
        [q[0],q[1],q[2]]
      ),
      2
    )
  );

  return res;
};

var arrayAdd = function (a, b) {
  return a.map((v, index) => {
    return v + b[index];
  });
};
var arrayMns = function (a, b) {
  return a.map((v, index) => {
    return v - b[index];
  });
};

var arrayMuti = function (a, b) {
  return a.map((v, index) => {
    return v * (b.length ? b[index] : b);
  });
};

// mix only https://en.wikibooks.org/wiki/GLSL_Programming/Vector_and_Matrix_Operations
var mix = function (a, b, wb) {
  // a * (TYPE(1.0) - wb) + b * wb
  return arrayAdd(
    arrayMuti(
      a,
      arrayMns(
        [1, 1, 1],
        [wb, wb, wb]
      )
    ),
    arrayMuti(
      b,
      [wb, wb, wb]
    )
  );
};

module.exports = {
  cross,
  qtransform,
  arrayAdd,
  arrayMns,
  arrayMuti,
  mix,
};
