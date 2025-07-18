(() => {
  "use strict";
  Array.isArray;
  const e = 100,
    t = 301,
    n = 302,
    i = 306,
    r = 1e3,
    s = 1001,
    a = 1002,
    o = 1003,
    l = 1004,
    c = 1005,
    h = 1006,
    u = 1008,
    d = 1009,
    p = 1012,
    f = 1014,
    m = 1015,
    g = 1016,
    v = 1020,
    x = 1023,
    y = 1026,
    _ = 1027,
    b = 33776,
    w = 33777,
    M = 33778,
    S = 33779,
    T = 2300,
    E = 2301,
    A = 2302,
    R = 2400,
    L = 2401,
    C = 2402,
    P = 3e3,
    D = 3001,
    I = "srgb",
    N = "srgb-linear",
    O = 7680,
    z = 35044,
    U = 35048,
    B = "300 es",
    F = 1035;
  class H {
    addEventListener(e, t) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t);
    }
    hasEventListener(e, t) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[e] && -1 !== n[e].indexOf(t);
    }
    removeEventListener(e, t) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[e];
      if (void 0 !== n) {
        const e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      }
    }
    dispatchEvent(e) {
      if (void 0 === this._listeners) return;
      const t = this._listeners[e.type];
      if (void 0 !== t) {
        e.target = this;
        const n = t.slice(0);
        for (let t = 0, i = n.length; t < i; t++) n[t].call(this, e);
        e.target = null;
      }
    }
  }
  const k = [];
  for (let e = 0; e < 256; e++) k[e] = (e < 16 ? "0" : "") + e.toString(16);
  let G = 1234567;
  const V = Math.PI / 180,
    W = 180 / Math.PI;
  function j() {
    const e = (4294967295 * Math.random()) | 0,
      t = (4294967295 * Math.random()) | 0,
      n = (4294967295 * Math.random()) | 0,
      i = (4294967295 * Math.random()) | 0;
    return (
      k[255 & e] +
      k[(e >> 8) & 255] +
      k[(e >> 16) & 255] +
      k[(e >> 24) & 255] +
      "-" +
      k[255 & t] +
      k[(t >> 8) & 255] +
      "-" +
      k[((t >> 16) & 15) | 64] +
      k[(t >> 24) & 255] +
      "-" +
      k[(63 & n) | 128] +
      k[(n >> 8) & 255] +
      "-" +
      k[(n >> 16) & 255] +
      k[(n >> 24) & 255] +
      k[255 & i] +
      k[(i >> 8) & 255] +
      k[(i >> 16) & 255] +
      k[(i >> 24) & 255]
    ).toLowerCase();
  }
  function q(e, t, n) {
    return Math.max(t, Math.min(n, e));
  }
  function X(e, t) {
    return ((e % t) + t) % t;
  }
  function Y(e, t, n) {
    return (1 - n) * e + n * t;
  }
  function J(e) {
    return 0 == (e & (e - 1)) && 0 !== e;
  }
  function Z(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
  }
  function K(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
  }
  var Q = Object.freeze({
    __proto__: null,
    DEG2RAD: V,
    RAD2DEG: W,
    generateUUID: j,
    clamp: q,
    euclideanModulo: X,
    mapLinear: function (e, t, n, i, r) {
      return i + ((e - t) * (r - i)) / (n - t);
    },
    inverseLerp: function (e, t, n) {
      return e !== t ? (n - e) / (t - e) : 0;
    },
    lerp: Y,
    damp: function (e, t, n, i) {
      return Y(e, t, 1 - Math.exp(-n * i));
    },
    pingpong: function (e, t = 1) {
      return t - Math.abs(X(e, 2 * t) - t);
    },
    smoothstep: function (e, t, n) {
      return e <= t
        ? 0
        : e >= n
        ? 1
        : (e = (e - t) / (n - t)) * e * (3 - 2 * e);
    },
    smootherstep: function (e, t, n) {
      return e <= t
        ? 0
        : e >= n
        ? 1
        : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10);
    },
    randInt: function (e, t) {
      return e + Math.floor(Math.random() * (t - e + 1));
    },
    randFloat: function (e, t) {
      return e + Math.random() * (t - e);
    },
    randFloatSpread: function (e) {
      return e * (0.5 - Math.random());
    },
    seededRandom: function (e) {
      void 0 !== e && (G = e);
      let t = (G += 1831565813);
      return (
        (t = Math.imul(t ^ (t >>> 15), 1 | t)),
        (t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)),
        ((t ^ (t >>> 14)) >>> 0) / 4294967296
      );
    },
    degToRad: function (e) {
      return e * V;
    },
    radToDeg: function (e) {
      return e * W;
    },
    isPowerOfTwo: J,
    ceilPowerOfTwo: Z,
    floorPowerOfTwo: K,
    setQuaternionFromProperEuler: function (e, t, n, i, r) {
      const s = Math.cos,
        a = Math.sin,
        o = s(n / 2),
        l = a(n / 2),
        c = s((t + i) / 2),
        h = a((t + i) / 2),
        u = s((t - i) / 2),
        d = a((t - i) / 2),
        p = s((i - t) / 2),
        f = a((i - t) / 2);
      switch (r) {
        case "XYX":
          e.set(o * h, l * u, l * d, o * c);
          break;
        case "YZY":
          e.set(l * d, o * h, l * u, o * c);
          break;
        case "ZXZ":
          e.set(l * u, l * d, o * h, o * c);
          break;
        case "XZX":
          e.set(o * h, l * f, l * p, o * c);
          break;
        case "YXY":
          e.set(l * p, o * h, l * f, o * c);
          break;
        case "ZYZ":
          e.set(l * f, l * p, o * h, o * c);
          break;
        default:
          console.warn(
            "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
              r
          );
      }
    },
    normalize: function (e, t) {
      switch (t.constructor) {
        case Float32Array:
          return e;
        case Uint16Array:
          return Math.round(65535 * e);
        case Uint8Array:
          return Math.round(255 * e);
        case Int16Array:
          return Math.round(32767 * e);
        case Int8Array:
          return Math.round(127 * e);
        default:
          throw new Error("Invalid component type.");
      }
    },
    denormalize: function (e, t) {
      switch (t.constructor) {
        case Float32Array:
          return e;
        case Uint16Array:
          return e / 65535;
        case Uint8Array:
          return e / 255;
        case Int16Array:
          return Math.max(e / 32767, -1);
        case Int8Array:
          return Math.max(e / 127, -1);
        default:
          throw new Error("Invalid component type.");
      }
    },
  });
  class $ {
    constructor(e = 0, t = 0) {
      (this.x = e), (this.y = t);
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return (this.x = e), (this.y = t), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), this;
    }
    add(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(e, t))
        : ((this.x += e.x), (this.y += e.y), this);
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), this;
    }
    addVectors(e, t) {
      return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
    }
    addScaledVector(e, t) {
      return (this.x += e.x * t), (this.y += e.y * t), this;
    }
    sub(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(e, t))
        : ((this.x -= e.x), (this.y -= e.y), this);
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), this;
    }
    subVectors(e, t) {
      return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
    }
    multiply(e) {
      return (this.x *= e.x), (this.y *= e.y), this;
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), this;
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * n + i[6]),
        (this.y = i[1] * t + i[4] * n + i[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), e;
    }
    fromBufferAttribute(e, t, n) {
      return (
        void 0 !== n &&
          console.warn(
            "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        this
      );
    }
    rotateAround(e, t) {
      const n = Math.cos(t),
        i = Math.sin(t),
        r = this.x - e.x,
        s = this.y - e.y;
      return (
        (this.x = r * n - s * i + e.x), (this.y = r * i + s * n + e.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  $.prototype.isVector2 = !0;
  class ee {
    constructor() {
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
          );
    }
    set(e, t, n, i, r, s, a, o, l) {
      const c = this.elements;
      return (
        (c[0] = e),
        (c[1] = i),
        (c[2] = a),
        (c[3] = t),
        (c[4] = r),
        (c[5] = o),
        (c[6] = n),
        (c[7] = s),
        (c[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return (
        this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        i = t.elements,
        r = this.elements,
        s = n[0],
        a = n[3],
        o = n[6],
        l = n[1],
        c = n[4],
        h = n[7],
        u = n[2],
        d = n[5],
        p = n[8],
        f = i[0],
        m = i[3],
        g = i[6],
        v = i[1],
        x = i[4],
        y = i[7],
        _ = i[2],
        b = i[5],
        w = i[8];
      return (
        (r[0] = s * f + a * v + o * _),
        (r[3] = s * m + a * x + o * b),
        (r[6] = s * g + a * y + o * w),
        (r[1] = l * f + c * v + h * _),
        (r[4] = l * m + c * x + h * b),
        (r[7] = l * g + c * y + h * w),
        (r[2] = u * f + d * v + p * _),
        (r[5] = u * m + d * x + p * b),
        (r[8] = u * g + d * y + p * w),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        c = e[8];
      return (
        t * s * c - t * a * l - n * r * c + n * a * o + i * r * l - i * s * o
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        c = e[8],
        h = c * s - a * l,
        u = a * o - c * r,
        d = l * r - s * o,
        p = t * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const f = 1 / p;
      return (
        (e[0] = h * f),
        (e[1] = (i * l - c * n) * f),
        (e[2] = (a * n - i * s) * f),
        (e[3] = u * f),
        (e[4] = (c * t - i * o) * f),
        (e[5] = (i * r - a * t) * f),
        (e[6] = d * f),
        (e[7] = (n * o - l * t) * f),
        (e[8] = (s * t - n * r) * f),
        this
      );
    }
    transpose() {
      let e;
      const t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, i, r, s, a) {
      const o = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * o,
          n * l,
          -n * (o * s + l * a) + s + e,
          -i * l,
          i * o,
          -i * (-l * s + o * a) + a + t,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(e, t) {
      const n = this.elements;
      return (
        (n[0] *= e),
        (n[3] *= e),
        (n[6] *= e),
        (n[1] *= t),
        (n[4] *= t),
        (n[7] *= t),
        this
      );
    }
    rotate(e) {
      const t = Math.cos(e),
        n = Math.sin(e),
        i = this.elements,
        r = i[0],
        s = i[3],
        a = i[6],
        o = i[1],
        l = i[4],
        c = i[7];
      return (
        (i[0] = t * r + n * o),
        (i[3] = t * s + n * l),
        (i[6] = t * a + n * c),
        (i[1] = -n * r + t * o),
        (i[4] = -n * s + t * l),
        (i[7] = -n * a + t * c),
        this
      );
    }
    translate(e, t) {
      const n = this.elements;
      return (
        (n[0] += e * n[2]),
        (n[3] += e * n[5]),
        (n[6] += e * n[8]),
        (n[1] += t * n[2]),
        (n[4] += t * n[5]),
        (n[7] += t * n[8]),
        this
      );
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  function te(e) {
    for (let t = e.length - 1; t >= 0; --t) if (e[t] > 65535) return !0;
    return !1;
  }
  function ne(e) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", e);
  }
  function ie(e) {
    return e < 0.04045
      ? 0.0773993808 * e
      : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
  }
  function re(e) {
    return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
  }
  (ee.prototype.isMatrix3 = !0),
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array;
  const se = { [I]: { [N]: ie }, [N]: { [I]: re } },
    ae = {
      legacyMode: !0,
      get workingColorSpace() {
        return N;
      },
      set workingColorSpace(e) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
      },
      convert: function (e, t, n) {
        if (this.legacyMode || t === n || !t || !n) return e;
        if (se[t] && void 0 !== se[t][n]) {
          const i = se[t][n];
          return (e.r = i(e.r)), (e.g = i(e.g)), (e.b = i(e.b)), e;
        }
        throw new Error("Unsupported color space conversion.");
      },
      fromWorkingColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t);
      },
      toWorkingColorSpace: function (e, t) {
        return this.convert(e, t, this.workingColorSpace);
      },
    },
    oe = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    le = { r: 0, g: 0, b: 0 },
    ce = { h: 0, s: 0, l: 0 },
    he = { h: 0, s: 0, l: 0 };
  function ue(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + 6 * (t - e) * n
        : n < 0.5
        ? t
        : n < 2 / 3
        ? e + 6 * (t - e) * (2 / 3 - n)
        : e
    );
  }
  function de(e, t) {
    return (t.r = e.r), (t.g = e.g), (t.b = e.b), t;
  }
  class pe {
    constructor(e, t, n) {
      return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n);
    }
    set(e) {
      return (
        e && e.isColor
          ? this.copy(e)
          : "number" == typeof e
          ? this.setHex(e)
          : "string" == typeof e && this.setStyle(e),
        this
      );
    }
    setScalar(e) {
      return (this.r = e), (this.g = e), (this.b = e), this;
    }
    setHex(e, t = "srgb") {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (255 & e) / 255),
        ae.toWorkingColorSpace(this, t),
        this
      );
    }
    setRGB(e, t, n, i = "srgb-linear") {
      return (
        (this.r = e),
        (this.g = t),
        (this.b = n),
        ae.toWorkingColorSpace(this, i),
        this
      );
    }
    setHSL(e, t, n, i = "srgb-linear") {
      if (((e = X(e, 1)), (t = q(t, 0, 1)), (n = q(n, 0, 1)), 0 === t))
        this.r = this.g = this.b = n;
      else {
        const i = n <= 0.5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - i;
        (this.r = ue(r, i, e + 1 / 3)),
          (this.g = ue(r, i, e)),
          (this.b = ue(r, i, e - 1 / 3));
      }
      return ae.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = "srgb") {
      function n(t) {
        void 0 !== t &&
          parseFloat(t) < 1 &&
          console.warn(
            "THREE.Color: Alpha component of " + e + " will be ignored."
          );
      }
      let i;
      if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
        let e;
        const r = i[1],
          s = i[2];
        switch (r) {
          case "rgb":
          case "rgba":
            if (
              (e =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                (this.r = Math.min(255, parseInt(e[1], 10)) / 255),
                (this.g = Math.min(255, parseInt(e[2], 10)) / 255),
                (this.b = Math.min(255, parseInt(e[3], 10)) / 255),
                ae.toWorkingColorSpace(this, t),
                n(e[4]),
                this
              );
            if (
              (e =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                (this.r = Math.min(100, parseInt(e[1], 10)) / 100),
                (this.g = Math.min(100, parseInt(e[2], 10)) / 100),
                (this.b = Math.min(100, parseInt(e[3], 10)) / 100),
                ae.toWorkingColorSpace(this, t),
                n(e[4]),
                this
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (e =
                /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            ) {
              const i = parseFloat(e[1]) / 360,
                r = parseInt(e[2], 10) / 100,
                s = parseInt(e[3], 10) / 100;
              return n(e[4]), this.setHSL(i, r, s, t);
            }
        }
      } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
        const e = i[1],
          n = e.length;
        if (3 === n)
          return (
            (this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255),
            (this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255),
            (this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255),
            ae.toWorkingColorSpace(this, t),
            this
          );
        if (6 === n)
          return (
            (this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255),
            (this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255),
            (this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255),
            ae.toWorkingColorSpace(this, t),
            this
          );
      }
      return e && e.length > 0 ? this.setColorName(e, t) : this;
    }
    setColorName(e, t = "srgb") {
      const n = oe[e.toLowerCase()];
      return (
        void 0 !== n
          ? this.setHex(n, t)
          : console.warn("THREE.Color: Unknown color " + e),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
    }
    copySRGBToLinear(e) {
      return (this.r = ie(e.r)), (this.g = ie(e.g)), (this.b = ie(e.b)), this;
    }
    copyLinearToSRGB(e) {
      return (this.r = re(e.r)), (this.g = re(e.g)), (this.b = re(e.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = "srgb") {
      return (
        ae.fromWorkingColorSpace(de(this, le), e),
        (q(255 * le.r, 0, 255) << 16) ^
          (q(255 * le.g, 0, 255) << 8) ^
          (q(255 * le.b, 0, 255) << 0)
      );
    }
    getHexString(e = "srgb") {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = "srgb-linear") {
      ae.fromWorkingColorSpace(de(this, le), t);
      const n = le.r,
        i = le.g,
        r = le.b,
        s = Math.max(n, i, r),
        a = Math.min(n, i, r);
      let o, l;
      const c = (a + s) / 2;
      if (a === s) (o = 0), (l = 0);
      else {
        const e = s - a;
        switch (((l = c <= 0.5 ? e / (s + a) : e / (2 - s - a)), s)) {
          case n:
            o = (i - r) / e + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / e + 2;
            break;
          case r:
            o = (n - i) / e + 4;
        }
        o /= 6;
      }
      return (e.h = o), (e.s = l), (e.l = c), e;
    }
    getRGB(e, t = "srgb-linear") {
      return (
        ae.fromWorkingColorSpace(de(this, le), t),
        (e.r = le.r),
        (e.g = le.g),
        (e.b = le.b),
        e
      );
    }
    getStyle(e = "srgb") {
      return (
        ae.fromWorkingColorSpace(de(this, le), e),
        e !== I
          ? `color(${e} ${le.r} ${le.g} ${le.b})`
          : `rgb(${(255 * le.r) | 0},${(255 * le.g) | 0},${(255 * le.b) | 0})`
      );
    }
    offsetHSL(e, t, n) {
      return (
        this.getHSL(ce),
        (ce.h += e),
        (ce.s += t),
        (ce.l += n),
        this.setHSL(ce.h, ce.s, ce.l),
        this
      );
    }
    add(e) {
      return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
    }
    addColors(e, t) {
      return (
        (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
      );
    }
    addScalar(e) {
      return (this.r += e), (this.g += e), (this.b += e), this;
    }
    sub(e) {
      return (
        (this.r = Math.max(0, this.r - e.r)),
        (this.g = Math.max(0, this.g - e.g)),
        (this.b = Math.max(0, this.b - e.b)),
        this
      );
    }
    multiply(e) {
      return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
    }
    multiplyScalar(e) {
      return (this.r *= e), (this.g *= e), (this.b *= e), this;
    }
    lerp(e, t) {
      return (
        (this.r += (e.r - this.r) * t),
        (this.g += (e.g - this.g) * t),
        (this.b += (e.b - this.b) * t),
        this
      );
    }
    lerpColors(e, t, n) {
      return (
        (this.r = e.r + (t.r - e.r) * n),
        (this.g = e.g + (t.g - e.g) * n),
        (this.b = e.b + (t.b - e.b) * n),
        this
      );
    }
    lerpHSL(e, t) {
      this.getHSL(ce), e.getHSL(he);
      const n = Y(ce.h, he.h, t),
        i = Y(ce.s, he.s, t),
        r = Y(ce.l, he.l, t);
      return this.setHSL(n, i, r), this;
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
    }
    fromBufferAttribute(e, t) {
      return (
        (this.r = e.getX(t)),
        (this.g = e.getY(t)),
        (this.b = e.getZ(t)),
        !0 === e.normalized &&
          ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
        this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  let fe;
  (pe.NAMES = oe),
    (pe.prototype.isColor = !0),
    (pe.prototype.r = 1),
    (pe.prototype.g = 1),
    (pe.prototype.b = 1);
  class me {
    static getDataURL(e) {
      if (/^data:/i.test(e.src)) return e.src;
      if ("undefined" == typeof HTMLCanvasElement) return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        void 0 === fe && (fe = ne("canvas")),
          (fe.width = e.width),
          (fe.height = e.height);
        const n = fe.getContext("2d");
        e instanceof ImageData
          ? n.putImageData(e, 0, 0)
          : n.drawImage(e, 0, 0, e.width, e.height),
          (t = fe);
      }
      return t.width > 2048 || t.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            e
          ),
          t.toDataURL("image/jpeg", 0.6))
        : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ) {
        const t = ne("canvas");
        (t.width = e.width), (t.height = e.height);
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const i = n.getImageData(0, 0, e.width, e.height),
          r = i.data;
        for (let e = 0; e < r.length; e++) r[e] = 255 * ie(r[e] / 255);
        return n.putImageData(i, 0, 0), t;
      }
      if (e.data) {
        const t = e.data.slice(0);
        for (let e = 0; e < t.length; e++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray
            ? (t[e] = Math.floor(255 * ie(t[e] / 255)))
            : (t[e] = ie(t[e]));
        return { data: t, width: e.width, height: e.height };
      }
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
    }
  }
  class ge {
    constructor(e = null) {
      (this.uuid = j()), (this.data = e), (this.version = 0);
    }
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
      const n = { uuid: this.uuid, url: "" },
        i = this.data;
      if (null !== i) {
        let e;
        if (Array.isArray(i)) {
          e = [];
          for (let t = 0, n = i.length; t < n; t++)
            i[t].isDataTexture ? e.push(ve(i[t].image)) : e.push(ve(i[t]));
        } else e = ve(i);
        n.url = e;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function ve(e) {
    return ("undefined" != typeof HTMLImageElement &&
      e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ? me.getDataURL(e)
      : e.data
      ? {
          data: Array.prototype.slice.call(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  ge.prototype.isSource = !0;
  let xe = 0;
  class ye extends H {
    constructor(
      e = ye.DEFAULT_IMAGE,
      t = ye.DEFAULT_MAPPING,
      n = 1001,
      i = 1001,
      r = 1006,
      s = 1008,
      a = 1023,
      o = 1009,
      l = 1,
      c = 3e3
    ) {
      super(),
        Object.defineProperty(this, "id", { value: xe++ }),
        (this.uuid = j()),
        (this.name = ""),
        (this.source = new ge(e)),
        (this.mipmaps = []),
        (this.mapping = t),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = s),
        (this.anisotropy = l),
        (this.format = a),
        (this.internalFormat = null),
        (this.type = o),
        (this.offset = new $(0, 0)),
        (this.repeat = new $(1, 1)),
        (this.center = new $(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new ee()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = c),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.needsPMREMUpdate = !1);
    }
    get image() {
      return this.source.data;
    }
    set image(e) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.source = e.source),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.encoding = e.encoding),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(e) {
      if (300 !== this.mapping) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case r:
            e.x = e.x - Math.floor(e.x);
            break;
          case s:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case a:
            1 === Math.abs(Math.floor(e.x) % 2)
              ? (e.x = Math.ceil(e.x) - e.x)
              : (e.x = e.x - Math.floor(e.x));
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case r:
            e.y = e.y - Math.floor(e.y);
            break;
          case s:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case a:
            1 === Math.abs(Math.floor(e.y) % 2)
              ? (e.y = Math.ceil(e.y) - e.y)
              : (e.y = e.y - Math.floor(e.y));
        }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      !0 === e && (this.version++, (this.source.needsUpdate = !0));
    }
  }
  (ye.DEFAULT_IMAGE = null),
    (ye.DEFAULT_MAPPING = 300),
    (ye.prototype.isTexture = !0);
  class _e {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      (this.x = e), (this.y = t), (this.z = n), (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, i) {
      return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setZ(e) {
      return (this.z = e), this;
    }
    setW(e) {
      return (this.w = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return (
        (this.x = e.x),
        (this.y = e.y),
        (this.z = e.z),
        (this.w = void 0 !== e.w ? e.w : 1),
        this
      );
    }
    add(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(e, t))
        : ((this.x += e.x),
          (this.y += e.y),
          (this.z += e.z),
          (this.w += e.w),
          this);
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        (this.w = e.w + t.w),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        (this.w += e.w * t),
        this
      );
    }
    sub(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(e, t))
        : ((this.x -= e.x),
          (this.y -= e.y),
          (this.z -= e.z),
          (this.w -= e.w),
          this);
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        (this.w = e.w - t.w),
        this
      );
    }
    multiply(e) {
      return (
        (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
      );
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        s = e.elements;
      return (
        (this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r),
        (this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r),
        (this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r),
        (this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r),
        this
      );
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      const t = Math.sqrt(1 - e.w * e.w);
      return (
        t < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(e) {
      let t, n, i, r;
      const s = 0.01,
        a = 0.1,
        o = e.elements,
        l = o[0],
        c = o[4],
        h = o[8],
        u = o[1],
        d = o[5],
        p = o[9],
        f = o[2],
        m = o[6],
        g = o[10];
      if (Math.abs(c - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
        if (
          Math.abs(c + u) < a &&
          Math.abs(h + f) < a &&
          Math.abs(p + m) < a &&
          Math.abs(l + d + g - 3) < a
        )
          return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const e = (l + 1) / 2,
          o = (d + 1) / 2,
          v = (g + 1) / 2,
          x = (c + u) / 4,
          y = (h + f) / 4,
          _ = (p + m) / 4;
        return (
          e > o && e > v
            ? e < s
              ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
              : ((n = Math.sqrt(e)), (i = x / n), (r = y / n))
            : o > v
            ? o < s
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(o)), (n = x / i), (r = _ / i))
            : v < s
            ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
            : ((r = Math.sqrt(v)), (n = y / r), (i = _ / r)),
          this.set(n, i, r, t),
          this
        );
      }
      let v = Math.sqrt(
        (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
      );
      return (
        Math.abs(v) < 0.001 && (v = 1),
        (this.x = (m - p) / v),
        (this.y = (h - f) / v),
        (this.z = (u - c) / v),
        (this.w = Math.acos((l + d + g - 1) / 2)),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        (this.w = Math.min(this.w, e.w)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        (this.w = Math.max(this.w, e.w)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        (this.z = Math.max(e.z, Math.min(t.z, this.z))),
        (this.w = Math.max(e.w, Math.min(t.w, this.w))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        (this.z = Math.max(e, Math.min(t, this.z))),
        (this.w = Math.max(e, Math.min(t, this.w))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        (this.w += (e.w - this.w) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        (this.w = e.w + (t.w - e.w) * n),
        this
      );
    }
    equals(e) {
      return (
        e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this.x = e[t]),
        (this.y = e[t + 1]),
        (this.z = e[t + 2]),
        (this.w = e[t + 3]),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this.x),
        (e[t + 1] = this.y),
        (e[t + 2] = this.z),
        (e[t + 3] = this.w),
        e
      );
    }
    fromBufferAttribute(e, t, n) {
      return (
        void 0 !== n &&
          console.warn(
            "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        (this.w = e.getW(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  _e.prototype.isVector4 = !0;
  class be extends H {
    constructor(e, t, n = {}) {
      super(),
        (this.width = e),
        (this.height = t),
        (this.depth = 1),
        (this.scissor = new _e(0, 0, e, t)),
        (this.scissorTest = !1),
        (this.viewport = new _e(0, 0, e, t));
      const i = { width: e, height: t, depth: 1 };
      (this.texture = new ye(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.flipY = !1),
        (this.texture.generateMipmaps =
          void 0 !== n.generateMipmaps && n.generateMipmaps),
        (this.texture.internalFormat =
          void 0 !== n.internalFormat ? n.internalFormat : null),
        (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : h),
        (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
        (this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
        (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null),
        (this.samples = void 0 !== n.samples ? n.samples : 0);
    }
    setSize(e, t, n = 1) {
      (this.width === e && this.height === t && this.depth === n) ||
        ((this.width = e),
        (this.height = t),
        (this.depth = n),
        (this.texture.image.width = e),
        (this.texture.image.height = t),
        (this.texture.image.depth = n),
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.width = e.width),
        (this.height = e.height),
        (this.depth = e.depth),
        this.viewport.copy(e.viewport),
        (this.texture = e.texture.clone()),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.image = Object.assign({}, e.texture.image)),
        (this.depthBuffer = e.depthBuffer),
        (this.stencilBuffer = e.stencilBuffer),
        null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
        (this.samples = e.samples),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  be.prototype.isWebGLRenderTarget = !0;
  class we extends ye {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null),
        (this.image = { data: e, width: t, height: n, depth: i }),
        (this.magFilter = o),
        (this.minFilter = o),
        (this.wrapR = s),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  (we.prototype.isDataArrayTexture = !0),
    (class extends be {
      constructor(e, t, n) {
        super(e, t),
          (this.depth = n),
          (this.texture = new we(null, e, t, n)),
          (this.texture.isRenderTargetTexture = !0);
      }
    }.prototype.isWebGLArrayRenderTarget = !0);
  class Me extends ye {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null),
        (this.image = { data: e, width: t, height: n, depth: i }),
        (this.magFilter = o),
        (this.minFilter = o),
        (this.wrapR = s),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  (Me.prototype.isData3DTexture = !0),
    (class extends be {
      constructor(e, t, n) {
        super(e, t),
          (this.depth = n),
          (this.texture = new Me(null, e, t, n)),
          (this.texture.isRenderTargetTexture = !0);
      }
    }.prototype.isWebGL3DRenderTarget = !0),
    (class extends be {
      constructor(e, t, n, i = {}) {
        super(e, t, i);
        const r = this.texture;
        this.texture = [];
        for (let e = 0; e < n; e++)
          (this.texture[e] = r.clone()),
            (this.texture[e].isRenderTargetTexture = !0);
      }
      setSize(e, t, n = 1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
          (this.width = e), (this.height = t), (this.depth = n);
          for (let i = 0, r = this.texture.length; i < r; i++)
            (this.texture[i].image.width = e),
              (this.texture[i].image.height = t),
              (this.texture[i].image.depth = n);
          this.dispose();
        }
        return (
          this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this
        );
      }
      copy(e) {
        this.dispose(),
          (this.width = e.width),
          (this.height = e.height),
          (this.depth = e.depth),
          this.viewport.set(0, 0, this.width, this.height),
          this.scissor.set(0, 0, this.width, this.height),
          (this.depthBuffer = e.depthBuffer),
          (this.stencilBuffer = e.stencilBuffer),
          null !== e.depthTexture &&
            (this.depthTexture = e.depthTexture.clone()),
          (this.texture.length = 0);
        for (let t = 0, n = e.texture.length; t < n; t++)
          (this.texture[t] = e.texture[t].clone()),
            (this.texture[t].isRenderTargetTexture = !0);
        return this;
      }
    }.prototype.isWebGLMultipleRenderTargets = !0);
  class Se {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      (this._x = e), (this._y = t), (this._z = n), (this._w = i);
    }
    static slerp(e, t, n, i) {
      return (
        console.warn(
          "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
        ),
        n.slerpQuaternions(e, t, i)
      );
    }
    static slerpFlat(e, t, n, i, r, s, a) {
      let o = n[i + 0],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3];
      const u = r[s + 0],
        d = r[s + 1],
        p = r[s + 2],
        f = r[s + 3];
      if (0 === a)
        return (
          (e[t + 0] = o), (e[t + 1] = l), (e[t + 2] = c), void (e[t + 3] = h)
        );
      if (1 === a)
        return (
          (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), void (e[t + 3] = f)
        );
      if (h !== f || o !== u || l !== d || c !== p) {
        let e = 1 - a;
        const t = o * u + l * d + c * p + h * f,
          n = t >= 0 ? 1 : -1,
          i = 1 - t * t;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i),
            s = Math.atan2(r, t * n);
          (e = Math.sin(e * s) / r), (a = Math.sin(a * s) / r);
        }
        const r = a * n;
        if (
          ((o = o * e + u * r),
          (l = l * e + d * r),
          (c = c * e + p * r),
          (h = h * e + f * r),
          e === 1 - a)
        ) {
          const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          (o *= e), (l *= e), (c *= e), (h *= e);
        }
      }
      (e[t] = o), (e[t + 1] = l), (e[t + 2] = c), (e[t + 3] = h);
    }
    static multiplyQuaternionsFlat(e, t, n, i, r, s) {
      const a = n[i],
        o = n[i + 1],
        l = n[i + 2],
        c = n[i + 3],
        h = r[s],
        u = r[s + 1],
        d = r[s + 2],
        p = r[s + 3];
      return (
        (e[t] = a * p + c * h + o * d - l * u),
        (e[t + 1] = o * p + c * u + l * h - a * d),
        (e[t + 2] = l * p + c * d + a * u - o * h),
        (e[t + 3] = c * p - a * h - o * u - l * d),
        e
      );
    }
    get x() {
      return this._x;
    }
    set x(e) {
      (this._x = e), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      (this._y = e), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      (this._z = e), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e) {
      (this._w = e), this._onChangeCallback();
    }
    set(e, t, n, i) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return (
        (this._x = e.x),
        (this._y = e.y),
        (this._z = e.z),
        (this._w = e.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(e, t) {
      if (!e || !e.isEuler)
        throw new Error(
          "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
        );
      const n = e._x,
        i = e._y,
        r = e._z,
        s = e._order,
        a = Math.cos,
        o = Math.sin,
        l = a(n / 2),
        c = a(i / 2),
        h = a(r / 2),
        u = o(n / 2),
        d = o(i / 2),
        p = o(r / 2);
      switch (s) {
        case "XYZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "YXZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "ZXY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "ZYX":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "YZX":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "XZY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        default:
          console.warn(
            "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
              s
          );
      }
      return !1 !== t && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
      const n = t / 2,
        i = Math.sin(n);
      return (
        (this._x = e.x * i),
        (this._y = e.y * i),
        (this._z = e.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e) {
      const t = e.elements,
        n = t[0],
        i = t[4],
        r = t[8],
        s = t[1],
        a = t[5],
        o = t[9],
        l = t[2],
        c = t[6],
        h = t[10],
        u = n + a + h;
      if (u > 0) {
        const e = 0.5 / Math.sqrt(u + 1);
        (this._w = 0.25 / e),
          (this._x = (c - o) * e),
          (this._y = (r - l) * e),
          (this._z = (s - i) * e);
      } else if (n > a && n > h) {
        const e = 2 * Math.sqrt(1 + n - a - h);
        (this._w = (c - o) / e),
          (this._x = 0.25 * e),
          (this._y = (i + s) / e),
          (this._z = (r + l) / e);
      } else if (a > h) {
        const e = 2 * Math.sqrt(1 + a - n - h);
        (this._w = (r - l) / e),
          (this._x = (i + s) / e),
          (this._y = 0.25 * e),
          (this._z = (o + c) / e);
      } else {
        const e = 2 * Math.sqrt(1 + h - n - a);
        (this._w = (s - i) / e),
          (this._x = (r + l) / e),
          (this._y = (o + c) / e),
          (this._z = 0.25 * e);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(e.x) > Math.abs(e.z)
              ? ((this._x = -e.y),
                (this._y = e.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -e.z),
                (this._z = e.y),
                (this._w = n)))
          : ((this._x = e.y * t.z - e.z * t.y),
            (this._y = e.z * t.x - e.x * t.z),
            (this._z = e.x * t.y - e.y * t.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(q(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (0 === n) return this;
      const i = Math.min(1, t / n);
      return this.slerp(e, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let e = this.length();
      return (
        0 === e
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((e = 1 / e),
            (this._x = this._x * e),
            (this._y = this._y * e),
            (this._z = this._z * e),
            (this._w = this._w * e)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
          ),
          this.multiplyQuaternions(e, t))
        : this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      const n = e._x,
        i = e._y,
        r = e._z,
        s = e._w,
        a = t._x,
        o = t._y,
        l = t._z,
        c = t._w;
      return (
        (this._x = n * c + s * a + i * l - r * o),
        (this._y = i * c + s * o + r * a - n * l),
        (this._z = r * c + s * l + n * o - i * a),
        (this._w = s * c - n * a - i * o - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(e, t) {
      if (0 === t) return this;
      if (1 === t) return this.copy(e);
      const n = this._x,
        i = this._y,
        r = this._z,
        s = this._w;
      let a = s * e._w + n * e._x + i * e._y + r * e._z;
      if (
        (a < 0
          ? ((this._w = -e._w),
            (this._x = -e._x),
            (this._y = -e._y),
            (this._z = -e._z),
            (a = -a))
          : this.copy(e),
        a >= 1)
      )
        return (this._w = s), (this._x = n), (this._y = i), (this._z = r), this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const e = 1 - t;
        return (
          (this._w = e * s + t * this._w),
          (this._x = e * n + t * this._x),
          (this._y = e * i + t * this._y),
          (this._z = e * r + t * this._z),
          this.normalize(),
          this._onChangeCallback(),
          this
        );
      }
      const l = Math.sqrt(o),
        c = Math.atan2(l, a),
        h = Math.sin((1 - t) * c) / l,
        u = Math.sin(t * c) / l;
      return (
        (this._w = s * h + this._w * u),
        (this._x = n * h + this._x * u),
        (this._y = i * h + this._y * u),
        (this._z = r * h + this._z * u),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      const e = Math.random(),
        t = Math.sqrt(1 - e),
        n = Math.sqrt(e),
        i = 2 * Math.PI * Math.random(),
        r = 2 * Math.PI * Math.random();
      return this.set(
        t * Math.cos(i),
        n * Math.sin(r),
        n * Math.cos(r),
        t * Math.sin(i)
      );
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._w === this._w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this._x = e[t]),
        (this._y = e[t + 1]),
        (this._z = e[t + 2]),
        (this._w = e[t + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this._x = e.getX(t)),
        (this._y = e.getY(t)),
        (this._z = e.getZ(t)),
        (this._w = e.getW(t)),
        this
      );
    }
    _onChange(e) {
      return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  Se.prototype.isQuaternion = !0;
  class Te {
    constructor(e = 0, t = 0, n = 0) {
      (this.x = e), (this.y = t), (this.z = n);
    }
    set(e, t, n) {
      return (
        void 0 === n && (n = this.z),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        this
      );
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), (this.z = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setZ(e) {
      return (this.z = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
    }
    add(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(e, t))
        : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), (this.z += e), this;
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this
      );
    }
    sub(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(e, t))
        : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), (this.z -= e), this;
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
      );
    }
    multiply(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
          ),
          this.multiplyVectors(e, t))
        : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), this;
    }
    multiplyVectors(e, t) {
      return (
        (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
      );
    }
    applyEuler(e) {
      return (
        (e && e.isEuler) ||
          console.error(
            "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
          ),
        this.applyQuaternion(Ae.setFromEuler(e))
      );
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(Ae.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6] * i),
        (this.y = r[1] * t + r[4] * n + r[7] * i),
        (this.z = r[2] * t + r[5] * n + r[8] * i),
        this
      );
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements,
        s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
      return (
        (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s),
        (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s),
        (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s),
        this
      );
    }
    applyQuaternion(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.x,
        s = e.y,
        a = e.z,
        o = e.w,
        l = o * t + s * i - a * n,
        c = o * n + a * t - r * i,
        h = o * i + r * n - s * t,
        u = -r * t - s * n - a * i;
      return (
        (this.x = l * o + u * -r + c * -a - h * -s),
        (this.y = c * o + u * -s + h * -r - l * -a),
        (this.z = h * o + u * -a + l * -s - c * -r),
        this
      );
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
        e.projectionMatrix
      );
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
        e.matrixWorld
      );
    }
    transformDirection(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[4] * n + r[8] * i),
        (this.y = r[1] * t + r[5] * n + r[9] * i),
        (this.z = r[2] * t + r[6] * n + r[10] * i),
        this.normalize()
      );
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        (this.z = Math.max(e.z, Math.min(t.z, this.z))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        (this.z = Math.max(e, Math.min(t, this.z))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        this
      );
    }
    cross(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
          ),
          this.crossVectors(e, t))
        : this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      const n = e.x,
        i = e.y,
        r = e.z,
        s = t.x,
        a = t.y,
        o = t.z;
      return (
        (this.x = i * o - r * a),
        (this.y = r * s - n * o),
        (this.z = n * a - i * s),
        this
      );
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (0 === t) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return Ee.copy(this).projectOnVector(e), this.sub(Ee);
    }
    reflect(e) {
      return this.sub(Ee.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (0 === t) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(q(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y,
        i = this.z - e.z;
      return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
      return (
        Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      );
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      const i = Math.sin(t) * e;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(t) * e),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return (
        (this.x = e * Math.sin(t)),
        (this.y = n),
        (this.z = e * Math.cos(t)),
        this
      );
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        i = this.setFromMatrixColumn(e, 2).length();
      return (this.x = t), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, 4 * t);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, 3 * t);
    }
    setFromEuler(e) {
      return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
    }
    fromBufferAttribute(e, t, n) {
      return (
        void 0 !== n &&
          console.warn(
            "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      const e = 2 * (Math.random() - 0.5),
        t = Math.random() * Math.PI * 2,
        n = Math.sqrt(1 - e ** 2);
      return (
        (this.x = n * Math.cos(t)),
        (this.y = n * Math.sin(t)),
        (this.z = e),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  Te.prototype.isVector3 = !0;
  const Ee = new Te(),
    Ae = new Se();
  class Re {
    constructor(
      e = new Te(1 / 0, 1 / 0, 1 / 0),
      t = new Te(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.min = e), (this.max = t);
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      let t = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        s = -1 / 0,
        a = -1 / 0;
      for (let o = 0, l = e.length; o < l; o += 3) {
        const l = e[o],
          c = e[o + 1],
          h = e[o + 2];
        l < t && (t = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > s && (s = c),
          h > a && (a = h);
      }
      return this.min.set(t, n, i), this.max.set(r, s, a), this;
    }
    setFromBufferAttribute(e) {
      let t = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        s = -1 / 0,
        a = -1 / 0;
      for (let o = 0, l = e.count; o < l; o++) {
        const l = e.getX(o),
          c = e.getY(o),
          h = e.getZ(o);
        l < t && (t = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > s && (s = c),
          h > a && (a = h);
      }
      return this.min.set(t, n, i), this.max.set(r, s, a), this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = Ce.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = !1) {
      return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = !1) {
      e.updateWorldMatrix(!1, !1);
      const n = e.geometry;
      if (void 0 !== n)
        if (t && null != n.attributes && void 0 !== n.attributes.position) {
          const t = n.attributes.position;
          for (let n = 0, i = t.count; n < i; n++)
            Ce.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld),
              this.expandByPoint(Ce);
        } else
          null === n.boundingBox && n.computeBoundingBox(),
            Pe.copy(n.boundingBox),
            Pe.applyMatrix4(e.matrixWorld),
            this.union(Pe);
      const i = e.children;
      for (let e = 0, n = i.length; e < n; e++) this.expandByObject(i[e], t);
      return this;
    }
    containsPoint(e) {
      return !(
        e.x < this.min.x ||
        e.x > this.max.x ||
        e.y < this.min.y ||
        e.y > this.max.y ||
        e.z < this.min.z ||
        e.z > this.max.z
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(e) {
      return !(
        e.max.x < this.min.x ||
        e.min.x > this.max.x ||
        e.max.y < this.min.y ||
        e.min.y > this.max.y ||
        e.max.z < this.min.z ||
        e.min.z > this.max.z
      );
    }
    intersectsSphere(e) {
      return (
        this.clampPoint(e.center, Ce),
        Ce.distanceToSquared(e.center) <= e.radius * e.radius
      );
    }
    intersectsPlane(e) {
      let t, n;
      return (
        e.normal.x > 0
          ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
          : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
        e.normal.y > 0
          ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
        e.normal.z > 0
          ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
        t <= -e.constant && n >= -e.constant
      );
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      this.getCenter(Be),
        Fe.subVectors(this.max, Be),
        De.subVectors(e.a, Be),
        Ie.subVectors(e.b, Be),
        Ne.subVectors(e.c, Be),
        Oe.subVectors(Ie, De),
        ze.subVectors(Ne, Ie),
        Ue.subVectors(De, Ne);
      let t = [
        0,
        -Oe.z,
        Oe.y,
        0,
        -ze.z,
        ze.y,
        0,
        -Ue.z,
        Ue.y,
        Oe.z,
        0,
        -Oe.x,
        ze.z,
        0,
        -ze.x,
        Ue.z,
        0,
        -Ue.x,
        -Oe.y,
        Oe.x,
        0,
        -ze.y,
        ze.x,
        0,
        -Ue.y,
        Ue.x,
        0,
      ];
      return (
        !!Ge(t, De, Ie, Ne, Fe) &&
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        !!Ge(t, De, Ie, Ne, Fe) &&
          (He.crossVectors(Oe, ze),
          (t = [He.x, He.y, He.z]),
          Ge(t, De, Ie, Ne, Fe)))
      );
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return Ce.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    getBoundingSphere(e) {
      return (
        this.getCenter(e.center),
        (e.radius = 0.5 * this.getSize(Ce).length()),
        e
      );
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return (
        this.isEmpty() ||
          (Le[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          Le[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          Le[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          Le[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          Le[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          Le[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          Le[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          Le[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(Le)),
        this
      );
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  Re.prototype.isBox3 = !0;
  const Le = [
      new Te(),
      new Te(),
      new Te(),
      new Te(),
      new Te(),
      new Te(),
      new Te(),
      new Te(),
    ],
    Ce = new Te(),
    Pe = new Re(),
    De = new Te(),
    Ie = new Te(),
    Ne = new Te(),
    Oe = new Te(),
    ze = new Te(),
    Ue = new Te(),
    Be = new Te(),
    Fe = new Te(),
    He = new Te(),
    ke = new Te();
  function Ge(e, t, n, i, r) {
    for (let s = 0, a = e.length - 3; s <= a; s += 3) {
      ke.fromArray(e, s);
      const a =
          r.x * Math.abs(ke.x) + r.y * Math.abs(ke.y) + r.z * Math.abs(ke.z),
        o = t.dot(ke),
        l = n.dot(ke),
        c = i.dot(ke);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
    }
    return !0;
  }
  const Ve = new Re(),
    We = new Te(),
    je = new Te(),
    qe = new Te();
  class Xe {
    constructor(e = new Te(), t = -1) {
      (this.center = e), (this.radius = t);
    }
    set(e, t) {
      return this.center.copy(e), (this.radius = t), this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      void 0 !== t ? n.copy(t) : Ve.setFromPoints(e).getCenter(n);
      let i = 0;
      for (let t = 0, r = e.length; t < r; t++)
        i = Math.max(i, n.distanceToSquared(e[t]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(e) {
      return this.center.copy(e.center), (this.radius = e.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return (
        t.copy(e),
        n > this.radius * this.radius &&
          (t.sub(this.center).normalize(),
          t.multiplyScalar(this.radius).add(this.center)),
        t
      );
    }
    getBoundingBox(e) {
      return this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius = this.radius * e.getMaxScaleOnAxis()),
        this
      );
    }
    translate(e) {
      return this.center.add(e), this;
    }
    expandByPoint(e) {
      qe.subVectors(e, this.center);
      const t = qe.lengthSq();
      if (t > this.radius * this.radius) {
        const e = Math.sqrt(t),
          n = 0.5 * (e - this.radius);
        this.center.add(qe.multiplyScalar(n / e)), (this.radius += n);
      }
      return this;
    }
    union(e) {
      return (
        !0 === this.center.equals(e.center)
          ? je.set(0, 0, 1).multiplyScalar(e.radius)
          : je
              .subVectors(e.center, this.center)
              .normalize()
              .multiplyScalar(e.radius),
        this.expandByPoint(We.copy(e.center).add(je)),
        this.expandByPoint(We.copy(e.center).sub(je)),
        this
      );
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Ye = new Te(),
    Je = new Te(),
    Ze = new Te(),
    Ke = new Te(),
    Qe = new Te(),
    $e = new Te(),
    et = new Te();
  class tt {
    constructor(e = new Te(), t = new Te(0, 0, -1)) {
      (this.origin = e), (this.direction = t);
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.direction).multiplyScalar(e).add(this.origin);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, Ye)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      const t = Ye.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (Ye.copy(this.direction).multiplyScalar(t).add(this.origin),
          Ye.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      Je.copy(e).add(t).multiplyScalar(0.5),
        Ze.copy(t).sub(e).normalize(),
        Ke.copy(this.origin).sub(Je);
      const r = 0.5 * e.distanceTo(t),
        s = -this.direction.dot(Ze),
        a = Ke.dot(this.direction),
        o = -Ke.dot(Ze),
        l = Ke.lengthSq(),
        c = Math.abs(1 - s * s);
      let h, u, d, p;
      if (c > 0)
        if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
          if (u >= -p)
            if (u <= p) {
              const e = 1 / c;
              (h *= e),
                (u *= e),
                (d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
            } else
              (u = r),
                (h = Math.max(0, -(s * u + a))),
                (d = -h * h + u * (u + 2 * o) + l);
          else
            (u = -r),
              (h = Math.max(0, -(s * u + a))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          u <= -p
            ? ((h = Math.max(0, -(-s * r + a))),
              (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : u <= p
            ? ((h = 0),
              (u = Math.min(Math.max(-r, -o), r)),
              (d = u * (u + 2 * o) + l))
            : ((h = Math.max(0, -(s * r + a))),
              (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l));
      else
        (u = s > 0 ? -r : r),
          (h = Math.max(0, -(s * u + a))),
          (d = -h * h + u * (u + 2 * o) + l);
      return (
        n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
        i && i.copy(Ze).multiplyScalar(u).add(Je),
        d
      );
    }
    intersectSphere(e, t) {
      Ye.subVectors(e.center, this.origin);
      const n = Ye.dot(this.direction),
        i = Ye.dot(Ye) - n * n,
        r = e.radius * e.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i),
        a = n - s,
        o = n + s;
      return a < 0 && o < 0 ? null : a < 0 ? this.at(o, t) : this.at(a, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return null === n ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      return 0 === t || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n, i, r, s, a, o;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (e.min.x - u.x) * l), (i = (e.max.x - u.x) * l))
          : ((n = (e.max.x - u.x) * l), (i = (e.min.x - u.x) * l)),
        c >= 0
          ? ((r = (e.min.y - u.y) * c), (s = (e.max.y - u.y) * c))
          : ((r = (e.max.y - u.y) * c), (s = (e.min.y - u.y) * c)),
        n > s || r > i
          ? null
          : ((r > n || n != n) && (n = r),
            (s < i || i != i) && (i = s),
            h >= 0
              ? ((a = (e.min.z - u.z) * h), (o = (e.max.z - u.z) * h))
              : ((a = (e.max.z - u.z) * h), (o = (e.min.z - u.z) * h)),
            n > o || a > i
              ? null
              : ((a > n || n != n) && (n = a),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, t)))
      );
    }
    intersectsBox(e) {
      return null !== this.intersectBox(e, Ye);
    }
    intersectTriangle(e, t, n, i, r) {
      Qe.subVectors(t, e), $e.subVectors(n, e), et.crossVectors(Qe, $e);
      let s,
        a = this.direction.dot(et);
      if (a > 0) {
        if (i) return null;
        s = 1;
      } else {
        if (!(a < 0)) return null;
        (s = -1), (a = -a);
      }
      Ke.subVectors(this.origin, e);
      const o = s * this.direction.dot($e.crossVectors(Ke, $e));
      if (o < 0) return null;
      const l = s * this.direction.dot(Qe.cross(Ke));
      if (l < 0) return null;
      if (o + l > a) return null;
      const c = -s * Ke.dot(et);
      return c < 0 ? null : this.at(c / a, r);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class nt {
    constructor() {
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
          );
    }
    set(e, t, n, i, r, s, a, o, l, c, h, u, d, p, f, m) {
      const g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = n),
        (g[12] = i),
        (g[1] = r),
        (g[5] = s),
        (g[9] = a),
        (g[13] = o),
        (g[2] = l),
        (g[6] = c),
        (g[10] = h),
        (g[14] = u),
        (g[3] = d),
        (g[7] = p),
        (g[11] = f),
        (g[15] = m),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new nt().fromArray(this.elements);
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      const t = this.elements,
        n = e.elements;
      return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return (
        this.set(
          t[0],
          t[3],
          t[6],
          0,
          t[1],
          t[4],
          t[7],
          0,
          t[2],
          t[5],
          t[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(e, t, n) {
      return (
        this.set(
          e.x,
          t.x,
          n.x,
          0,
          e.y,
          t.y,
          n.y,
          0,
          e.z,
          t.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(e) {
      const t = this.elements,
        n = e.elements,
        i = 1 / it.setFromMatrixColumn(e, 0).length(),
        r = 1 / it.setFromMatrixColumn(e, 1).length(),
        s = 1 / it.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * i),
        (t[1] = n[1] * i),
        (t[2] = n[2] * i),
        (t[3] = 0),
        (t[4] = n[4] * r),
        (t[5] = n[5] * r),
        (t[6] = n[6] * r),
        (t[7] = 0),
        (t[8] = n[8] * s),
        (t[9] = n[9] * s),
        (t[10] = n[10] * s),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      (e && e.isEuler) ||
        console.error(
          "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
        );
      const t = this.elements,
        n = e.x,
        i = e.y,
        r = e.z,
        s = Math.cos(n),
        a = Math.sin(n),
        o = Math.cos(i),
        l = Math.sin(i),
        c = Math.cos(r),
        h = Math.sin(r);
      if ("XYZ" === e.order) {
        const e = s * c,
          n = s * h,
          i = a * c,
          r = a * h;
        (t[0] = o * c),
          (t[4] = -o * h),
          (t[8] = l),
          (t[1] = n + i * l),
          (t[5] = e - r * l),
          (t[9] = -a * o),
          (t[2] = r - e * l),
          (t[6] = i + n * l),
          (t[10] = s * o);
      } else if ("YXZ" === e.order) {
        const e = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (t[0] = e + r * a),
          (t[4] = i * a - n),
          (t[8] = s * l),
          (t[1] = s * h),
          (t[5] = s * c),
          (t[9] = -a),
          (t[2] = n * a - i),
          (t[6] = r + e * a),
          (t[10] = s * o);
      } else if ("ZXY" === e.order) {
        const e = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (t[0] = e - r * a),
          (t[4] = -s * h),
          (t[8] = i + n * a),
          (t[1] = n + i * a),
          (t[5] = s * c),
          (t[9] = r - e * a),
          (t[2] = -s * l),
          (t[6] = a),
          (t[10] = s * o);
      } else if ("ZYX" === e.order) {
        const e = s * c,
          n = s * h,
          i = a * c,
          r = a * h;
        (t[0] = o * c),
          (t[4] = i * l - n),
          (t[8] = e * l + r),
          (t[1] = o * h),
          (t[5] = r * l + e),
          (t[9] = n * l - i),
          (t[2] = -l),
          (t[6] = a * o),
          (t[10] = s * o);
      } else if ("YZX" === e.order) {
        const e = s * o,
          n = s * l,
          i = a * o,
          r = a * l;
        (t[0] = o * c),
          (t[4] = r - e * h),
          (t[8] = i * h + n),
          (t[1] = h),
          (t[5] = s * c),
          (t[9] = -a * c),
          (t[2] = -l * c),
          (t[6] = n * h + i),
          (t[10] = e - r * h);
      } else if ("XZY" === e.order) {
        const e = s * o,
          n = s * l,
          i = a * o,
          r = a * l;
        (t[0] = o * c),
          (t[4] = -h),
          (t[8] = l * c),
          (t[1] = e * h + r),
          (t[5] = s * c),
          (t[9] = n * h - i),
          (t[2] = i * h - n),
          (t[6] = a * c),
          (t[10] = r * h + e);
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(st, e, at);
    }
    lookAt(e, t, n) {
      const i = this.elements;
      return (
        ct.subVectors(e, t),
        0 === ct.lengthSq() && (ct.z = 1),
        ct.normalize(),
        ot.crossVectors(n, ct),
        0 === ot.lengthSq() &&
          (1 === Math.abs(n.z) ? (ct.x += 1e-4) : (ct.z += 1e-4),
          ct.normalize(),
          ot.crossVectors(n, ct)),
        ot.normalize(),
        lt.crossVectors(ct, ot),
        (i[0] = ot.x),
        (i[4] = lt.x),
        (i[8] = ct.x),
        (i[1] = ot.y),
        (i[5] = lt.y),
        (i[9] = ct.y),
        (i[2] = ot.z),
        (i[6] = lt.z),
        (i[10] = ct.z),
        this
      );
    }
    multiply(e, t) {
      return void 0 !== t
        ? (console.warn(
            "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
          ),
          this.multiplyMatrices(e, t))
        : this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        i = t.elements,
        r = this.elements,
        s = n[0],
        a = n[4],
        o = n[8],
        l = n[12],
        c = n[1],
        h = n[5],
        u = n[9],
        d = n[13],
        p = n[2],
        f = n[6],
        m = n[10],
        g = n[14],
        v = n[3],
        x = n[7],
        y = n[11],
        _ = n[15],
        b = i[0],
        w = i[4],
        M = i[8],
        S = i[12],
        T = i[1],
        E = i[5],
        A = i[9],
        R = i[13],
        L = i[2],
        C = i[6],
        P = i[10],
        D = i[14],
        I = i[3],
        N = i[7],
        O = i[11],
        z = i[15];
      return (
        (r[0] = s * b + a * T + o * L + l * I),
        (r[4] = s * w + a * E + o * C + l * N),
        (r[8] = s * M + a * A + o * P + l * O),
        (r[12] = s * S + a * R + o * D + l * z),
        (r[1] = c * b + h * T + u * L + d * I),
        (r[5] = c * w + h * E + u * C + d * N),
        (r[9] = c * M + h * A + u * P + d * O),
        (r[13] = c * S + h * R + u * D + d * z),
        (r[2] = p * b + f * T + m * L + g * I),
        (r[6] = p * w + f * E + m * C + g * N),
        (r[10] = p * M + f * A + m * P + g * O),
        (r[14] = p * S + f * R + m * D + g * z),
        (r[3] = v * b + x * T + y * L + _ * I),
        (r[7] = v * w + x * E + y * C + _ * N),
        (r[11] = v * M + x * A + y * P + _ * O),
        (r[15] = v * S + x * R + y * D + _ * z),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[4],
        i = e[8],
        r = e[12],
        s = e[1],
        a = e[5],
        o = e[9],
        l = e[13],
        c = e[2],
        h = e[6],
        u = e[10],
        d = e[14];
      return (
        e[3] *
          (+r * o * h -
            i * l * h -
            r * a * u +
            n * l * u +
            i * a * d -
            n * o * d) +
        e[7] *
          (+t * o * d -
            t * l * u +
            r * s * u -
            i * s * d +
            i * l * c -
            r * o * c) +
        e[11] *
          (+t * l * h -
            t * a * d -
            r * s * h +
            n * s * d +
            r * a * c -
            n * l * c) +
        e[15] *
          (-i * a * c -
            t * o * h +
            t * a * u +
            i * s * h -
            n * s * u +
            n * o * c)
      );
    }
    transpose() {
      const e = this.elements;
      let t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      const i = this.elements;
      return (
        e.isVector3
          ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
          : ((i[12] = e), (i[13] = t), (i[14] = n)),
        this
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        c = e[8],
        h = e[9],
        u = e[10],
        d = e[11],
        p = e[12],
        f = e[13],
        m = e[14],
        g = e[15],
        v =
          h * m * l - f * u * l + f * o * d - a * m * d - h * o * g + a * u * g,
        x =
          p * u * l - c * m * l - p * o * d + s * m * d + c * o * g - s * u * g,
        y =
          c * f * l - p * h * l + p * a * d - s * f * d - c * a * g + s * h * g,
        _ =
          p * h * o - c * f * o - p * a * u + s * f * u + c * a * m - s * h * m,
        b = t * v + n * x + i * y + r * _;
      if (0 === b)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const w = 1 / b;
      return (
        (e[0] = v * w),
        (e[1] =
          (f * u * r -
            h * m * r -
            f * i * d +
            n * m * d +
            h * i * g -
            n * u * g) *
          w),
        (e[2] =
          (a * m * r -
            f * o * r +
            f * i * l -
            n * m * l -
            a * i * g +
            n * o * g) *
          w),
        (e[3] =
          (h * o * r -
            a * u * r -
            h * i * l +
            n * u * l +
            a * i * d -
            n * o * d) *
          w),
        (e[4] = x * w),
        (e[5] =
          (c * m * r -
            p * u * r +
            p * i * d -
            t * m * d -
            c * i * g +
            t * u * g) *
          w),
        (e[6] =
          (p * o * r -
            s * m * r -
            p * i * l +
            t * m * l +
            s * i * g -
            t * o * g) *
          w),
        (e[7] =
          (s * u * r -
            c * o * r +
            c * i * l -
            t * u * l -
            s * i * d +
            t * o * d) *
          w),
        (e[8] = y * w),
        (e[9] =
          (p * h * r -
            c * f * r -
            p * n * d +
            t * f * d +
            c * n * g -
            t * h * g) *
          w),
        (e[10] =
          (s * f * r -
            p * a * r +
            p * n * l -
            t * f * l -
            s * n * g +
            t * a * g) *
          w),
        (e[11] =
          (c * a * r -
            s * h * r -
            c * n * l +
            t * h * l +
            s * n * d -
            t * a * d) *
          w),
        (e[12] = _ * w),
        (e[13] =
          (c * f * i -
            p * h * i +
            p * n * u -
            t * f * u -
            c * n * m +
            t * h * m) *
          w),
        (e[14] =
          (p * a * i -
            s * f * i -
            p * n * o +
            t * f * o +
            s * n * m -
            t * a * m) *
          w),
        (e[15] =
          (s * h * i -
            c * a * i +
            c * n * o -
            t * h * o -
            s * n * u +
            t * a * u) *
          w),
        this
      );
    }
    scale(e) {
      const t = this.elements,
        n = e.x,
        i = e.y,
        r = e.z;
      return (
        (t[0] *= n),
        (t[4] *= i),
        (t[8] *= r),
        (t[1] *= n),
        (t[5] *= i),
        (t[9] *= r),
        (t[2] *= n),
        (t[6] *= i),
        (t[10] *= r),
        (t[3] *= n),
        (t[7] *= i),
        (t[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      const e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t),
        i = Math.sin(t),
        r = 1 - n,
        s = e.x,
        a = e.y,
        o = e.z,
        l = r * s,
        c = r * a;
      return (
        this.set(
          l * s + n,
          l * a - i * o,
          l * o + i * a,
          0,
          l * a + i * o,
          c * a + n,
          c * o - i * s,
          0,
          l * o - i * a,
          c * o + i * s,
          r * o * o + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, r, s) {
      return this.set(1, n, r, 0, e, 1, s, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
      const i = this.elements,
        r = t._x,
        s = t._y,
        a = t._z,
        o = t._w,
        l = r + r,
        c = s + s,
        h = a + a,
        u = r * l,
        d = r * c,
        p = r * h,
        f = s * c,
        m = s * h,
        g = a * h,
        v = o * l,
        x = o * c,
        y = o * h,
        _ = n.x,
        b = n.y,
        w = n.z;
      return (
        (i[0] = (1 - (f + g)) * _),
        (i[1] = (d + y) * _),
        (i[2] = (p - x) * _),
        (i[3] = 0),
        (i[4] = (d - y) * b),
        (i[5] = (1 - (u + g)) * b),
        (i[6] = (m + v) * b),
        (i[7] = 0),
        (i[8] = (p + x) * w),
        (i[9] = (m - v) * w),
        (i[10] = (1 - (u + f)) * w),
        (i[11] = 0),
        (i[12] = e.x),
        (i[13] = e.y),
        (i[14] = e.z),
        (i[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      const i = this.elements;
      let r = it.set(i[0], i[1], i[2]).length();
      const s = it.set(i[4], i[5], i[6]).length(),
        a = it.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r),
        (e.x = i[12]),
        (e.y = i[13]),
        (e.z = i[14]),
        rt.copy(this);
      const o = 1 / r,
        l = 1 / s,
        c = 1 / a;
      return (
        (rt.elements[0] *= o),
        (rt.elements[1] *= o),
        (rt.elements[2] *= o),
        (rt.elements[4] *= l),
        (rt.elements[5] *= l),
        (rt.elements[6] *= l),
        (rt.elements[8] *= c),
        (rt.elements[9] *= c),
        (rt.elements[10] *= c),
        t.setFromRotationMatrix(rt),
        (n.x = r),
        (n.y = s),
        (n.z = a),
        this
      );
    }
    makePerspective(e, t, n, i, r, s) {
      void 0 === s &&
        console.warn(
          "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
        );
      const a = this.elements,
        o = (2 * r) / (t - e),
        l = (2 * r) / (n - i),
        c = (t + e) / (t - e),
        h = (n + i) / (n - i),
        u = -(s + r) / (s - r),
        d = (-2 * s * r) / (s - r);
      return (
        (a[0] = o),
        (a[4] = 0),
        (a[8] = c),
        (a[12] = 0),
        (a[1] = 0),
        (a[5] = l),
        (a[9] = h),
        (a[13] = 0),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = u),
        (a[14] = d),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = -1),
        (a[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, i, r, s) {
      const a = this.elements,
        o = 1 / (t - e),
        l = 1 / (n - i),
        c = 1 / (s - r),
        h = (t + e) * o,
        u = (n + i) * l,
        d = (s + r) * c;
      return (
        (a[0] = 2 * o),
        (a[4] = 0),
        (a[8] = 0),
        (a[12] = -h),
        (a[1] = 0),
        (a[5] = 2 * l),
        (a[9] = 0),
        (a[13] = -u),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = -2 * c),
        (a[14] = -d),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = 0),
        (a[15] = 1),
        this
      );
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  }
  nt.prototype.isMatrix4 = !0;
  const it = new Te(),
    rt = new nt(),
    st = new Te(0, 0, 0),
    at = new Te(1, 1, 1),
    ot = new Te(),
    lt = new Te(),
    ct = new Te(),
    ht = new nt(),
    ut = new Se();
  class dt {
    constructor(e = 0, t = 0, n = 0, i = dt.DefaultOrder) {
      (this._x = e), (this._y = t), (this._z = n), (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(e) {
      (this._x = e), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      (this._y = e), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      (this._z = e), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e) {
      (this._order = e), this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return (
        (this._x = e._x),
        (this._y = e._y),
        (this._z = e._z),
        (this._order = e._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      const i = e.elements,
        r = i[0],
        s = i[4],
        a = i[8],
        o = i[1],
        l = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        d = i[10];
      switch (t) {
        case "XYZ":
          (this._y = Math.asin(q(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0));
          break;
        case "YXZ":
          (this._x = Math.asin(-q(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l)))
              : ((this._y = Math.atan2(-h, r)), (this._z = 0));
          break;
        case "ZXY":
          (this._x = Math.asin(q(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l)))
              : ((this._y = 0), (this._z = Math.atan2(o, r)));
          break;
        case "ZYX":
          (this._y = Math.asin(-q(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
              : ((this._x = 0), (this._z = Math.atan2(-s, l)));
          break;
        case "YZX":
          (this._z = Math.asin(q(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
              : ((this._x = 0), (this._y = Math.atan2(a, d)));
          break;
        case "XZY":
          (this._z = Math.asin(-q(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r)))
              : ((this._x = Math.atan2(-c, d)), (this._y = 0));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              t
          );
      }
      return (this._order = t), !0 === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return (
        ht.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ht, t, n)
      );
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return ut.setFromEuler(this), this.setFromQuaternion(ut, e);
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._order === this._order
      );
    }
    fromArray(e) {
      return (
        (this._x = e[0]),
        (this._y = e[1]),
        (this._z = e[2]),
        void 0 !== e[3] && (this._order = e[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._order),
        e
      );
    }
    _onChange(e) {
      return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  (dt.prototype.isEuler = !0),
    (dt.DefaultOrder = "XYZ"),
    (dt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
  class pt {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = ((1 << e) | 0) >>> 0;
    }
    enable(e) {
      this.mask |= (1 << e) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= (1 << e) | 0;
    }
    disable(e) {
      this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return 0 != (this.mask & e.mask);
    }
    isEnabled(e) {
      return 0 != (this.mask & ((1 << e) | 0));
    }
  }
  let ft = 0;
  const mt = new Te(),
    gt = new Se(),
    vt = new nt(),
    xt = new Te(),
    yt = new Te(),
    _t = new Te(),
    bt = new Se(),
    wt = new Te(1, 0, 0),
    Mt = new Te(0, 1, 0),
    St = new Te(0, 0, 1),
    Tt = { type: "added" },
    Et = { type: "removed" };
  class At extends H {
    constructor() {
      super(),
        Object.defineProperty(this, "id", { value: ft++ }),
        (this.uuid = j()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = At.DefaultUp.clone());
      const e = new Te(),
        t = new dt(),
        n = new Se(),
        i = new Te(1, 1, 1);
      t._onChange(function () {
        n.setFromEuler(t, !1);
      }),
        n._onChange(function () {
          t.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: e },
          rotation: { configurable: !0, enumerable: !0, value: t },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new nt() },
          normalMatrix: { value: new ee() },
        }),
        (this.matrix = new nt()),
        (this.matrixWorld = new nt()),
        (this.matrixAutoUpdate = At.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new pt()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return gt.setFromAxisAngle(e, t), this.quaternion.multiply(gt), this;
    }
    rotateOnWorldAxis(e, t) {
      return gt.setFromAxisAngle(e, t), this.quaternion.premultiply(gt), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(wt, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Mt, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(St, e);
    }
    translateOnAxis(e, t) {
      return (
        mt.copy(e).applyQuaternion(this.quaternion),
        this.position.add(mt.multiplyScalar(t)),
        this
      );
    }
    translateX(e) {
      return this.translateOnAxis(wt, e);
    }
    translateY(e) {
      return this.translateOnAxis(Mt, e);
    }
    translateZ(e) {
      return this.translateOnAxis(St, e);
    }
    localToWorld(e) {
      return e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return e.applyMatrix4(vt.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
      e.isVector3 ? xt.copy(e) : xt.set(e, t, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        yt.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? vt.lookAt(yt, xt, this.up)
          : vt.lookAt(xt, yt, this.up),
        this.quaternion.setFromRotationMatrix(vt),
        i &&
          (vt.extractRotation(i.matrixWorld),
          gt.setFromRotationMatrix(vt),
          this.quaternion.premultiply(gt.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return e === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            e
          ),
          this)
        : (e && e.isObject3D
            ? (null !== e.parent && e.parent.remove(e),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent(Tt))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                e
              ),
          this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this;
      }
      const t = this.children.indexOf(e);
      return (
        -1 !== t &&
          ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Et)),
        this
      );
    }
    removeFromParent() {
      const e = this.parent;
      return null !== e && e.remove(this), this;
    }
    clear() {
      for (let e = 0; e < this.children.length; e++) {
        const t = this.children[e];
        (t.parent = null), t.dispatchEvent(Et);
      }
      return (this.children.length = 0), this;
    }
    attach(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        vt.copy(this.matrixWorld).invert(),
        null !== e.parent &&
          (e.parent.updateWorldMatrix(!0, !1),
          vt.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(vt),
        this.add(e),
        e.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(e, t);
        if (void 0 !== i) return i;
      }
    }
    getWorldPosition(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(e) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(yt, e, _t), e
      );
    }
    getWorldScale(e) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(yt, bt, e), e
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (!1 === this.visible) return;
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      const t = this.parent;
      null !== t && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (e = !0));
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (
        (!0 === e && null !== n && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        !0 === t)
      ) {
        const e = this.children;
        for (let t = 0, n = e.length; t < n; t++)
          e[t].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e,
        n = {};
      t &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      const i = {};
      function r(t, n) {
        return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid;
      }
      if (
        ((i.uuid = this.uuid),
        (i.type = this.type),
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          null !== this.instanceColor &&
            (i.instanceColor = this.instanceColor.toJSON())),
        this.isScene)
      )
        this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(e).uuid)),
          this.environment &&
            this.environment.isTexture &&
            (i.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(e.geometries, this.geometry);
        const t = this.geometry.parameters;
        if (void 0 !== t && void 0 !== t.shapes) {
          const n = t.shapes;
          if (Array.isArray(n))
            for (let t = 0, i = n.length; t < i; t++) {
              const i = n[t];
              r(e.shapes, i);
            }
          else r(e.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          void 0 !== this.skeleton &&
            (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        void 0 !== this.material)
      )
        if (Array.isArray(this.material)) {
          const t = [];
          for (let n = 0, i = this.material.length; n < i; n++)
            t.push(r(e.materials, this.material[n]));
          i.material = t;
        } else i.material = r(e.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let t = 0; t < this.children.length; t++)
          i.children.push(this.children[t].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let t = 0; t < this.animations.length; t++) {
          const n = this.animations[t];
          i.animations.push(r(e.animations, n));
        }
      }
      if (t) {
        const t = s(e.geometries),
          i = s(e.materials),
          r = s(e.textures),
          a = s(e.images),
          o = s(e.shapes),
          l = s(e.skeletons),
          c = s(e.animations),
          h = s(e.nodes);
        t.length > 0 && (n.geometries = t),
          i.length > 0 && (n.materials = i),
          r.length > 0 && (n.textures = r),
          a.length > 0 && (n.images = a),
          o.length > 0 && (n.shapes = o),
          l.length > 0 && (n.skeletons = l),
          c.length > 0 && (n.animations = c),
          h.length > 0 && (n.nodes = h);
      }
      return (n.object = i), n;
      function s(e) {
        const t = [];
        for (const n in e) {
          const i = e[n];
          delete i.metadata, t.push(i);
        }
        return t;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        !0 === t)
      )
        for (let t = 0; t < e.children.length; t++) {
          const n = e.children[t];
          this.add(n.clone());
        }
      return this;
    }
  }
  (At.DefaultUp = new Te(0, 1, 0)),
    (At.DefaultMatrixAutoUpdate = !0),
    (At.prototype.isObject3D = !0);
  const Rt = new Te(),
    Lt = new Te(),
    Ct = new Te(),
    Pt = new Te(),
    Dt = new Te(),
    It = new Te(),
    Nt = new Te(),
    Ot = new Te(),
    zt = new Te(),
    Ut = new Te();
  class Bt {
    constructor(e = new Te(), t = new Te(), n = new Te()) {
      (this.a = e), (this.b = t), (this.c = n);
    }
    static getNormal(e, t, n, i) {
      i.subVectors(n, t), Rt.subVectors(e, t), i.cross(Rt);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, r) {
      Rt.subVectors(i, t), Lt.subVectors(n, t), Ct.subVectors(e, t);
      const s = Rt.dot(Rt),
        a = Rt.dot(Lt),
        o = Rt.dot(Ct),
        l = Lt.dot(Lt),
        c = Lt.dot(Ct),
        h = s * l - a * a;
      if (0 === h) return r.set(-2, -1, -1);
      const u = 1 / h,
        d = (l * o - a * c) * u,
        p = (s * c - a * o) * u;
      return r.set(1 - d - p, p, d);
    }
    static containsPoint(e, t, n, i) {
      return (
        this.getBarycoord(e, t, n, i, Pt),
        Pt.x >= 0 && Pt.y >= 0 && Pt.x + Pt.y <= 1
      );
    }
    static getUV(e, t, n, i, r, s, a, o) {
      return (
        this.getBarycoord(e, t, n, i, Pt),
        o.set(0, 0),
        o.addScaledVector(r, Pt.x),
        o.addScaledVector(s, Pt.y),
        o.addScaledVector(a, Pt.z),
        o
      );
    }
    static isFrontFacing(e, t, n, i) {
      return Rt.subVectors(n, t), Lt.subVectors(e, t), Rt.cross(Lt).dot(i) < 0;
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
      return (
        this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
      return (
        Rt.subVectors(this.c, this.b),
        Lt.subVectors(this.a, this.b),
        0.5 * Rt.cross(Lt).length()
      );
    }
    getMidpoint(e) {
      return e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return Bt.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return Bt.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getUV(e, t, n, i, r) {
      return Bt.getUV(e, this.a, this.b, this.c, t, n, i, r);
    }
    containsPoint(e) {
      return Bt.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return Bt.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a,
        i = this.b,
        r = this.c;
      let s, a;
      Dt.subVectors(i, n), It.subVectors(r, n), Ot.subVectors(e, n);
      const o = Dt.dot(Ot),
        l = It.dot(Ot);
      if (o <= 0 && l <= 0) return t.copy(n);
      zt.subVectors(e, i);
      const c = Dt.dot(zt),
        h = It.dot(zt);
      if (c >= 0 && h <= c) return t.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0)
        return (s = o / (o - c)), t.copy(n).addScaledVector(Dt, s);
      Ut.subVectors(e, r);
      const d = Dt.dot(Ut),
        p = It.dot(Ut);
      if (p >= 0 && d <= p) return t.copy(r);
      const f = d * l - o * p;
      if (f <= 0 && l >= 0 && p <= 0)
        return (a = l / (l - p)), t.copy(n).addScaledVector(It, a);
      const m = c * p - d * h;
      if (m <= 0 && h - c >= 0 && d - p >= 0)
        return (
          Nt.subVectors(r, i),
          (a = (h - c) / (h - c + (d - p))),
          t.copy(i).addScaledVector(Nt, a)
        );
      const g = 1 / (m + f + u);
      return (
        (s = f * g),
        (a = u * g),
        t.copy(n).addScaledVector(Dt, s).addScaledVector(It, a)
      );
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  let Ft = 0;
  class Ht extends H {
    constructor() {
      super(),
        Object.defineProperty(this, "id", { value: Ft++ }),
        (this.uuid = j()),
        (this.name = ""),
        (this.type = "Material"),
        (this.blending = 1),
        (this.side = 0),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = e),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = O),
        (this.stencilZFail = O),
        (this.stencilZPass = O),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0);
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (void 0 !== e)
        for (const t in e) {
          const n = e[t];
          if (void 0 === n) {
            console.warn("THREE.Material: '" + t + "' parameter is undefined.");
            continue;
          }
          if ("shading" === t) {
            console.warn(
              "THREE." +
                this.type +
                ": .shading has been removed. Use the boolean .flatShading instead."
            ),
              (this.flatShading = 1 === n);
            continue;
          }
          const i = this[t];
          void 0 !== i
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
              ? i.copy(n)
              : (this[t] = n)
            : console.warn(
                "THREE." +
                  this.type +
                  ": '" +
                  t +
                  "' is not a property of this material."
              );
        }
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      t && (e = { textures: {}, images: {} });
      const n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      function i(e) {
        const t = [];
        for (const n in e) {
          const i = e[n];
          delete i.metadata, t.push(i);
        }
        return t;
      }
      if (
        ((n.uuid = this.uuid),
        (n.type = this.type),
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        void 0 !== this.sheen && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        void 0 !== this.sheenRoughness &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.specularIntensity &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(e).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(e).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(e).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(e).uuid),
          void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity &&
          (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        void 0 !== this.transmission && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        void 0 !== this.thickness && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        void 0 !== this.attenuationDistance &&
          (n.attenuationDistance = this.attenuationDistance),
        void 0 !== this.attenuationColor &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        0 !== this.side && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        void 0 !== this.rotation &&
          0 !== this.rotation &&
          (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        void 0 !== this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage &&
          (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        !1 === this.fog && (n.fog = !1),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        t)
      ) {
        const t = i(e.textures),
          r = i(e.images);
        t.length > 0 && (n.textures = t), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.name = e.name),
        (this.blending = e.blending),
        (this.side = e.side),
        (this.vertexColors = e.vertexColors),
        (this.opacity = e.opacity),
        (this.transparent = e.transparent),
        (this.blendSrc = e.blendSrc),
        (this.blendDst = e.blendDst),
        (this.blendEquation = e.blendEquation),
        (this.blendSrcAlpha = e.blendSrcAlpha),
        (this.blendDstAlpha = e.blendDstAlpha),
        (this.blendEquationAlpha = e.blendEquationAlpha),
        (this.depthFunc = e.depthFunc),
        (this.depthTest = e.depthTest),
        (this.depthWrite = e.depthWrite),
        (this.stencilWriteMask = e.stencilWriteMask),
        (this.stencilFunc = e.stencilFunc),
        (this.stencilRef = e.stencilRef),
        (this.stencilFuncMask = e.stencilFuncMask),
        (this.stencilFail = e.stencilFail),
        (this.stencilZFail = e.stencilZFail),
        (this.stencilZPass = e.stencilZPass),
        (this.stencilWrite = e.stencilWrite);
      const t = e.clippingPlanes;
      let n = null;
      if (null !== t) {
        const e = t.length;
        n = new Array(e);
        for (let i = 0; i !== e; ++i) n[i] = t[i].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = e.clipIntersection),
        (this.clipShadows = e.clipShadows),
        (this.shadowSide = e.shadowSide),
        (this.colorWrite = e.colorWrite),
        (this.precision = e.precision),
        (this.polygonOffset = e.polygonOffset),
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
        (this.dithering = e.dithering),
        (this.alphaTest = e.alphaTest),
        (this.alphaToCoverage = e.alphaToCoverage),
        (this.premultipliedAlpha = e.premultipliedAlpha),
        (this.visible = e.visible),
        (this.toneMapped = e.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
  }
  (Ht.prototype.isMaterial = !0),
    (Ht.fromType = function () {
      return null;
    });
  class kt extends Ht {
    constructor(e) {
      super(),
        (this.type = "MeshBasicMaterial"),
        (this.color = new pe(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  kt.prototype.isMeshBasicMaterial = !0;
  const Gt = new Te(),
    Vt = new $();
  class Wt {
    constructor(e, t, n) {
      if (Array.isArray(e))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.name = ""),
        (this.array = e),
        (this.itemSize = t),
        (this.count = void 0 !== e ? e.length / t : 0),
        (this.normalized = !0 === n),
        (this.usage = z),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
    setUsage(e) {
      return (this.usage = e), this;
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.array = new e.array.constructor(e.array)),
        (this.itemSize = e.itemSize),
        (this.count = e.count),
        (this.normalized = e.normalized),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      (e *= this.itemSize), (n *= t.itemSize);
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[e + i] = t.array[n + i];
      return this;
    }
    copyArray(e) {
      return this.array.set(e), this;
    }
    copyColorsArray(e) {
      const t = this.array;
      let n = 0;
      for (let i = 0, r = e.length; i < r; i++) {
        let r = e[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyColorsArray(): color is undefined",
            i
          ),
          (r = new pe())),
          (t[n++] = r.r),
          (t[n++] = r.g),
          (t[n++] = r.b);
      }
      return this;
    }
    copyVector2sArray(e) {
      const t = this.array;
      let n = 0;
      for (let i = 0, r = e.length; i < r; i++) {
        let r = e[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
            i
          ),
          (r = new $())),
          (t[n++] = r.x),
          (t[n++] = r.y);
      }
      return this;
    }
    copyVector3sArray(e) {
      const t = this.array;
      let n = 0;
      for (let i = 0, r = e.length; i < r; i++) {
        let r = e[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
            i
          ),
          (r = new Te())),
          (t[n++] = r.x),
          (t[n++] = r.y),
          (t[n++] = r.z);
      }
      return this;
    }
    copyVector4sArray(e) {
      const t = this.array;
      let n = 0;
      for (let i = 0, r = e.length; i < r; i++) {
        let r = e[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
            i
          ),
          (r = new _e())),
          (t[n++] = r.x),
          (t[n++] = r.y),
          (t[n++] = r.z),
          (t[n++] = r.w);
      }
      return this;
    }
    applyMatrix3(e) {
      if (2 === this.itemSize)
        for (let t = 0, n = this.count; t < n; t++)
          Vt.fromBufferAttribute(this, t),
            Vt.applyMatrix3(e),
            this.setXY(t, Vt.x, Vt.y);
      else if (3 === this.itemSize)
        for (let t = 0, n = this.count; t < n; t++)
          Gt.fromBufferAttribute(this, t),
            Gt.applyMatrix3(e),
            this.setXYZ(t, Gt.x, Gt.y, Gt.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Gt.fromBufferAttribute(this, t),
          Gt.applyMatrix4(e),
          this.setXYZ(t, Gt.x, Gt.y, Gt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Gt.fromBufferAttribute(this, t),
          Gt.applyNormalMatrix(e),
          this.setXYZ(t, Gt.x, Gt.y, Gt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Gt.fromBufferAttribute(this, t),
          Gt.transformDirection(e),
          this.setXYZ(t, Gt.x, Gt.y, Gt.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getX(e) {
      return this.array[e * this.itemSize];
    }
    setX(e, t) {
      return (this.array[e * this.itemSize] = t), this;
    }
    getY(e) {
      return this.array[e * this.itemSize + 1];
    }
    setY(e, t) {
      return (this.array[e * this.itemSize + 1] = t), this;
    }
    getZ(e) {
      return this.array[e * this.itemSize + 2];
    }
    setZ(e, t) {
      return (this.array[e * this.itemSize + 2] = t), this;
    }
    getW(e) {
      return this.array[e * this.itemSize + 3];
    }
    setW(e, t) {
      return (this.array[e * this.itemSize + 3] = t), this;
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, i) {
      return (
        (e *= this.itemSize),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = i),
        this
      );
    }
    setXYZW(e, t, n, i, r) {
      return (
        (e *= this.itemSize),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = i),
        (this.array[e + 3] = r),
        this
      );
    }
    onUpload(e) {
      return (this.onUploadCallback = e), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized,
      };
      return (
        "" !== this.name && (e.name = this.name),
        this.usage !== z && (e.usage = this.usage),
        (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
          (e.updateRange = this.updateRange),
        e
      );
    }
  }
  Wt.prototype.isBufferAttribute = !0;
  class jt extends Wt {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class qt extends Wt {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  (class extends Wt {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }).prototype.isFloat16BufferAttribute = !0;
  class Xt extends Wt {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let Yt = 0;
  const Jt = new nt(),
    Zt = new At(),
    Kt = new Te(),
    Qt = new Re(),
    $t = new Re(),
    en = new Te();
  class tn extends H {
    constructor() {
      super(),
        Object.defineProperty(this, "id", { value: Yt++ }),
        (this.uuid = j()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return (
        Array.isArray(e)
          ? (this.index = new (te(e) ? qt : jt)(e, 1))
          : (this.index = e),
        this
      );
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return (this.attributes[e] = t), this;
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this;
    }
    hasAttribute(e) {
      return void 0 !== this.attributes[e];
    }
    addGroup(e, t, n = 0) {
      this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      (this.drawRange.start = e), (this.drawRange.count = t);
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const t = new ee().getNormalMatrix(e);
        n.applyNormalMatrix(t), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        void 0 !== i && (i.transformDirection(e), (i.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(e) {
      return Jt.makeRotationFromQuaternion(e), this.applyMatrix4(Jt), this;
    }
    rotateX(e) {
      return Jt.makeRotationX(e), this.applyMatrix4(Jt), this;
    }
    rotateY(e) {
      return Jt.makeRotationY(e), this.applyMatrix4(Jt), this;
    }
    rotateZ(e) {
      return Jt.makeRotationZ(e), this.applyMatrix4(Jt), this;
    }
    translate(e, t, n) {
      return Jt.makeTranslation(e, t, n), this.applyMatrix4(Jt), this;
    }
    scale(e, t, n) {
      return Jt.makeScale(e, t, n), this.applyMatrix4(Jt), this;
    }
    lookAt(e) {
      return (
        Zt.lookAt(e), Zt.updateMatrix(), this.applyMatrix4(Zt.matrix), this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(Kt).negate(),
        this.translate(Kt.x, Kt.y, Kt.z),
        this
      );
    }
    setFromPoints(e) {
      const t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        const i = e[n];
        t.push(i.x, i.y, i.z || 0);
      }
      return this.setAttribute("position", new Xt(t, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Re());
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingBox.set(
            new Te(-1 / 0, -1 / 0, -1 / 0),
            new Te(1 / 0, 1 / 0, 1 / 0)
          )
        );
      if (void 0 !== e) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e];
            Qt.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (en.addVectors(this.boundingBox.min, Qt.min),
                  this.boundingBox.expandByPoint(en),
                  en.addVectors(this.boundingBox.max, Qt.max),
                  this.boundingBox.expandByPoint(en))
                : (this.boundingBox.expandByPoint(Qt.min),
                  this.boundingBox.expandByPoint(Qt.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Xe());
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingSphere.set(new Te(), 1 / 0)
        );
      if (e) {
        const n = this.boundingSphere.center;
        if ((Qt.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e];
            $t.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (en.addVectors(Qt.min, $t.min),
                  Qt.expandByPoint(en),
                  en.addVectors(Qt.max, $t.max),
                  Qt.expandByPoint(en))
                : (Qt.expandByPoint($t.min), Qt.expandByPoint($t.max));
          }
        Qt.getCenter(n);
        let i = 0;
        for (let t = 0, r = e.count; t < r; t++)
          en.fromBufferAttribute(e, t),
            (i = Math.max(i, n.distanceToSquared(en)));
        if (t)
          for (let r = 0, s = t.length; r < s; r++) {
            const s = t[r],
              a = this.morphTargetsRelative;
            for (let t = 0, r = s.count; t < r; t++)
              en.fromBufferAttribute(s, t),
                a && (Kt.fromBufferAttribute(e, t), en.add(Kt)),
                (i = Math.max(i, n.distanceToSquared(en)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeTangents() {
      const e = this.index,
        t = this.attributes;
      if (
        null === e ||
        void 0 === t.position ||
        void 0 === t.normal ||
        void 0 === t.uv
      )
        return void console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
        );
      const n = e.array,
        i = t.position.array,
        r = t.normal.array,
        s = t.uv.array,
        a = i.length / 3;
      !1 === this.hasAttribute("tangent") &&
        this.setAttribute("tangent", new Wt(new Float32Array(4 * a), 4));
      const o = this.getAttribute("tangent").array,
        l = [],
        c = [];
      for (let e = 0; e < a; e++) (l[e] = new Te()), (c[e] = new Te());
      const h = new Te(),
        u = new Te(),
        d = new Te(),
        p = new $(),
        f = new $(),
        m = new $(),
        g = new Te(),
        v = new Te();
      function x(e, t, n) {
        h.fromArray(i, 3 * e),
          u.fromArray(i, 3 * t),
          d.fromArray(i, 3 * n),
          p.fromArray(s, 2 * e),
          f.fromArray(s, 2 * t),
          m.fromArray(s, 2 * n),
          u.sub(h),
          d.sub(h),
          f.sub(p),
          m.sub(p);
        const r = 1 / (f.x * m.y - m.x * f.y);
        isFinite(r) &&
          (g
            .copy(u)
            .multiplyScalar(m.y)
            .addScaledVector(d, -f.y)
            .multiplyScalar(r),
          v
            .copy(d)
            .multiplyScalar(f.x)
            .addScaledVector(u, -m.x)
            .multiplyScalar(r),
          l[e].add(g),
          l[t].add(g),
          l[n].add(g),
          c[e].add(v),
          c[t].add(v),
          c[n].add(v));
      }
      let y = this.groups;
      0 === y.length && (y = [{ start: 0, count: n.length }]);
      for (let e = 0, t = y.length; e < t; ++e) {
        const t = y[e],
          i = t.start;
        for (let e = i, r = i + t.count; e < r; e += 3)
          x(n[e + 0], n[e + 1], n[e + 2]);
      }
      const _ = new Te(),
        b = new Te(),
        w = new Te(),
        M = new Te();
      function S(e) {
        w.fromArray(r, 3 * e), M.copy(w);
        const t = l[e];
        _.copy(t),
          _.sub(w.multiplyScalar(w.dot(t))).normalize(),
          b.crossVectors(M, t);
        const n = b.dot(c[e]) < 0 ? -1 : 1;
        (o[4 * e] = _.x),
          (o[4 * e + 1] = _.y),
          (o[4 * e + 2] = _.z),
          (o[4 * e + 3] = n);
      }
      for (let e = 0, t = y.length; e < t; ++e) {
        const t = y[e],
          i = t.start;
        for (let e = i, r = i + t.count; e < r; e += 3)
          S(n[e + 0]), S(n[e + 1]), S(n[e + 2]);
      }
    }
    computeVertexNormals() {
      const e = this.index,
        t = this.getAttribute("position");
      if (void 0 !== t) {
        let n = this.getAttribute("normal");
        if (void 0 === n)
          (n = new Wt(new Float32Array(3 * t.count), 3)),
            this.setAttribute("normal", n);
        else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        const i = new Te(),
          r = new Te(),
          s = new Te(),
          a = new Te(),
          o = new Te(),
          l = new Te(),
          c = new Te(),
          h = new Te();
        if (e)
          for (let u = 0, d = e.count; u < d; u += 3) {
            const d = e.getX(u + 0),
              p = e.getX(u + 1),
              f = e.getX(u + 2);
            i.fromBufferAttribute(t, d),
              r.fromBufferAttribute(t, p),
              s.fromBufferAttribute(t, f),
              c.subVectors(s, r),
              h.subVectors(i, r),
              c.cross(h),
              a.fromBufferAttribute(n, d),
              o.fromBufferAttribute(n, p),
              l.fromBufferAttribute(n, f),
              a.add(c),
              o.add(c),
              l.add(c),
              n.setXYZ(d, a.x, a.y, a.z),
              n.setXYZ(p, o.x, o.y, o.z),
              n.setXYZ(f, l.x, l.y, l.z);
          }
        else
          for (let e = 0, a = t.count; e < a; e += 3)
            i.fromBufferAttribute(t, e + 0),
              r.fromBufferAttribute(t, e + 1),
              s.fromBufferAttribute(t, e + 2),
              c.subVectors(s, r),
              h.subVectors(i, r),
              c.cross(h),
              n.setXYZ(e + 0, c.x, c.y, c.z),
              n.setXYZ(e + 1, c.x, c.y, c.z),
              n.setXYZ(e + 2, c.x, c.y, c.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    merge(e, t) {
      if (!e || !e.isBufferGeometry)
        return void console.error(
          "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
          e
        );
      void 0 === t &&
        ((t = 0),
        console.warn(
          "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
        ));
      const n = this.attributes;
      for (const i in n) {
        if (void 0 === e.attributes[i]) continue;
        const r = n[i].array,
          s = e.attributes[i],
          a = s.array,
          o = s.itemSize * t,
          l = Math.min(a.length, r.length - o);
        for (let e = 0, t = o; e < l; e++, t++) r[t] = a[e];
      }
      return this;
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        en.fromBufferAttribute(e, t),
          en.normalize(),
          e.setXYZ(t, en.x, en.y, en.z);
    }
    toNonIndexed() {
      function e(e, t) {
        const n = e.array,
          i = e.itemSize,
          r = e.normalized,
          s = new n.constructor(t.length * i);
        let a = 0,
          o = 0;
        for (let r = 0, l = t.length; r < l; r++) {
          a = e.isInterleavedBufferAttribute
            ? t[r] * e.data.stride + e.offset
            : t[r] * i;
          for (let e = 0; e < i; e++) s[o++] = n[a++];
        }
        return new Wt(s, i, r);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
          ),
          this
        );
      const t = new tn(),
        n = this.index.array,
        i = this.attributes;
      for (const r in i) {
        const s = e(i[r], n);
        t.setAttribute(r, s);
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const s = [],
          a = r[i];
        for (let t = 0, i = a.length; t < i; t++) {
          const i = e(a[t], n);
          s.push(i);
        }
        t.morphAttributes[i] = s;
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let e = 0, n = s.length; e < n; e++) {
        const n = s[e];
        t.addGroup(n.start, n.count, n.materialIndex);
      }
      return t;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((e.uuid = this.uuid),
        (e.type = this.type),
        "" !== this.name && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        const t = this.parameters;
        for (const n in t) void 0 !== t[n] && (e[n] = t[n]);
        return e;
      }
      e.data = { attributes: {} };
      const t = this.index;
      null !== t &&
        (e.data.index = {
          type: t.array.constructor.name,
          array: Array.prototype.slice.call(t.array),
        });
      const n = this.attributes;
      for (const t in n) {
        const i = n[t];
        e.data.attributes[t] = i.toJSON(e.data);
      }
      const i = {};
      let r = !1;
      for (const t in this.morphAttributes) {
        const n = this.morphAttributes[t],
          s = [];
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          s.push(i.toJSON(e.data));
        }
        s.length > 0 && ((i[t] = s), (r = !0));
      }
      r &&
        ((e.data.morphAttributes = i),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      const s = this.groups;
      s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return (
        null !== a &&
          (e.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius,
          }),
        e
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const t = {};
      this.name = e.name;
      const n = e.index;
      null !== n && this.setIndex(n.clone(t));
      const i = e.attributes;
      for (const e in i) {
        const n = i[e];
        this.setAttribute(e, n.clone(t));
      }
      const r = e.morphAttributes;
      for (const e in r) {
        const n = [],
          i = r[e];
        for (let e = 0, r = i.length; e < r; e++) n.push(i[e].clone(t));
        this.morphAttributes[e] = n;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const s = e.groups;
      for (let e = 0, t = s.length; e < t; e++) {
        const t = s[e];
        this.addGroup(t.start, t.count, t.materialIndex);
      }
      const a = e.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      const o = e.boundingSphere;
      return (
        null !== o && (this.boundingSphere = o.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        void 0 !== e.parameters &&
          (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  tn.prototype.isBufferGeometry = !0;
  const nn = new nt(),
    rn = new tt(),
    sn = new Xe(),
    an = new Te(),
    on = new Te(),
    ln = new Te(),
    cn = new Te(),
    hn = new Te(),
    un = new Te(),
    dn = new Te(),
    pn = new Te(),
    fn = new Te(),
    mn = new $(),
    gn = new $(),
    vn = new $(),
    xn = new Te(),
    yn = new Te();
  class _n extends At {
    constructor(e = new tn(), t = new kt()) {
      super(),
        (this.type = "Mesh"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e) {
      return (
        super.copy(e),
        void 0 !== e.morphTargetInfluences &&
          (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        void 0 !== e.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary
          )),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    updateMorphTargets() {
      const e = this.geometry;
      if (e.isBufferGeometry) {
        const t = e.morphAttributes,
          n = Object.keys(t);
        if (n.length > 0) {
          const e = t[n[0]];
          if (void 0 !== e) {
            (this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {});
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t].name || String(t);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = t);
            }
          }
        }
      } else {
        const t = e.morphTargets;
        void 0 !== t &&
          t.length > 0 &&
          console.error(
            "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      }
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (void 0 === i) return;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        sn.copy(n.boundingSphere),
        sn.applyMatrix4(r),
        !1 === e.ray.intersectsSphere(sn))
      )
        return;
      if (
        (nn.copy(r).invert(),
        rn.copy(e.ray).applyMatrix4(nn),
        null !== n.boundingBox && !1 === rn.intersectsBox(n.boundingBox))
      )
        return;
      let s;
      if (n.isBufferGeometry) {
        const r = n.index,
          a = n.attributes.position,
          o = n.morphAttributes.position,
          l = n.morphTargetsRelative,
          c = n.attributes.uv,
          h = n.attributes.uv2,
          u = n.groups,
          d = n.drawRange;
        if (null !== r)
          if (Array.isArray(i))
            for (let n = 0, p = u.length; n < p; n++) {
              const p = u[n],
                f = i[p.materialIndex];
              for (
                let n = Math.max(p.start, d.start),
                  i = Math.min(
                    r.count,
                    Math.min(p.start + p.count, d.start + d.count)
                  );
                n < i;
                n += 3
              ) {
                const i = r.getX(n),
                  u = r.getX(n + 1),
                  d = r.getX(n + 2);
                (s = bn(this, f, e, rn, a, o, l, c, h, i, u, d)),
                  s &&
                    ((s.faceIndex = Math.floor(n / 3)),
                    (s.face.materialIndex = p.materialIndex),
                    t.push(s));
              }
            }
          else
            for (
              let n = Math.max(0, d.start),
                u = Math.min(r.count, d.start + d.count);
              n < u;
              n += 3
            ) {
              const u = r.getX(n),
                d = r.getX(n + 1),
                p = r.getX(n + 2);
              (s = bn(this, i, e, rn, a, o, l, c, h, u, d, p)),
                s && ((s.faceIndex = Math.floor(n / 3)), t.push(s));
            }
        else if (void 0 !== a)
          if (Array.isArray(i))
            for (let n = 0, r = u.length; n < r; n++) {
              const r = u[n],
                p = i[r.materialIndex];
              for (
                let n = Math.max(r.start, d.start),
                  i = Math.min(
                    a.count,
                    Math.min(r.start + r.count, d.start + d.count)
                  );
                n < i;
                n += 3
              )
                (s = bn(this, p, e, rn, a, o, l, c, h, n, n + 1, n + 2)),
                  s &&
                    ((s.faceIndex = Math.floor(n / 3)),
                    (s.face.materialIndex = r.materialIndex),
                    t.push(s));
            }
          else
            for (
              let n = Math.max(0, d.start),
                r = Math.min(a.count, d.start + d.count);
              n < r;
              n += 3
            )
              (s = bn(this, i, e, rn, a, o, l, c, h, n, n + 1, n + 2)),
                s && ((s.faceIndex = Math.floor(n / 3)), t.push(s));
      } else
        n.isGeometry &&
          console.error(
            "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
    }
  }
  function bn(e, t, n, i, r, s, a, o, l, c, h, u) {
    an.fromBufferAttribute(r, c),
      on.fromBufferAttribute(r, h),
      ln.fromBufferAttribute(r, u);
    const d = e.morphTargetInfluences;
    if (s && d) {
      dn.set(0, 0, 0), pn.set(0, 0, 0), fn.set(0, 0, 0);
      for (let e = 0, t = s.length; e < t; e++) {
        const t = d[e],
          n = s[e];
        0 !== t &&
          (cn.fromBufferAttribute(n, c),
          hn.fromBufferAttribute(n, h),
          un.fromBufferAttribute(n, u),
          a
            ? (dn.addScaledVector(cn, t),
              pn.addScaledVector(hn, t),
              fn.addScaledVector(un, t))
            : (dn.addScaledVector(cn.sub(an), t),
              pn.addScaledVector(hn.sub(on), t),
              fn.addScaledVector(un.sub(ln), t)));
      }
      an.add(dn), on.add(pn), ln.add(fn);
    }
    e.isSkinnedMesh &&
      (e.boneTransform(c, an), e.boneTransform(h, on), e.boneTransform(u, ln));
    const p = (function (e, t, n, i, r, s, a, o) {
      let l;
      if (
        ((l =
          1 === t.side
            ? i.intersectTriangle(a, s, r, !0, o)
            : i.intersectTriangle(r, s, a, 2 !== t.side, o)),
        null === l)
      )
        return null;
      yn.copy(o), yn.applyMatrix4(e.matrixWorld);
      const c = n.ray.origin.distanceTo(yn);
      return c < n.near || c > n.far
        ? null
        : { distance: c, point: yn.clone(), object: e };
    })(e, t, n, i, an, on, ln, xn);
    if (p) {
      o &&
        (mn.fromBufferAttribute(o, c),
        gn.fromBufferAttribute(o, h),
        vn.fromBufferAttribute(o, u),
        (p.uv = Bt.getUV(xn, an, on, ln, mn, gn, vn, new $()))),
        l &&
          (mn.fromBufferAttribute(l, c),
          gn.fromBufferAttribute(l, h),
          vn.fromBufferAttribute(l, u),
          (p.uv2 = Bt.getUV(xn, an, on, ln, mn, gn, vn, new $())));
      const e = { a: c, b: h, c: u, normal: new Te(), materialIndex: 0 };
      Bt.getNormal(an, on, ln, e.normal), (p.face = e);
    }
    return p;
  }
  _n.prototype.isMesh = !0;
  class wn extends tn {
    constructor(e = 1, t = 1, n = 1, i = 1, r = 1, s = 1) {
      super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: s,
        });
      const a = this;
      (i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
      const o = [],
        l = [],
        c = [],
        h = [];
      let u = 0,
        d = 0;
      function p(e, t, n, i, r, s, p, f, m, g, v) {
        const x = s / m,
          y = p / g,
          _ = s / 2,
          b = p / 2,
          w = f / 2,
          M = m + 1,
          S = g + 1;
        let T = 0,
          E = 0;
        const A = new Te();
        for (let s = 0; s < S; s++) {
          const a = s * y - b;
          for (let o = 0; o < M; o++) {
            const u = o * x - _;
            (A[e] = u * i),
              (A[t] = a * r),
              (A[n] = w),
              l.push(A.x, A.y, A.z),
              (A[e] = 0),
              (A[t] = 0),
              (A[n] = f > 0 ? 1 : -1),
              c.push(A.x, A.y, A.z),
              h.push(o / m),
              h.push(1 - s / g),
              (T += 1);
          }
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < m; t++) {
            const n = u + t + M * e,
              i = u + t + M * (e + 1),
              r = u + (t + 1) + M * (e + 1),
              s = u + (t + 1) + M * e;
            o.push(n, i, s), o.push(i, r, s), (E += 6);
          }
        a.addGroup(d, E, v), (d += E), (u += T);
      }
      p("z", "y", "x", -1, -1, n, t, e, s, r, 0),
        p("z", "y", "x", 1, -1, n, t, -e, s, r, 1),
        p("x", "z", "y", 1, 1, e, n, t, i, s, 2),
        p("x", "z", "y", 1, -1, e, n, -t, i, s, 3),
        p("x", "y", "z", 1, -1, e, t, n, i, r, 4),
        p("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new Xt(l, 3)),
        this.setAttribute("normal", new Xt(c, 3)),
        this.setAttribute("uv", new Xt(h, 2));
    }
    static fromJSON(e) {
      return new wn(
        e.width,
        e.height,
        e.depth,
        e.widthSegments,
        e.heightSegments,
        e.depthSegments
      );
    }
  }
  function Mn(e) {
    const t = {};
    for (const n in e) {
      t[n] = {};
      for (const i in e[n]) {
        const r = e[n][i];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
          ? (t[n][i] = r.clone())
          : Array.isArray(r)
          ? (t[n][i] = r.slice())
          : (t[n][i] = r);
      }
    }
    return t;
  }
  function Sn(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = Mn(e[n]);
      for (const e in i) t[e] = i[e];
    }
    return t;
  }
  const Tn = { clone: Mn, merge: Sn };
  class En extends Ht {
    constructor(e) {
      super(),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        void 0 !== e &&
          (void 0 !== e.attributes &&
            console.error(
              "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
            ),
          this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = Mn(e.uniforms)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.fog = e.fog),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      (t.glslVersion = this.glslVersion), (t.uniforms = {});
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture
          ? (t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid })
          : i && i.isColor
          ? (t.uniforms[n] = { type: "c", value: i.getHex() })
          : i && i.isVector2
          ? (t.uniforms[n] = { type: "v2", value: i.toArray() })
          : i && i.isVector3
          ? (t.uniforms[n] = { type: "v3", value: i.toArray() })
          : i && i.isVector4
          ? (t.uniforms[n] = { type: "v4", value: i.toArray() })
          : i && i.isMatrix3
          ? (t.uniforms[n] = { type: "m3", value: i.toArray() })
          : i && i.isMatrix4
          ? (t.uniforms[n] = { type: "m4", value: i.toArray() })
          : (t.uniforms[n] = { value: i });
      }
      Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader);
      const n = {};
      for (const e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
      return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
  }
  En.prototype.isShaderMaterial = !0;
  class An extends At {
    constructor() {
      super(),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new nt()),
        (this.projectionMatrix = new nt()),
        (this.projectionMatrixInverse = new nt());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(-t[8], -t[9], -t[10]).normalize();
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
      super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  An.prototype.isCamera = !0;
  class Rn extends An {
    constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
      super(),
        (this.type = "PerspectiveCamera"),
        (this.fov = e),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = t),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.fov = e.fov),
        (this.zoom = e.zoom),
        (this.near = e.near),
        (this.far = e.far),
        (this.focus = e.focus),
        (this.aspect = e.aspect),
        (this.view = null === e.view ? null : Object.assign({}, e.view)),
        (this.filmGauge = e.filmGauge),
        (this.filmOffset = e.filmOffset),
        this
      );
    }
    setFocalLength(e) {
      const t = (0.5 * this.getFilmHeight()) / e;
      (this.fov = 2 * W * Math.atan(t)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const e = Math.tan(0.5 * V * this.fov);
      return (0.5 * this.getFilmHeight()) / e;
    }
    getEffectiveFOV() {
      return 2 * W * Math.atan(Math.tan(0.5 * V * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e, t, n, i, r, s) {
      (this.aspect = e / t),
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = s),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = this.near;
      let t = (e * Math.tan(0.5 * V * this.fov)) / this.zoom,
        n = 2 * t,
        i = this.aspect * n,
        r = -0.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const e = s.fullWidth,
          a = s.fullHeight;
        (r += (s.offsetX * i) / e),
          (t -= (s.offsetY * n) / a),
          (i *= s.width / e),
          (n *= s.height / a);
      }
      const a = this.filmOffset;
      0 !== a && (r += (e * a) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.fov = this.fov),
        (t.object.zoom = this.zoom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        (t.object.focus = this.focus),
        (t.object.aspect = this.aspect),
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        (t.object.filmGauge = this.filmGauge),
        (t.object.filmOffset = this.filmOffset),
        t
      );
    }
  }
  Rn.prototype.isPerspectiveCamera = !0;
  const Ln = 90;
  class Cn extends At {
    constructor(e, t, n) {
      if (
        (super(), (this.type = "CubeCamera"), !0 !== n.isWebGLCubeRenderTarget)
      )
        return void console.error(
          "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
        );
      this.renderTarget = n;
      const i = new Rn(Ln, 1, e, t);
      (i.layers = this.layers),
        i.up.set(0, -1, 0),
        i.lookAt(new Te(1, 0, 0)),
        this.add(i);
      const r = new Rn(Ln, 1, e, t);
      (r.layers = this.layers),
        r.up.set(0, -1, 0),
        r.lookAt(new Te(-1, 0, 0)),
        this.add(r);
      const s = new Rn(Ln, 1, e, t);
      (s.layers = this.layers),
        s.up.set(0, 0, 1),
        s.lookAt(new Te(0, 1, 0)),
        this.add(s);
      const a = new Rn(Ln, 1, e, t);
      (a.layers = this.layers),
        a.up.set(0, 0, -1),
        a.lookAt(new Te(0, -1, 0)),
        this.add(a);
      const o = new Rn(Ln, 1, e, t);
      (o.layers = this.layers),
        o.up.set(0, -1, 0),
        o.lookAt(new Te(0, 0, 1)),
        this.add(o);
      const l = new Rn(Ln, 1, e, t);
      (l.layers = this.layers),
        l.up.set(0, -1, 0),
        l.lookAt(new Te(0, 0, -1)),
        this.add(l);
    }
    update(e, t) {
      null === this.parent && this.updateMatrixWorld();
      const n = this.renderTarget,
        [i, r, s, a, o, l] = this.children,
        c = e.getRenderTarget(),
        h = e.toneMapping,
        u = e.xr.enabled;
      (e.toneMapping = 0), (e.xr.enabled = !1);
      const d = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        e.setRenderTarget(n, 0),
        e.render(t, i),
        e.setRenderTarget(n, 1),
        e.render(t, r),
        e.setRenderTarget(n, 2),
        e.render(t, s),
        e.setRenderTarget(n, 3),
        e.render(t, a),
        e.setRenderTarget(n, 4),
        e.render(t, o),
        (n.texture.generateMipmaps = d),
        e.setRenderTarget(n, 5),
        e.render(t, l),
        e.setRenderTarget(c),
        (e.toneMapping = h),
        (e.xr.enabled = u),
        (n.texture.needsPMREMUpdate = !0);
    }
  }
  class Pn extends ye {
    constructor(e, n, i, r, s, a, o, l, c, h) {
      super(
        (e = void 0 !== e ? e : []),
        (n = void 0 !== n ? n : t),
        i,
        r,
        s,
        a,
        o,
        l,
        c,
        h
      ),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  }
  Pn.prototype.isCubeTexture = !0;
  class Dn extends be {
    constructor(e, t = {}) {
      super(e, e, t);
      const n = { width: e, height: e, depth: 1 },
        i = [n, n, n, n, n, n];
      (this.texture = new Pn(
        i,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.generateMipmaps =
          void 0 !== t.generateMipmaps && t.generateMipmaps),
        (this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : h);
    }
    fromEquirectangularTexture(e, t) {
      (this.texture.type = t.type),
        (this.texture.encoding = t.encoding),
        (this.texture.generateMipmaps = t.generateMipmaps),
        (this.texture.minFilter = t.minFilter),
        (this.texture.magFilter = t.magFilter);
      const n = { tEquirect: { value: null } },
        i =
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        r =
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
        s = new wn(5, 5, 5),
        a = new En({
          name: "CubemapFromEquirect",
          uniforms: Mn(n),
          vertexShader: i,
          fragmentShader: r,
          side: 1,
          blending: 0,
        });
      a.uniforms.tEquirect.value = t;
      const o = new _n(s, a),
        l = t.minFilter;
      return (
        t.minFilter === u && (t.minFilter = h),
        new Cn(1, 10, this).update(e, o),
        (t.minFilter = l),
        o.geometry.dispose(),
        o.material.dispose(),
        this
      );
    }
    clear(e, t, n, i) {
      const r = e.getRenderTarget();
      for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
      e.setRenderTarget(r);
    }
  }
  Dn.prototype.isWebGLCubeRenderTarget = !0;
  const In = new Te(),
    Nn = new Te(),
    On = new ee();
  class zn {
    constructor(e = new Te(1, 0, 0), t = 0) {
      (this.normal = e), (this.constant = t);
    }
    set(e, t) {
      return this.normal.copy(e), (this.constant = t), this;
    }
    setComponents(e, t, n, i) {
      return this.normal.set(e, t, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
    }
    setFromCoplanarPoints(e, t, n) {
      const i = In.subVectors(n, t).cross(Nn.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, e), this;
    }
    copy(e) {
      return this.normal.copy(e.normal), (this.constant = e.constant), this;
    }
    normalize() {
      const e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), (this.constant *= e), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t
        .copy(this.normal)
        .multiplyScalar(-this.distanceToPoint(e))
        .add(e);
    }
    intersectLine(e, t) {
      const n = e.delta(In),
        i = this.normal.dot(n);
      if (0 === i)
        return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
      const r = -(e.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
    }
    intersectsLine(e) {
      const t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return (t < 0 && n > 0) || (n < 0 && t > 0);
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      const n = t || On.getNormalMatrix(e),
        i = this.coplanarPoint(In).applyMatrix4(e),
        r = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(r)), this;
    }
    translate(e) {
      return (this.constant -= e.dot(this.normal)), this;
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  zn.prototype.isPlane = !0;
  const Un = new Xe(),
    Bn = new Te();
  class Fn {
    constructor(
      e = new zn(),
      t = new zn(),
      n = new zn(),
      i = new zn(),
      r = new zn(),
      s = new zn()
    ) {
      this.planes = [e, t, n, i, r, s];
    }
    set(e, t, n, i, r, s) {
      const a = this.planes;
      return (
        a[0].copy(e),
        a[1].copy(t),
        a[2].copy(n),
        a[3].copy(i),
        a[4].copy(r),
        a[5].copy(s),
        this
      );
    }
    copy(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e) {
      const t = this.planes,
        n = e.elements,
        i = n[0],
        r = n[1],
        s = n[2],
        a = n[3],
        o = n[4],
        l = n[5],
        c = n[6],
        h = n[7],
        u = n[8],
        d = n[9],
        p = n[10],
        f = n[11],
        m = n[12],
        g = n[13],
        v = n[14],
        x = n[15];
      return (
        t[0].setComponents(a - i, h - o, f - u, x - m).normalize(),
        t[1].setComponents(a + i, h + o, f + u, x + m).normalize(),
        t[2].setComponents(a + r, h + l, f + d, x + g).normalize(),
        t[3].setComponents(a - r, h - l, f - d, x - g).normalize(),
        t[4].setComponents(a - s, h - c, f - p, x - v).normalize(),
        t[5].setComponents(a + s, h + c, f + p, x + v).normalize(),
        this
      );
    }
    intersectsObject(e) {
      const t = e.geometry;
      return (
        null === t.boundingSphere && t.computeBoundingSphere(),
        Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Un)
      );
    }
    intersectsSprite(e) {
      return (
        Un.center.set(0, 0, 0),
        (Un.radius = 0.7071067811865476),
        Un.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Un)
      );
    }
    intersectsSphere(e) {
      const t = this.planes,
        n = e.center,
        i = -e.radius;
      for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < i) return !1;
      return !0;
    }
    intersectsBox(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = t[n];
        if (
          ((Bn.x = i.normal.x > 0 ? e.max.x : e.min.x),
          (Bn.y = i.normal.y > 0 ? e.max.y : e.min.y),
          (Bn.z = i.normal.z > 0 ? e.max.z : e.min.z),
          i.distanceToPoint(Bn) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function Hn() {
    let e = null,
      t = !1,
      n = null,
      i = null;
    function r(t, s) {
      n(t, s), (i = e.requestAnimationFrame(r));
    }
    return {
      start: function () {
        !0 !== t && null !== n && ((i = e.requestAnimationFrame(r)), (t = !0));
      },
      stop: function () {
        e.cancelAnimationFrame(i), (t = !1);
      },
      setAnimationLoop: function (e) {
        n = e;
      },
      setContext: function (t) {
        e = t;
      },
    };
  }
  function kn(e, t) {
    const n = t.isWebGL2,
      i = new WeakMap();
    return {
      get: function (e) {
        return e.isInterleavedBufferAttribute && (e = e.data), i.get(e);
      },
      remove: function (t) {
        t.isInterleavedBufferAttribute && (t = t.data);
        const n = i.get(t);
        n && (e.deleteBuffer(n.buffer), i.delete(t));
      },
      update: function (t, r) {
        if (t.isGLBufferAttribute) {
          const e = i.get(t);
          return void (
            (!e || e.version < t.version) &&
            i.set(t, {
              buffer: t.buffer,
              type: t.type,
              bytesPerElement: t.elementSize,
              version: t.version,
            })
          );
        }
        t.isInterleavedBufferAttribute && (t = t.data);
        const s = i.get(t);
        void 0 === s
          ? i.set(
              t,
              (function (t, i) {
                const r = t.array,
                  s = t.usage,
                  a = e.createBuffer();
                let o;
                if (
                  (e.bindBuffer(i, a),
                  e.bufferData(i, r, s),
                  t.onUploadCallback(),
                  r instanceof Float32Array)
                )
                  o = 5126;
                else if (r instanceof Uint16Array)
                  if (t.isFloat16BufferAttribute) {
                    if (!n)
                      throw new Error(
                        "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                      );
                    o = 5131;
                  } else o = 5123;
                else if (r instanceof Int16Array) o = 5122;
                else if (r instanceof Uint32Array) o = 5125;
                else if (r instanceof Int32Array) o = 5124;
                else if (r instanceof Int8Array) o = 5120;
                else if (r instanceof Uint8Array) o = 5121;
                else {
                  if (!(r instanceof Uint8ClampedArray))
                    throw new Error(
                      "THREE.WebGLAttributes: Unsupported buffer data format: " +
                        r
                    );
                  o = 5121;
                }
                return {
                  buffer: a,
                  type: o,
                  bytesPerElement: r.BYTES_PER_ELEMENT,
                  version: t.version,
                };
              })(t, r)
            )
          : s.version < t.version &&
            ((function (t, i, r) {
              const s = i.array,
                a = i.updateRange;
              e.bindBuffer(r, t),
                -1 === a.count
                  ? e.bufferSubData(r, 0, s)
                  : (n
                      ? e.bufferSubData(
                          r,
                          a.offset * s.BYTES_PER_ELEMENT,
                          s,
                          a.offset,
                          a.count
                        )
                      : e.bufferSubData(
                          r,
                          a.offset * s.BYTES_PER_ELEMENT,
                          s.subarray(a.offset, a.offset + a.count)
                        ),
                    (a.count = -1));
            })(s.buffer, t, r),
            (s.version = t.version));
      },
    };
  }
  class Gn extends tn {
    constructor(e = 1, t = 1, n = 1, i = 1) {
      super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: i,
        });
      const r = e / 2,
        s = t / 2,
        a = Math.floor(n),
        o = Math.floor(i),
        l = a + 1,
        c = o + 1,
        h = e / a,
        u = t / o,
        d = [],
        p = [],
        f = [],
        m = [];
      for (let e = 0; e < c; e++) {
        const t = e * u - s;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -t, 0), f.push(0, 0, 1), m.push(n / a), m.push(1 - e / o);
        }
      }
      for (let e = 0; e < o; e++)
        for (let t = 0; t < a; t++) {
          const n = t + l * e,
            i = t + l * (e + 1),
            r = t + 1 + l * (e + 1),
            s = t + 1 + l * e;
          d.push(n, i, s), d.push(i, r, s);
        }
      this.setIndex(d),
        this.setAttribute("position", new Xt(p, 3)),
        this.setAttribute("normal", new Xt(f, 3)),
        this.setAttribute("uv", new Xt(m, 2));
    }
    static fromJSON(e) {
      return new Gn(e.width, e.height, e.widthSegments, e.heightSegments);
    }
  }
  const Vn = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
      alphatest_pars_fragment:
        "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
      common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment:
        "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex:
        "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphcolor_vertex:
        "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
      normal_fragment_begin:
        "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps:
        "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
      normal_pars_fragment:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_pars_vertex:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_vertex:
        "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
      clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
      output_fragment:
        "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
      shadowmap_pars_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmission_fragment:
        "#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
      transmission_pars_fragment:
        "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
      uv_pars_fragment:
        "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex:
        "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
      uv_vertex:
        "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
      uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      background_frag:
        "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      cube_frag:
        "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag:
        "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshnormal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      meshnormal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      shadow_vert:
        "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    },
    Wn = {
      common: {
        diffuse: { value: new pe(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        uvTransform: { value: new ee() },
        uv2Transform: { value: new ee() },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalScale: { value: new $(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new pe(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotShadowMap: { value: [] },
        spotShadowMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new pe(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
        uvTransform: { value: new ee() },
      },
      sprite: {
        diffuse: { value: new pe(16777215) },
        opacity: { value: 1 },
        center: { value: new $(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
        uvTransform: { value: new ee() },
      },
    },
    jn = {
      basic: {
        uniforms: Sn([
          Wn.common,
          Wn.specularmap,
          Wn.envmap,
          Wn.aomap,
          Wn.lightmap,
          Wn.fog,
        ]),
        vertexShader: Vn.meshbasic_vert,
        fragmentShader: Vn.meshbasic_frag,
      },
      lambert: {
        uniforms: Sn([
          Wn.common,
          Wn.specularmap,
          Wn.envmap,
          Wn.aomap,
          Wn.lightmap,
          Wn.emissivemap,
          Wn.fog,
          Wn.lights,
          { emissive: { value: new pe(0) } },
        ]),
        vertexShader: Vn.meshlambert_vert,
        fragmentShader: Vn.meshlambert_frag,
      },
      phong: {
        uniforms: Sn([
          Wn.common,
          Wn.specularmap,
          Wn.envmap,
          Wn.aomap,
          Wn.lightmap,
          Wn.emissivemap,
          Wn.bumpmap,
          Wn.normalmap,
          Wn.displacementmap,
          Wn.fog,
          Wn.lights,
          {
            emissive: { value: new pe(0) },
            specular: { value: new pe(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: Vn.meshphong_vert,
        fragmentShader: Vn.meshphong_frag,
      },
      standard: {
        uniforms: Sn([
          Wn.common,
          Wn.envmap,
          Wn.aomap,
          Wn.lightmap,
          Wn.emissivemap,
          Wn.bumpmap,
          Wn.normalmap,
          Wn.displacementmap,
          Wn.roughnessmap,
          Wn.metalnessmap,
          Wn.fog,
          Wn.lights,
          {
            emissive: { value: new pe(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: Vn.meshphysical_vert,
        fragmentShader: Vn.meshphysical_frag,
      },
      toon: {
        uniforms: Sn([
          Wn.common,
          Wn.aomap,
          Wn.lightmap,
          Wn.emissivemap,
          Wn.bumpmap,
          Wn.normalmap,
          Wn.displacementmap,
          Wn.gradientmap,
          Wn.fog,
          Wn.lights,
          { emissive: { value: new pe(0) } },
        ]),
        vertexShader: Vn.meshtoon_vert,
        fragmentShader: Vn.meshtoon_frag,
      },
      matcap: {
        uniforms: Sn([
          Wn.common,
          Wn.bumpmap,
          Wn.normalmap,
          Wn.displacementmap,
          Wn.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: Vn.meshmatcap_vert,
        fragmentShader: Vn.meshmatcap_frag,
      },
      points: {
        uniforms: Sn([Wn.points, Wn.fog]),
        vertexShader: Vn.points_vert,
        fragmentShader: Vn.points_frag,
      },
      dashed: {
        uniforms: Sn([
          Wn.common,
          Wn.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: Vn.linedashed_vert,
        fragmentShader: Vn.linedashed_frag,
      },
      depth: {
        uniforms: Sn([Wn.common, Wn.displacementmap]),
        vertexShader: Vn.depth_vert,
        fragmentShader: Vn.depth_frag,
      },
      normal: {
        uniforms: Sn([
          Wn.common,
          Wn.bumpmap,
          Wn.normalmap,
          Wn.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: Vn.meshnormal_vert,
        fragmentShader: Vn.meshnormal_frag,
      },
      sprite: {
        uniforms: Sn([Wn.sprite, Wn.fog]),
        vertexShader: Vn.sprite_vert,
        fragmentShader: Vn.sprite_frag,
      },
      background: {
        uniforms: { uvTransform: { value: new ee() }, t2D: { value: null } },
        vertexShader: Vn.background_vert,
        fragmentShader: Vn.background_frag,
      },
      cube: {
        uniforms: Sn([Wn.envmap, { opacity: { value: 1 } }]),
        vertexShader: Vn.cube_vert,
        fragmentShader: Vn.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Vn.equirect_vert,
        fragmentShader: Vn.equirect_frag,
      },
      distanceRGBA: {
        uniforms: Sn([
          Wn.common,
          Wn.displacementmap,
          {
            referencePosition: { value: new Te() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: Vn.distanceRGBA_vert,
        fragmentShader: Vn.distanceRGBA_frag,
      },
      shadow: {
        uniforms: Sn([
          Wn.lights,
          Wn.fog,
          { color: { value: new pe(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: Vn.shadow_vert,
        fragmentShader: Vn.shadow_frag,
      },
    };
  function qn(e, t, n, r, s, a) {
    const o = new pe(0);
    let l,
      c,
      h = !0 === s ? 0 : 1,
      u = null,
      d = 0,
      p = null;
    function f(e, t) {
      n.buffers.color.setClear(e.r, e.g, e.b, t, a);
    }
    return {
      getClearColor: function () {
        return o;
      },
      setClearColor: function (e, t = 1) {
        o.set(e), (h = t), f(o, h);
      },
      getClearAlpha: function () {
        return h;
      },
      setClearAlpha: function (e) {
        (h = e), f(o, h);
      },
      render: function (n, s) {
        let a = !1,
          m = !0 === s.isScene ? s.background : null;
        m && m.isTexture && (m = t.get(m));
        const g = e.xr,
          v = g.getSession && g.getSession();
        v && "additive" === v.environmentBlendMode && (m = null),
          null === m ? f(o, h) : m && m.isColor && (f(m, 1), (a = !0)),
          (e.autoClear || a) &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          m && (m.isCubeTexture || m.mapping === i)
            ? (void 0 === c &&
                ((c = new _n(
                  new wn(1, 1, 1),
                  new En({
                    name: "BackgroundCubeMaterial",
                    uniforms: Mn(jn.cube.uniforms),
                    vertexShader: jn.cube.vertexShader,
                    fragmentShader: jn.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                c.geometry.deleteAttribute("normal"),
                c.geometry.deleteAttribute("uv"),
                (c.onBeforeRender = function (e, t, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld);
                }),
                Object.defineProperty(c.material, "envMap", {
                  get: function () {
                    return this.uniforms.envMap.value;
                  },
                }),
                r.update(c)),
              (c.material.uniforms.envMap.value = m),
              (c.material.uniforms.flipEnvMap.value =
                m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1),
              (u === m && d === m.version && p === e.toneMapping) ||
                ((c.material.needsUpdate = !0),
                (u = m),
                (d = m.version),
                (p = e.toneMapping)),
              c.layers.enableAll(),
              n.unshift(c, c.geometry, c.material, 0, 0, null))
            : m &&
              m.isTexture &&
              (void 0 === l &&
                ((l = new _n(
                  new Gn(2, 2),
                  new En({
                    name: "BackgroundMaterial",
                    uniforms: Mn(jn.background.uniforms),
                    vertexShader: jn.background.vertexShader,
                    fragmentShader: jn.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                l.geometry.deleteAttribute("normal"),
                Object.defineProperty(l.material, "map", {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                r.update(l)),
              (l.material.uniforms.t2D.value = m),
              !0 === m.matrixAutoUpdate && m.updateMatrix(),
              l.material.uniforms.uvTransform.value.copy(m.matrix),
              (u === m && d === m.version && p === e.toneMapping) ||
                ((l.material.needsUpdate = !0),
                (u = m),
                (d = m.version),
                (p = e.toneMapping)),
              l.layers.enableAll(),
              n.unshift(l, l.geometry, l.material, 0, 0, null));
      },
    };
  }
  function Xn(e, t, n, i) {
    const r = e.getParameter(34921),
      s = i.isWebGL2 ? null : t.get("OES_vertex_array_object"),
      a = i.isWebGL2 || null !== s,
      o = {},
      l = p(null);
    let c = l,
      h = !1;
    function u(t) {
      return i.isWebGL2 ? e.bindVertexArray(t) : s.bindVertexArrayOES(t);
    }
    function d(t) {
      return i.isWebGL2 ? e.deleteVertexArray(t) : s.deleteVertexArrayOES(t);
    }
    function p(e) {
      const t = [],
        n = [],
        i = [];
      for (let e = 0; e < r; e++) (t[e] = 0), (n[e] = 0), (i[e] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: t,
        enabledAttributes: n,
        attributeDivisors: i,
        object: e,
        attributes: {},
        index: null,
      };
    }
    function f() {
      const e = c.newAttributes;
      for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
    }
    function m(e) {
      g(e, 0);
    }
    function g(n, r) {
      const s = c.newAttributes,
        a = c.enabledAttributes,
        o = c.attributeDivisors;
      (s[n] = 1),
        0 === a[n] && (e.enableVertexAttribArray(n), (a[n] = 1)),
        o[n] !== r &&
          ((i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[
            i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
          ](n, r),
          (o[n] = r));
    }
    function v() {
      const t = c.newAttributes,
        n = c.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++)
        n[i] !== t[i] && (e.disableVertexAttribArray(i), (n[i] = 0));
    }
    function x(t, n, r, s, a, o) {
      !0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
        ? e.vertexAttribPointer(t, n, r, s, a, o)
        : e.vertexAttribIPointer(t, n, r, a, o);
    }
    function y() {
      _(), (h = !0), c !== l && ((c = l), u(c.object));
    }
    function _() {
      (l.geometry = null), (l.program = null), (l.wireframe = !1);
    }
    return {
      setup: function (r, l, d, y, _) {
        let b = !1;
        if (a) {
          const t = (function (t, n, r) {
            const a = !0 === r.wireframe;
            let l = o[t.id];
            void 0 === l && ((l = {}), (o[t.id] = l));
            let c = l[n.id];
            void 0 === c && ((c = {}), (l[n.id] = c));
            let h = c[a];
            return (
              void 0 === h &&
                ((h = p(
                  i.isWebGL2 ? e.createVertexArray() : s.createVertexArrayOES()
                )),
                (c[a] = h)),
              h
            );
          })(y, d, l);
          c !== t && ((c = t), u(c.object)),
            (b = (function (e, t, n, i) {
              const r = c.attributes,
                s = t.attributes;
              let a = 0;
              const o = n.getAttributes();
              for (const t in o)
                if (o[t].location >= 0) {
                  const n = r[t];
                  let i = s[t];
                  if (
                    (void 0 === i &&
                      ("instanceMatrix" === t &&
                        e.instanceMatrix &&
                        (i = e.instanceMatrix),
                      "instanceColor" === t &&
                        e.instanceColor &&
                        (i = e.instanceColor)),
                    void 0 === n)
                  )
                    return !0;
                  if (n.attribute !== i) return !0;
                  if (i && n.data !== i.data) return !0;
                  a++;
                }
              return c.attributesNum !== a || c.index !== i;
            })(r, y, d, _)),
            b &&
              (function (e, t, n, i) {
                const r = {},
                  s = t.attributes;
                let a = 0;
                const o = n.getAttributes();
                for (const t in o)
                  if (o[t].location >= 0) {
                    let n = s[t];
                    void 0 === n &&
                      ("instanceMatrix" === t &&
                        e.instanceMatrix &&
                        (n = e.instanceMatrix),
                      "instanceColor" === t &&
                        e.instanceColor &&
                        (n = e.instanceColor));
                    const i = {};
                    (i.attribute = n),
                      n && n.data && (i.data = n.data),
                      (r[t] = i),
                      a++;
                  }
                (c.attributes = r), (c.attributesNum = a), (c.index = i);
              })(r, y, d, _);
        } else {
          const e = !0 === l.wireframe;
          (c.geometry === y.id && c.program === d.id && c.wireframe === e) ||
            ((c.geometry = y.id),
            (c.program = d.id),
            (c.wireframe = e),
            (b = !0));
        }
        null !== _ && n.update(_, 34963),
          (b || h) &&
            ((h = !1),
            (function (r, s, a, o) {
              if (
                !1 === i.isWebGL2 &&
                (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                null === t.get("ANGLE_instanced_arrays")
              )
                return;
              f();
              const l = o.attributes,
                c = a.getAttributes(),
                h = s.defaultAttributeValues;
              for (const t in c) {
                const i = c[t];
                if (i.location >= 0) {
                  let s = l[t];
                  if (
                    (void 0 === s &&
                      ("instanceMatrix" === t &&
                        r.instanceMatrix &&
                        (s = r.instanceMatrix),
                      "instanceColor" === t &&
                        r.instanceColor &&
                        (s = r.instanceColor)),
                    void 0 !== s)
                  ) {
                    const t = s.normalized,
                      a = s.itemSize,
                      l = n.get(s);
                    if (void 0 === l) continue;
                    const c = l.buffer,
                      h = l.type,
                      u = l.bytesPerElement;
                    if (s.isInterleavedBufferAttribute) {
                      const n = s.data,
                        l = n.stride,
                        d = s.offset;
                      if (n.isInstancedInterleavedBuffer) {
                        for (let e = 0; e < i.locationSize; e++)
                          g(i.location + e, n.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = n.meshPerAttribute * n.count);
                      } else
                        for (let e = 0; e < i.locationSize; e++)
                          m(i.location + e);
                      e.bindBuffer(34962, c);
                      for (let e = 0; e < i.locationSize; e++)
                        x(
                          i.location + e,
                          a / i.locationSize,
                          h,
                          t,
                          l * u,
                          (d + (a / i.locationSize) * e) * u
                        );
                    } else {
                      if (s.isInstancedBufferAttribute) {
                        for (let e = 0; e < i.locationSize; e++)
                          g(i.location + e, s.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = s.meshPerAttribute * s.count);
                      } else
                        for (let e = 0; e < i.locationSize; e++)
                          m(i.location + e);
                      e.bindBuffer(34962, c);
                      for (let e = 0; e < i.locationSize; e++)
                        x(
                          i.location + e,
                          a / i.locationSize,
                          h,
                          t,
                          a * u,
                          (a / i.locationSize) * e * u
                        );
                    }
                  } else if (void 0 !== h) {
                    const n = h[t];
                    if (void 0 !== n)
                      switch (n.length) {
                        case 2:
                          e.vertexAttrib2fv(i.location, n);
                          break;
                        case 3:
                          e.vertexAttrib3fv(i.location, n);
                          break;
                        case 4:
                          e.vertexAttrib4fv(i.location, n);
                          break;
                        default:
                          e.vertexAttrib1fv(i.location, n);
                      }
                  }
                }
              }
              v();
            })(r, l, d, y),
            null !== _ && e.bindBuffer(34963, n.get(_).buffer));
      },
      reset: y,
      resetDefaultState: _,
      dispose: function () {
        y();
        for (const e in o) {
          const t = o[e];
          for (const e in t) {
            const n = t[e];
            for (const e in n) d(n[e].object), delete n[e];
            delete t[e];
          }
          delete o[e];
        }
      },
      releaseStatesOfGeometry: function (e) {
        if (void 0 === o[e.id]) return;
        const t = o[e.id];
        for (const e in t) {
          const n = t[e];
          for (const e in n) d(n[e].object), delete n[e];
          delete t[e];
        }
        delete o[e.id];
      },
      releaseStatesOfProgram: function (e) {
        for (const t in o) {
          const n = o[t];
          if (void 0 === n[e.id]) continue;
          const i = n[e.id];
          for (const e in i) d(i[e].object), delete i[e];
          delete n[e.id];
        }
      },
      initAttributes: f,
      enableAttribute: m,
      disableUnusedAttributes: v,
    };
  }
  function Yn(e, t, n, i) {
    const r = i.isWebGL2;
    let s;
    (this.setMode = function (e) {
      s = e;
    }),
      (this.render = function (t, i) {
        e.drawArrays(s, t, i), n.update(i, s, 1);
      }),
      (this.renderInstances = function (i, a, o) {
        if (0 === o) return;
        let l, c;
        if (r) (l = e), (c = "drawArraysInstanced");
        else if (
          ((l = t.get("ANGLE_instanced_arrays")),
          (c = "drawArraysInstancedANGLE"),
          null === l)
        )
          return void console.error(
            "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        l[c](s, i, a, o), n.update(a, s, o);
      });
  }
  function Jn(e, t, n) {
    let i;
    function r(t) {
      if ("highp" === t) {
        if (
          e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
          e.getShaderPrecisionFormat(35632, 36338).precision > 0
        )
          return "highp";
        t = "mediump";
      }
      return "mediump" === t &&
        e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36337).precision > 0
        ? "mediump"
        : "lowp";
    }
    const s =
      ("undefined" != typeof WebGL2RenderingContext &&
        e instanceof WebGL2RenderingContext) ||
      ("undefined" != typeof WebGL2ComputeRenderingContext &&
        e instanceof WebGL2ComputeRenderingContext);
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = r(a);
    o !== a &&
      (console.warn(
        "THREE.WebGLRenderer:",
        a,
        "not supported, using",
        o,
        "instead."
      ),
      (a = o));
    const l = s || t.has("WEBGL_draw_buffers"),
      c = !0 === n.logarithmicDepthBuffer,
      h = e.getParameter(34930),
      u = e.getParameter(35660),
      d = e.getParameter(3379),
      p = e.getParameter(34076),
      f = e.getParameter(34921),
      m = e.getParameter(36347),
      g = e.getParameter(36348),
      v = e.getParameter(36349),
      x = u > 0,
      y = s || t.has("OES_texture_float");
    return {
      isWebGL2: s,
      drawBuffers: l,
      getMaxAnisotropy: function () {
        if (void 0 !== i) return i;
        if (!0 === t.has("EXT_texture_filter_anisotropic")) {
          const n = t.get("EXT_texture_filter_anisotropic");
          i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;
        return i;
      },
      getMaxPrecision: r,
      precision: a,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: u,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: f,
      maxVertexUniforms: m,
      maxVaryings: g,
      maxFragmentUniforms: v,
      vertexTextures: x,
      floatFragmentTextures: y,
      floatVertexTextures: x && y,
      maxSamples: s ? e.getParameter(36183) : 0,
    };
  }
  function Zn(e) {
    const t = this;
    let n = null,
      i = 0,
      r = !1,
      s = !1;
    const a = new zn(),
      o = new ee(),
      l = { value: null, needsUpdate: !1 };
    function c() {
      l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
        (t.numPlanes = i),
        (t.numIntersection = 0);
    }
    function h(e, n, i, r) {
      const s = null !== e ? e.length : 0;
      let c = null;
      if (0 !== s) {
        if (((c = l.value), !0 !== r || null === c)) {
          const t = i + 4 * s,
            r = n.matrixWorldInverse;
          o.getNormalMatrix(r),
            (null === c || c.length < t) && (c = new Float32Array(t));
          for (let t = 0, n = i; t !== s; ++t, n += 4)
            a.copy(e[t]).applyMatrix4(r, o),
              a.normal.toArray(c, n),
              (c[n + 3] = a.constant);
        }
        (l.value = c), (l.needsUpdate = !0);
      }
      return (t.numPlanes = s), (t.numIntersection = 0), c;
    }
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (e, t, s) {
        const a = 0 !== e.length || t || 0 !== i || r;
        return (r = t), (n = h(e, s, 0)), (i = e.length), a;
      }),
      (this.beginShadows = function () {
        (s = !0), h(null);
      }),
      (this.endShadows = function () {
        (s = !1), c();
      }),
      (this.setState = function (t, a, o) {
        const u = t.clippingPlanes,
          d = t.clipIntersection,
          p = t.clipShadows,
          f = e.get(t);
        if (!r || null === u || 0 === u.length || (s && !p)) s ? h(null) : c();
        else {
          const e = s ? 0 : i,
            t = 4 * e;
          let r = f.clippingState || null;
          (l.value = r), (r = h(u, a, t, o));
          for (let e = 0; e !== t; ++e) r[e] = n[e];
          (f.clippingState = r),
            (this.numIntersection = d ? this.numPlanes : 0),
            (this.numPlanes += e);
        }
      });
  }
  function Kn(e) {
    let i = new WeakMap();
    function r(e, i) {
      return 303 === i ? (e.mapping = t) : 304 === i && (e.mapping = n), e;
    }
    function s(e) {
      const t = e.target;
      t.removeEventListener("dispose", s);
      const n = i.get(t);
      void 0 !== n && (i.delete(t), n.dispose());
    }
    return {
      get: function (t) {
        if (t && t.isTexture && !1 === t.isRenderTargetTexture) {
          const n = t.mapping;
          if (303 === n || 304 === n) {
            if (i.has(t)) return r(i.get(t).texture, t.mapping);
            {
              const n = t.image;
              if (n && n.height > 0) {
                const a = new Dn(n.height / 2);
                return (
                  a.fromEquirectangularTexture(e, t),
                  i.set(t, a),
                  t.addEventListener("dispose", s),
                  r(a.texture, t.mapping)
                );
              }
              return null;
            }
          }
        }
        return t;
      },
      dispose: function () {
        i = new WeakMap();
      },
    };
  }
  jn.physical = {
    uniforms: Sn([
      jn.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatNormalScale: { value: new $(1, 1) },
        clearcoatNormalMap: { value: null },
        sheen: { value: 0 },
        sheenColor: { value: new pe(0) },
        sheenColorMap: { value: null },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionSamplerSize: { value: new $() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new pe(0) },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularColor: { value: new pe(1, 1, 1) },
        specularColorMap: { value: null },
      },
    ]),
    vertexShader: Vn.meshphysical_vert,
    fragmentShader: Vn.meshphysical_frag,
  };
  class Qn extends An {
    constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
      super(),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = e),
        (this.right = t),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = s),
        this.updateProjectionMatrix();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.near = e.near),
        (this.far = e.far),
        (this.zoom = e.zoom),
        (this.view = null === e.view ? null : Object.assign({}, e.view)),
        this
      );
    }
    setViewOffset(e, t, n, i, r, s) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = s),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let r = n - e,
        s = n + e,
        a = i + t,
        o = i - t;
      if (null !== this.view && this.view.enabled) {
        const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
          t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += e * this.view.offsetX),
          (s = r + e * this.view.width),
          (a -= t * this.view.offsetY),
          (o = a - t * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.zoom = this.zoom),
        (t.object.left = this.left),
        (t.object.right = this.right),
        (t.object.top = this.top),
        (t.object.bottom = this.bottom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t
      );
    }
  }
  Qn.prototype.isOrthographicCamera = !0;
  const $n = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    ei = new Qn(),
    ti = new pe();
  let ni = null;
  const ii = (1 + Math.sqrt(5)) / 2,
    ri = 1 / ii,
    si = [
      new Te(1, 1, 1),
      new Te(-1, 1, 1),
      new Te(1, 1, -1),
      new Te(-1, 1, -1),
      new Te(0, ii, ri),
      new Te(0, ii, -ri),
      new Te(ri, 0, ii),
      new Te(-ri, 0, ii),
      new Te(ii, ri, 0),
      new Te(-ii, ri, 0),
    ];
  class ai {
    constructor(e) {
      (this._renderer = e),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._lodPlanes = []),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._blurMaterial = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
      (ni = this._renderer.getRenderTarget()), this._setSize(256);
      const r = this._allocateTargets();
      return (
        (r.depthBuffer = !0),
        this._sceneToCubeUV(e, n, i, r),
        t > 0 && this._blur(r, 0, 0, t),
        this._applyPMREM(r),
        this._cleanup(r),
        r
      );
    }
    fromEquirectangular(e, t = null) {
      return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
      return this._fromTexture(e, t);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial &&
        ((this._cubemapMaterial = hi()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial &&
        ((this._equirectMaterial = ci()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(),
        null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
        null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(e) {
      (this._lodMax = Math.floor(Math.log2(e))),
        (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(),
        null !== this._pingPongRenderTarget &&
          this._pingPongRenderTarget.dispose();
      for (let e = 0; e < this._lodPlanes.length; e++)
        this._lodPlanes[e].dispose();
    }
    _cleanup(e) {
      this._renderer.setRenderTarget(ni),
        (e.scissorTest = !1),
        li(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, i) {
      e.mapping === t || e.mapping === n
        ? this._setSize(
            0 === e.image.length
              ? 16
              : e.image[0].width || e.image[0].image.width
          )
        : this._setSize(e.image.width / 4),
        (ni = this._renderer.getRenderTarget());
      const r = i || this._allocateTargets();
      return (
        this._textureToCubeUV(e, r), this._applyPMREM(r), this._cleanup(r), r
      );
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112),
        t = 4 * this._cubeSize,
        n = {
          magFilter: h,
          minFilter: h,
          generateMipmaps: !1,
          type: g,
          format: x,
          encoding: P,
          depthBuffer: !1,
        },
        i = oi(e, t, n);
      if (
        null === this._pingPongRenderTarget ||
        this._pingPongRenderTarget.width !== e
      ) {
        null !== this._pingPongRenderTarget && this._dispose(),
          (this._pingPongRenderTarget = oi(e, t, n));
        const { _lodMax: i } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas,
        } = (function (e) {
          const t = [],
            n = [],
            i = [];
          let r = e;
          const s = e - 4 + 1 + $n.length;
          for (let a = 0; a < s; a++) {
            const s = Math.pow(2, r);
            n.push(s);
            let o = 1 / s;
            a > e - 4 ? (o = $n[a - e + 4 - 1]) : 0 === a && (o = 0), i.push(o);
            const l = 1 / (s - 2),
              c = -l,
              h = 1 + l,
              u = [c, c, h, c, h, h, c, c, h, h, c, h],
              d = 6,
              p = 6,
              f = 3,
              m = 2,
              g = 1,
              v = new Float32Array(f * p * d),
              x = new Float32Array(m * p * d),
              y = new Float32Array(g * p * d);
            for (let e = 0; e < d; e++) {
              const t = ((e % 3) * 2) / 3 - 1,
                n = e > 2 ? 0 : -1,
                i = [
                  t,
                  n,
                  0,
                  t + 2 / 3,
                  n,
                  0,
                  t + 2 / 3,
                  n + 1,
                  0,
                  t,
                  n,
                  0,
                  t + 2 / 3,
                  n + 1,
                  0,
                  t,
                  n + 1,
                  0,
                ];
              v.set(i, f * p * e), x.set(u, m * p * e);
              const r = [e, e, e, e, e, e];
              y.set(r, g * p * e);
            }
            const _ = new tn();
            _.setAttribute("position", new Wt(v, f)),
              _.setAttribute("uv", new Wt(x, m)),
              _.setAttribute("faceIndex", new Wt(y, g)),
              t.push(_),
              r > 4 && r--;
          }
          return { lodPlanes: t, sizeLods: n, sigmas: i };
        })(i)),
          (this._blurMaterial = (function (e, t, n) {
            const i = new Float32Array(20),
              r = new Te(0, 1, 0);
            return new En({
              name: "SphericalGaussianBlur",
              defines: {
                n: 20,
                CUBEUV_TEXEL_WIDTH: 1 / t,
                CUBEUV_TEXEL_HEIGHT: 1 / n,
                CUBEUV_MAX_MIP: `${e}.0`,
              },
              uniforms: {
                envMap: { value: null },
                samples: { value: 1 },
                weights: { value: i },
                latitudinal: { value: !1 },
                dTheta: { value: 0 },
                mipInt: { value: 0 },
                poleAxis: { value: r },
              },
              vertexShader:
                "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
              fragmentShader:
                "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
              blending: 0,
              depthTest: !1,
              depthWrite: !1,
            });
          })(i, e, t));
      }
      return i;
    }
    _compileMaterial(e) {
      const t = new _n(this._lodPlanes[0], e);
      this._renderer.compile(t, ei);
    }
    _sceneToCubeUV(e, t, n, i) {
      const r = new Rn(90, 1, t, n),
        s = [1, -1, 1, 1, 1, 1],
        a = [1, 1, 1, -1, -1, -1],
        o = this._renderer,
        l = o.autoClear,
        c = o.toneMapping;
      o.getClearColor(ti), (o.toneMapping = 0), (o.autoClear = !1);
      const h = new kt({
          name: "PMREM.Background",
          side: 1,
          depthWrite: !1,
          depthTest: !1,
        }),
        u = new _n(new wn(), h);
      let d = !1;
      const p = e.background;
      p
        ? p.isColor && (h.color.copy(p), (e.background = null), (d = !0))
        : (h.color.copy(ti), (d = !0));
      for (let t = 0; t < 6; t++) {
        const n = t % 3;
        0 === n
          ? (r.up.set(0, s[t], 0), r.lookAt(a[t], 0, 0))
          : 1 === n
          ? (r.up.set(0, 0, s[t]), r.lookAt(0, a[t], 0))
          : (r.up.set(0, s[t], 0), r.lookAt(0, 0, a[t]));
        const l = this._cubeSize;
        li(i, n * l, t > 2 ? l : 0, l, l),
          o.setRenderTarget(i),
          d && o.render(u, r),
          o.render(e, r);
      }
      u.geometry.dispose(),
        u.material.dispose(),
        (o.toneMapping = c),
        (o.autoClear = l),
        (e.background = p);
    }
    _textureToCubeUV(e, i) {
      const r = this._renderer,
        s = e.mapping === t || e.mapping === n;
      s
        ? (null === this._cubemapMaterial && (this._cubemapMaterial = hi()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            !1 === e.isRenderTargetTexture ? -1 : 1))
        : null === this._equirectMaterial && (this._equirectMaterial = ci());
      const a = s ? this._cubemapMaterial : this._equirectMaterial,
        o = new _n(this._lodPlanes[0], a);
      a.uniforms.envMap.value = e;
      const l = this._cubeSize;
      li(i, 0, 0, 3 * l, 2 * l), r.setRenderTarget(i), r.render(o, ei);
    }
    _applyPMREM(e) {
      const t = this._renderer,
        n = t.autoClear;
      t.autoClear = !1;
      for (let t = 1; t < this._lodPlanes.length; t++) {
        const n = Math.sqrt(
            this._sigmas[t] * this._sigmas[t] -
              this._sigmas[t - 1] * this._sigmas[t - 1]
          ),
          i = si[(t - 1) % si.length];
        this._blur(e, t - 1, t, n, i);
      }
      t.autoClear = n;
    }
    _blur(e, t, n, i, r) {
      const s = this._pingPongRenderTarget;
      this._halfBlur(e, s, t, n, i, "latitudinal", r),
        this._halfBlur(s, e, n, n, i, "longitudinal", r);
    }
    _halfBlur(e, t, n, i, r, s, a) {
      const o = this._renderer,
        l = this._blurMaterial;
      "latitudinal" !== s &&
        "longitudinal" !== s &&
        console.error(
          "blur direction must be either latitudinal or longitudinal!"
        );
      const c = new _n(this._lodPlanes[i], l),
        h = l.uniforms,
        u = this._sizeLods[n] - 1,
        d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
        p = r / d,
        f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
      f > 20 &&
        console.warn(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
        );
      const m = [];
      let g = 0;
      for (let e = 0; e < 20; ++e) {
        const t = e / p,
          n = Math.exp((-t * t) / 2);
        m.push(n), 0 === e ? (g += n) : e < f && (g += 2 * n);
      }
      for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
      (h.envMap.value = e.texture),
        (h.samples.value = f),
        (h.weights.value = m),
        (h.latitudinal.value = "latitudinal" === s),
        a && (h.poleAxis.value = a);
      const { _lodMax: v } = this;
      (h.dTheta.value = d), (h.mipInt.value = v - n);
      const x = this._sizeLods[i];
      li(
        t,
        3 * x * (i > v - 4 ? i - v + 4 : 0),
        4 * (this._cubeSize - x),
        3 * x,
        2 * x
      ),
        o.setRenderTarget(t),
        o.render(c, ei);
    }
  }
  function oi(e, t, n) {
    const r = new be(e, t, n);
    return (
      (r.texture.mapping = i),
      (r.texture.name = "PMREM.cubeUv"),
      (r.scissorTest = !0),
      r
    );
  }
  function li(e, t, n, i, r) {
    e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r);
  }
  function ci() {
    return new En({
      name: "EquirectangularToCubeUV",
      uniforms: { envMap: { value: null } },
      vertexShader:
        "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function hi() {
    return new En({
      name: "CubemapToCubeUV",
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader:
        "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function ui(e) {
    let i = new WeakMap(),
      r = null;
    function s(e) {
      const t = e.target;
      t.removeEventListener("dispose", s);
      const n = i.get(t);
      void 0 !== n && (i.delete(t), n.dispose());
    }
    return {
      get: function (a) {
        if (a && a.isTexture) {
          const o = a.mapping,
            l = 303 === o || 304 === o,
            c = o === t || o === n;
          if (l || c) {
            if (a.isRenderTargetTexture && !0 === a.needsPMREMUpdate) {
              a.needsPMREMUpdate = !1;
              let t = i.get(a);
              return (
                null === r && (r = new ai(e)),
                (t = l ? r.fromEquirectangular(a, t) : r.fromCubemap(a, t)),
                i.set(a, t),
                t.texture
              );
            }
            if (i.has(a)) return i.get(a).texture;
            {
              const t = a.image;
              if (
                (l && t && t.height > 0) ||
                (c &&
                  t &&
                  (function (e) {
                    let t = 0;
                    for (let n = 0; n < 6; n++) void 0 !== e[n] && t++;
                    return 6 === t;
                  })(t))
              ) {
                null === r && (r = new ai(e));
                const t = l ? r.fromEquirectangular(a) : r.fromCubemap(a);
                return i.set(a, t), a.addEventListener("dispose", s), t.texture;
              }
              return null;
            }
          }
        }
        return a;
      },
      dispose: function () {
        (i = new WeakMap()), null !== r && (r.dispose(), (r = null));
      },
    };
  }
  function di(e) {
    const t = {};
    function n(n) {
      if (void 0 !== t[n]) return t[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i =
            e.getExtension("WEBGL_depth_texture") ||
            e.getExtension("MOZ_WEBGL_depth_texture") ||
            e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i =
            e.getExtension("EXT_texture_filter_anisotropic") ||
            e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i =
            e.getExtension("WEBGL_compressed_texture_s3tc") ||
            e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i =
            e.getExtension("WEBGL_compressed_texture_pvrtc") ||
            e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = e.getExtension(n);
      }
      return (t[n] = i), i;
    }
    return {
      has: function (e) {
        return null !== n(e);
      },
      init: function (e) {
        e.isWebGL2
          ? n("EXT_color_buffer_float")
          : (n("WEBGL_depth_texture"),
            n("OES_texture_float"),
            n("OES_texture_half_float"),
            n("OES_texture_half_float_linear"),
            n("OES_standard_derivatives"),
            n("OES_element_index_uint"),
            n("OES_vertex_array_object"),
            n("ANGLE_instanced_arrays")),
          n("OES_texture_float_linear"),
          n("EXT_color_buffer_half_float"),
          n("WEBGL_multisampled_render_to_texture");
      },
      get: function (e) {
        const t = n(e);
        return (
          null === t &&
            console.warn(
              "THREE.WebGLRenderer: " + e + " extension not supported."
            ),
          t
        );
      },
    };
  }
  function pi(e, t, n, i) {
    const r = {},
      s = new WeakMap();
    function a(e) {
      const o = e.target;
      null !== o.index && t.remove(o.index);
      for (const e in o.attributes) t.remove(o.attributes[e]);
      o.removeEventListener("dispose", a), delete r[o.id];
      const l = s.get(o);
      l && (t.remove(l), s.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--;
    }
    function o(e) {
      const n = [],
        i = e.index,
        r = e.attributes.position;
      let a = 0;
      if (null !== i) {
        const e = i.array;
        a = i.version;
        for (let t = 0, i = e.length; t < i; t += 3) {
          const i = e[t + 0],
            r = e[t + 1],
            s = e[t + 2];
          n.push(i, r, r, s, s, i);
        }
      } else {
        const e = r.array;
        a = r.version;
        for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
          const e = t + 0,
            i = t + 1,
            r = t + 2;
          n.push(e, i, i, r, r, e);
        }
      }
      const o = new (te(n) ? qt : jt)(n, 1);
      o.version = a;
      const l = s.get(e);
      l && t.remove(l), s.set(e, o);
    }
    return {
      get: function (e, t) {
        return (
          !0 === r[t.id] ||
            (t.addEventListener("dispose", a),
            (r[t.id] = !0),
            n.memory.geometries++),
          t
        );
      },
      update: function (e) {
        const n = e.attributes;
        for (const e in n) t.update(n[e], 34962);
        const i = e.morphAttributes;
        for (const e in i) {
          const n = i[e];
          for (let e = 0, i = n.length; e < i; e++) t.update(n[e], 34962);
        }
      },
      getWireframeAttribute: function (e) {
        const t = s.get(e);
        if (t) {
          const n = e.index;
          null !== n && t.version < n.version && o(e);
        } else o(e);
        return s.get(e);
      },
    };
  }
  function fi(e, t, n, i) {
    const r = i.isWebGL2;
    let s, a, o;
    (this.setMode = function (e) {
      s = e;
    }),
      (this.setIndex = function (e) {
        (a = e.type), (o = e.bytesPerElement);
      }),
      (this.render = function (t, i) {
        e.drawElements(s, i, a, t * o), n.update(i, s, 1);
      }),
      (this.renderInstances = function (i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) (h = e), (u = "drawElementsInstanced");
        else if (
          ((h = t.get("ANGLE_instanced_arrays")),
          (u = "drawElementsInstancedANGLE"),
          null === h)
        )
          return void console.error(
            "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        h[u](s, l, a, i * o, c), n.update(l, s, c);
      });
  }
  function mi(e) {
    const t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: t,
      programs: null,
      autoReset: !0,
      reset: function () {
        t.frame++,
          (t.calls = 0),
          (t.triangles = 0),
          (t.points = 0),
          (t.lines = 0);
      },
      update: function (e, n, i) {
        switch ((t.calls++, n)) {
          case 4:
            t.triangles += i * (e / 3);
            break;
          case 1:
            t.lines += i * (e / 2);
            break;
          case 3:
            t.lines += i * (e - 1);
            break;
          case 2:
            t.lines += i * e;
            break;
          case 0:
            t.points += i * e;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      },
    };
  }
  function gi(e, t) {
    return e[0] - t[0];
  }
  function vi(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1]);
  }
  function xi(e, t) {
    let n = 1;
    const i = t.isInterleavedBufferAttribute ? t.data.array : t.array;
    i instanceof Int8Array
      ? (n = 127)
      : i instanceof Int16Array
      ? (n = 32767)
      : i instanceof Int32Array
      ? (n = 2147483647)
      : console.error(
          "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
          i
        ),
      e.divideScalar(n);
  }
  function yi(e, t, n) {
    const i = {},
      r = new Float32Array(8),
      s = new WeakMap(),
      a = new _e(),
      o = [];
    for (let e = 0; e < 8; e++) o[e] = [e, 0];
    return {
      update: function (l, c, h, u) {
        const d = l.morphTargetInfluences;
        if (!0 === t.isWebGL2) {
          const p =
              c.morphAttributes.position ||
              c.morphAttributes.normal ||
              c.morphAttributes.color,
            f = void 0 !== p ? p.length : 0;
          let g = s.get(c);
          if (void 0 === g || g.count !== f) {
            void 0 !== g && g.texture.dispose();
            const y = void 0 !== c.morphAttributes.position,
              _ = void 0 !== c.morphAttributes.normal,
              b = void 0 !== c.morphAttributes.color,
              w = c.morphAttributes.position || [],
              M = c.morphAttributes.normal || [],
              S = c.morphAttributes.color || [];
            let T = 0;
            !0 === y && (T = 1), !0 === _ && (T = 2), !0 === b && (T = 3);
            let E = c.attributes.position.count * T,
              A = 1;
            E > t.maxTextureSize &&
              ((A = Math.ceil(E / t.maxTextureSize)), (E = t.maxTextureSize));
            const R = new Float32Array(E * A * 4 * f),
              L = new we(R, E, A, f);
            (L.type = m), (L.needsUpdate = !0);
            const C = 4 * T;
            for (let D = 0; D < f; D++) {
              const I = w[D],
                N = M[D],
                O = S[D],
                z = E * A * 4 * D;
              for (let U = 0; U < I.count; U++) {
                const B = U * C;
                !0 === y &&
                  (a.fromBufferAttribute(I, U),
                  !0 === I.normalized && xi(a, I),
                  (R[z + B + 0] = a.x),
                  (R[z + B + 1] = a.y),
                  (R[z + B + 2] = a.z),
                  (R[z + B + 3] = 0)),
                  !0 === _ &&
                    (a.fromBufferAttribute(N, U),
                    !0 === N.normalized && xi(a, N),
                    (R[z + B + 4] = a.x),
                    (R[z + B + 5] = a.y),
                    (R[z + B + 6] = a.z),
                    (R[z + B + 7] = 0)),
                  !0 === b &&
                    (a.fromBufferAttribute(O, U),
                    !0 === O.normalized && xi(a, O),
                    (R[z + B + 8] = a.x),
                    (R[z + B + 9] = a.y),
                    (R[z + B + 10] = a.z),
                    (R[z + B + 11] = 4 === O.itemSize ? a.w : 1));
              }
            }
            function P() {
              L.dispose(), s.delete(c), c.removeEventListener("dispose", P);
            }
            (g = { count: f, texture: L, size: new $(E, A) }),
              s.set(c, g),
              c.addEventListener("dispose", P);
          }
          let v = 0;
          for (let F = 0; F < d.length; F++) v += d[F];
          const x = c.morphTargetsRelative ? 1 : 1 - v;
          u.getUniforms().setValue(e, "morphTargetBaseInfluence", x),
            u.getUniforms().setValue(e, "morphTargetInfluences", d),
            u.getUniforms().setValue(e, "morphTargetsTexture", g.texture, n),
            u.getUniforms().setValue(e, "morphTargetsTextureSize", g.size);
        } else {
          const H = void 0 === d ? 0 : d.length;
          let k = i[c.id];
          if (void 0 === k || k.length !== H) {
            k = [];
            for (let q = 0; q < H; q++) k[q] = [q, 0];
            i[c.id] = k;
          }
          for (let X = 0; X < H; X++) {
            const Y = k[X];
            (Y[0] = X), (Y[1] = d[X]);
          }
          k.sort(vi);
          for (let J = 0; J < 8; J++)
            J < H && k[J][1]
              ? ((o[J][0] = k[J][0]), (o[J][1] = k[J][1]))
              : ((o[J][0] = Number.MAX_SAFE_INTEGER), (o[J][1] = 0));
          o.sort(gi);
          const G = c.morphAttributes.position,
            V = c.morphAttributes.normal;
          let W = 0;
          for (let Z = 0; Z < 8; Z++) {
            const K = o[Z],
              Q = K[0],
              ee = K[1];
            Q !== Number.MAX_SAFE_INTEGER && ee
              ? (G &&
                  c.getAttribute("morphTarget" + Z) !== G[Q] &&
                  c.setAttribute("morphTarget" + Z, G[Q]),
                V &&
                  c.getAttribute("morphNormal" + Z) !== V[Q] &&
                  c.setAttribute("morphNormal" + Z, V[Q]),
                (r[Z] = ee),
                (W += ee))
              : (G &&
                  !0 === c.hasAttribute("morphTarget" + Z) &&
                  c.deleteAttribute("morphTarget" + Z),
                V &&
                  !0 === c.hasAttribute("morphNormal" + Z) &&
                  c.deleteAttribute("morphNormal" + Z),
                (r[Z] = 0));
          }
          const j = c.morphTargetsRelative ? 1 : 1 - W;
          u.getUniforms().setValue(e, "morphTargetBaseInfluence", j),
            u.getUniforms().setValue(e, "morphTargetInfluences", r);
        }
      },
    };
  }
  function _i(e, t, n, i) {
    let r = new WeakMap();
    function s(e) {
      const t = e.target;
      t.removeEventListener("dispose", s),
        n.remove(t.instanceMatrix),
        null !== t.instanceColor && n.remove(t.instanceColor);
    }
    return {
      update: function (e) {
        const a = i.render.frame,
          o = e.geometry,
          l = t.get(e, o);
        return (
          r.get(l) !== a && (t.update(l), r.set(l, a)),
          e.isInstancedMesh &&
            (!1 === e.hasEventListener("dispose", s) &&
              e.addEventListener("dispose", s),
            n.update(e.instanceMatrix, 34962),
            null !== e.instanceColor && n.update(e.instanceColor, 34962)),
          l
        );
      },
      dispose: function () {
        r = new WeakMap();
      },
    };
  }
  const bi = new ye(),
    wi = new we(),
    Mi = new Me(),
    Si = new Pn(),
    Ti = [],
    Ei = [],
    Ai = new Float32Array(16),
    Ri = new Float32Array(9),
    Li = new Float32Array(4);
  function Ci(e, t, n) {
    const i = e[0];
    if (i <= 0 || i > 0) return e;
    const r = t * n;
    let s = Ti[r];
    if ((void 0 === s && ((s = new Float32Array(r)), (Ti[r] = s)), 0 !== t)) {
      i.toArray(s, 0);
      for (let i = 1, r = 0; i !== t; ++i) (r += n), e[i].toArray(s, r);
    }
    return s;
  }
  function Pi(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0, i = e.length; n < i; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  function Di(e, t) {
    for (let n = 0, i = t.length; n < i; n++) e[n] = t[n];
  }
  function Ii(e, t) {
    let n = Ei[t];
    void 0 === n && ((n = new Int32Array(t)), (Ei[t] = n));
    for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
    return n;
  }
  function Ni(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
  }
  function Oi(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y) ||
        (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
    else {
      if (Pi(n, t)) return;
      e.uniform2fv(this.addr, t), Di(n, t);
    }
  }
  function zi(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z) ||
        (e.uniform3f(this.addr, t.x, t.y, t.z),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z));
    else if (void 0 !== t.r)
      (n[0] === t.r && n[1] === t.g && n[2] === t.b) ||
        (e.uniform3f(this.addr, t.r, t.g, t.b),
        (n[0] = t.r),
        (n[1] = t.g),
        (n[2] = t.b));
    else {
      if (Pi(n, t)) return;
      e.uniform3fv(this.addr, t), Di(n, t);
    }
  }
  function Ui(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
      (n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w) ||
        (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        (n[0] = t.x),
        (n[1] = t.y),
        (n[2] = t.z),
        (n[3] = t.w));
    else {
      if (Pi(n, t)) return;
      e.uniform4fv(this.addr, t), Di(n, t);
    }
  }
  function Bi(e, t) {
    const n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (Pi(n, t)) return;
      e.uniformMatrix2fv(this.addr, !1, t), Di(n, t);
    } else {
      if (Pi(n, i)) return;
      Li.set(i), e.uniformMatrix2fv(this.addr, !1, Li), Di(n, i);
    }
  }
  function Fi(e, t) {
    const n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (Pi(n, t)) return;
      e.uniformMatrix3fv(this.addr, !1, t), Di(n, t);
    } else {
      if (Pi(n, i)) return;
      Ri.set(i), e.uniformMatrix3fv(this.addr, !1, Ri), Di(n, i);
    }
  }
  function Hi(e, t) {
    const n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (Pi(n, t)) return;
      e.uniformMatrix4fv(this.addr, !1, t), Di(n, t);
    } else {
      if (Pi(n, i)) return;
      Ai.set(i), e.uniformMatrix4fv(this.addr, !1, Ai), Di(n, i);
    }
  }
  function ki(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
  }
  function Gi(e, t) {
    const n = this.cache;
    Pi(n, t) || (e.uniform2iv(this.addr, t), Di(n, t));
  }
  function Vi(e, t) {
    const n = this.cache;
    Pi(n, t) || (e.uniform3iv(this.addr, t), Di(n, t));
  }
  function Wi(e, t) {
    const n = this.cache;
    Pi(n, t) || (e.uniform4iv(this.addr, t), Di(n, t));
  }
  function ji(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t));
  }
  function qi(e, t) {
    const n = this.cache;
    Pi(n, t) || (e.uniform2uiv(this.addr, t), Di(n, t));
  }
  function Xi(e, t) {
    const n = this.cache;
    Pi(n, t) || (e.uniform3uiv(this.addr, t), Di(n, t));
  }
  function Yi(e, t) {
    const n = this.cache;
    Pi(n, t) || (e.uniform4uiv(this.addr, t), Di(n, t));
  }
  function Ji(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2D(t || bi, r);
  }
  function Zi(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture3D(t || Mi, r);
  }
  function Ki(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTextureCube(t || Si, r);
  }
  function Qi(e, t, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2DArray(t || wi, r);
  }
  function $i(e, t) {
    e.uniform1fv(this.addr, t);
  }
  function er(e, t) {
    const n = Ci(t, this.size, 2);
    e.uniform2fv(this.addr, n);
  }
  function tr(e, t) {
    const n = Ci(t, this.size, 3);
    e.uniform3fv(this.addr, n);
  }
  function nr(e, t) {
    const n = Ci(t, this.size, 4);
    e.uniform4fv(this.addr, n);
  }
  function ir(e, t) {
    const n = Ci(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n);
  }
  function rr(e, t) {
    const n = Ci(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n);
  }
  function sr(e, t) {
    const n = Ci(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n);
  }
  function ar(e, t) {
    e.uniform1iv(this.addr, t);
  }
  function or(e, t) {
    e.uniform2iv(this.addr, t);
  }
  function lr(e, t) {
    e.uniform3iv(this.addr, t);
  }
  function cr(e, t) {
    e.uniform4iv(this.addr, t);
  }
  function hr(e, t) {
    e.uniform1uiv(this.addr, t);
  }
  function ur(e, t) {
    e.uniform2uiv(this.addr, t);
  }
  function dr(e, t) {
    e.uniform3uiv(this.addr, t);
  }
  function pr(e, t) {
    e.uniform4uiv(this.addr, t);
  }
  function fr(e, t, n) {
    const i = t.length,
      r = Ii(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || bi, r[e]);
  }
  function mr(e, t, n) {
    const i = t.length,
      r = Ii(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Mi, r[e]);
  }
  function gr(e, t, n) {
    const i = t.length,
      r = Ii(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Si, r[e]);
  }
  function vr(e, t, n) {
    const i = t.length,
      r = Ii(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || wi, r[e]);
  }
  function xr(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return Ni;
          case 35664:
            return Oi;
          case 35665:
            return zi;
          case 35666:
            return Ui;
          case 35674:
            return Bi;
          case 35675:
            return Fi;
          case 35676:
            return Hi;
          case 5124:
          case 35670:
            return ki;
          case 35667:
          case 35671:
            return Gi;
          case 35668:
          case 35672:
            return Vi;
          case 35669:
          case 35673:
            return Wi;
          case 5125:
            return ji;
          case 36294:
            return qi;
          case 36295:
            return Xi;
          case 36296:
            return Yi;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Ji;
          case 35679:
          case 36299:
          case 36307:
            return Zi;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Ki;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Qi;
        }
      })(t.type));
  }
  function yr(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return $i;
          case 35664:
            return er;
          case 35665:
            return tr;
          case 35666:
            return nr;
          case 35674:
            return ir;
          case 35675:
            return rr;
          case 35676:
            return sr;
          case 5124:
          case 35670:
            return ar;
          case 35667:
          case 35671:
            return or;
          case 35668:
          case 35672:
            return lr;
          case 35669:
          case 35673:
            return cr;
          case 5125:
            return hr;
          case 36294:
            return ur;
          case 36295:
            return dr;
          case 36296:
            return pr;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return fr;
          case 35679:
          case 36299:
          case 36307:
            return mr;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return gr;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return vr;
        }
      })(t.type));
  }
  function _r(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  _r.prototype.setValue = function (e, t, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
      const s = i[r];
      s.setValue(e, t[s.id], n);
    }
  };
  const br = /(\w+)(\])?(\[|\.)?/g;
  function wr(e, t) {
    e.seq.push(t), (e.map[t.id] = t);
  }
  function Mr(e, t, n) {
    const i = e.name,
      r = i.length;
    for (br.lastIndex = 0; ; ) {
      const s = br.exec(i),
        a = br.lastIndex;
      let o = s[1];
      const l = "]" === s[2],
        c = s[3];
      if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
        wr(n, void 0 === c ? new xr(o, e, t) : new yr(o, e, t));
        break;
      }
      {
        let e = n.map[o];
        void 0 === e && ((e = new _r(o)), wr(n, e)), (n = e);
      }
    }
  }
  function Sr(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const n = e.getActiveUniform(t, i);
      Mr(n, e.getUniformLocation(t, n.name), this);
    }
  }
  function Tr(e, t, n) {
    const i = e.createShader(t);
    return e.shaderSource(i, n), e.compileShader(i), i;
  }
  (Sr.prototype.setValue = function (e, t, n, i) {
    const r = this.map[t];
    void 0 !== r && r.setValue(e, n, i);
  }),
    (Sr.prototype.setOptional = function (e, t, n) {
      const i = t[n];
      void 0 !== i && this.setValue(e, n, i);
    }),
    (Sr.upload = function (e, t, n, i) {
      for (let r = 0, s = t.length; r !== s; ++r) {
        const s = t[r],
          a = n[s.id];
        !1 !== a.needsUpdate && s.setValue(e, a.value, i);
      }
    }),
    (Sr.seqWithValue = function (e, t) {
      const n = [];
      for (let i = 0, r = e.length; i !== r; ++i) {
        const r = e[i];
        r.id in t && n.push(r);
      }
      return n;
    });
  let Er = 0;
  function Ar(e, t, n) {
    const i = e.getShaderParameter(t, 35713),
      r = e.getShaderInfoLog(t).trim();
    if (i && "" === r) return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
      const i = parseInt(s[0]);
      return (
        n.toUpperCase() +
        "\n\n" +
        r +
        "\n\n" +
        (function (e, t) {
          const n = e.split("\n"),
            i = [],
            r = Math.max(t - 6, 0),
            s = Math.min(t + 6, n.length);
          for (let e = r; e < s; e++) i.push(e + 1 + ": " + n[e]);
          return i.join("\n");
        })(e.getShaderSource(t), i)
      );
    }
    return r;
  }
  function Rr(e, t) {
    const n = (function (e) {
      switch (e) {
        case P:
          return ["Linear", "( value )"];
        case D:
          return ["sRGB", "( value )"];
        default:
          return (
            console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
            ["Linear", "( value )"]
          );
      }
    })(t);
    return (
      "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    );
  }
  function Lr(e, t) {
    let n;
    switch (t) {
      case 1:
        n = "Linear";
        break;
      case 2:
        n = "Reinhard";
        break;
      case 3:
        n = "OptimizedCineon";
        break;
      case 4:
        n = "ACESFilmic";
        break;
      case 5:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
          (n = "Linear");
    }
    return (
      "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    );
  }
  function Cr(e) {
    return "" !== e;
  }
  function Pr(e, t) {
    return e
      .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
      .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
  }
  function Dr(e, t) {
    return e
      .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        t.numClippingPlanes - t.numClipIntersection
      );
  }
  const Ir = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Nr(e) {
    return e.replace(Ir, Or);
  }
  function Or(e, t) {
    const n = Vn[t];
    if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
    return Nr(n);
  }
  const zr =
      /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    Ur =
      /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Br(e) {
    return e.replace(Ur, Hr).replace(zr, Fr);
  }
  function Fr(e, t, n, i) {
    return (
      console.warn(
        "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
      ),
      Hr(0, t, n, i)
    );
  }
  function Hr(e, t, n, i) {
    let r = "";
    for (let e = parseInt(t); e < parseInt(n); e++)
      r += i
        .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, e);
    return r;
  }
  function kr(e) {
    let t =
      "precision " +
      e.precision +
      " float;\nprecision " +
      e.precision +
      " int;";
    return (
      "highp" === e.precision
        ? (t += "\n#define HIGH_PRECISION")
        : "mediump" === e.precision
        ? (t += "\n#define MEDIUM_PRECISION")
        : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
      t
    );
  }
  function Gr(e, r, s, a) {
    const o = e.getContext(),
      l = s.defines;
    let c = s.vertexShader,
      h = s.fragmentShader;
    const u = (function (e) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return (
          1 === e.shadowMapType
            ? (t = "SHADOWMAP_TYPE_PCF")
            : 2 === e.shadowMapType
            ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
            : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"),
          t
        );
      })(s),
      d = (function (e) {
        let r = "ENVMAP_TYPE_CUBE";
        if (e.envMap)
          switch (e.envMapMode) {
            case t:
            case n:
              r = "ENVMAP_TYPE_CUBE";
              break;
            case i:
              r = "ENVMAP_TYPE_CUBE_UV";
          }
        return r;
      })(s),
      p = (function (e) {
        let t = "ENVMAP_MODE_REFLECTION";
        return (
          e.envMap && e.envMapMode === n && (t = "ENVMAP_MODE_REFRACTION"), t
        );
      })(s),
      f = (function (e) {
        let t = "ENVMAP_BLENDING_NONE";
        if (e.envMap)
          switch (e.combine) {
            case 0:
              t = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case 1:
              t = "ENVMAP_BLENDING_MIX";
              break;
            case 2:
              t = "ENVMAP_BLENDING_ADD";
          }
        return t;
      })(s),
      m = (function (e) {
        const t = e.envMapCubeUVHeight;
        if (null === t) return null;
        const n = Math.log2(t) - 2,
          i = 1 / t;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
          texelHeight: i,
          maxMip: n,
        };
      })(s),
      g = s.isWebGL2
        ? ""
        : (function (e) {
            return [
              e.extensionDerivatives ||
              e.envMapCubeUVHeight ||
              e.bumpMap ||
              e.tangentSpaceNormalMap ||
              e.clearcoatNormalMap ||
              e.flatShading ||
              "physical" === e.shaderID
                ? "#extension GL_OES_standard_derivatives : enable"
                : "",
              (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
              e.rendererExtensionFragDepth
                ? "#extension GL_EXT_frag_depth : enable"
                : "",
              e.extensionDrawBuffers && e.rendererExtensionDrawBuffers
                ? "#extension GL_EXT_draw_buffers : require"
                : "",
              (e.extensionShaderTextureLOD || e.envMap || e.transmission) &&
              e.rendererExtensionShaderTextureLod
                ? "#extension GL_EXT_shader_texture_lod : enable"
                : "",
            ]
              .filter(Cr)
              .join("\n");
          })(s),
      v = (function (e) {
        const t = [];
        for (const n in e) {
          const i = e[n];
          !1 !== i && t.push("#define " + n + " " + i);
        }
        return t.join("\n");
      })(l),
      x = o.createProgram();
    let y,
      _,
      b = s.glslVersion ? "#version " + s.glslVersion + "\n" : "";
    s.isRawShaderMaterial
      ? ((y = [v].filter(Cr).join("\n")),
        y.length > 0 && (y += "\n"),
        (_ = [g, v].filter(Cr).join("\n")),
        _.length > 0 && (_ += "\n"))
      : ((y = [
          kr(s),
          "#define SHADER_NAME " + s.shaderName,
          v,
          s.instancing ? "#define USE_INSTANCING" : "",
          s.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          s.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
          s.useFog && s.fog ? "#define USE_FOG" : "",
          s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "",
          s.map ? "#define USE_MAP" : "",
          s.envMap ? "#define USE_ENVMAP" : "",
          s.envMap ? "#define " + p : "",
          s.lightMap ? "#define USE_LIGHTMAP" : "",
          s.aoMap ? "#define USE_AOMAP" : "",
          s.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          s.bumpMap ? "#define USE_BUMPMAP" : "",
          s.normalMap ? "#define USE_NORMALMAP" : "",
          s.normalMap && s.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          s.normalMap && s.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          s.displacementMap && s.supportsVertexTextures
            ? "#define USE_DISPLACEMENTMAP"
            : "",
          s.specularMap ? "#define USE_SPECULARMAP" : "",
          s.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
          s.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
          s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          s.metalnessMap ? "#define USE_METALNESSMAP" : "",
          s.alphaMap ? "#define USE_ALPHAMAP" : "",
          s.transmission ? "#define USE_TRANSMISSION" : "",
          s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          s.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          s.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
          s.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
          s.vertexTangents ? "#define USE_TANGENT" : "",
          s.vertexColors ? "#define USE_COLOR" : "",
          s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          s.vertexUvs ? "#define USE_UV" : "",
          s.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          s.flatShading ? "#define FLAT_SHADED" : "",
          s.skinning ? "#define USE_SKINNING" : "",
          s.morphTargets ? "#define USE_MORPHTARGETS" : "",
          s.morphNormals && !1 === s.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          s.morphColors && s.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
          s.morphTargetsCount > 0 && s.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE"
            : "",
          s.morphTargetsCount > 0 && s.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE_STRIDE " + s.morphTextureStride
            : "",
          s.morphTargetsCount > 0 && s.isWebGL2
            ? "#define MORPHTARGETS_COUNT " + s.morphTargetsCount
            : "",
          s.doubleSided ? "#define DOUBLE_SIDED" : "",
          s.flipSided ? "#define FLIP_SIDED" : "",
          s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          s.shadowMapEnabled ? "#define " + u : "",
          s.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          s.logarithmicDepthBuffer && s.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "\tattribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "\tattribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_TANGENT",
          "\tattribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "\tattribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "\tattribute vec3 color;",
          "#endif",
          "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
          "\tattribute vec3 morphTarget0;",
          "\tattribute vec3 morphTarget1;",
          "\tattribute vec3 morphTarget2;",
          "\tattribute vec3 morphTarget3;",
          "\t#ifdef USE_MORPHNORMALS",
          "\t\tattribute vec3 morphNormal0;",
          "\t\tattribute vec3 morphNormal1;",
          "\t\tattribute vec3 morphNormal2;",
          "\t\tattribute vec3 morphNormal3;",
          "\t#else",
          "\t\tattribute vec3 morphTarget4;",
          "\t\tattribute vec3 morphTarget5;",
          "\t\tattribute vec3 morphTarget6;",
          "\t\tattribute vec3 morphTarget7;",
          "\t#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n",
        ]
          .filter(Cr)
          .join("\n")),
        (_ = [
          g,
          kr(s),
          "#define SHADER_NAME " + s.shaderName,
          v,
          s.useFog && s.fog ? "#define USE_FOG" : "",
          s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "",
          s.map ? "#define USE_MAP" : "",
          s.matcap ? "#define USE_MATCAP" : "",
          s.envMap ? "#define USE_ENVMAP" : "",
          s.envMap ? "#define " + d : "",
          s.envMap ? "#define " + p : "",
          s.envMap ? "#define " + f : "",
          m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "",
          m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "",
          m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "",
          s.lightMap ? "#define USE_LIGHTMAP" : "",
          s.aoMap ? "#define USE_AOMAP" : "",
          s.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          s.bumpMap ? "#define USE_BUMPMAP" : "",
          s.normalMap ? "#define USE_NORMALMAP" : "",
          s.normalMap && s.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          s.normalMap && s.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          s.clearcoat ? "#define USE_CLEARCOAT" : "",
          s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          s.specularMap ? "#define USE_SPECULARMAP" : "",
          s.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
          s.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
          s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          s.metalnessMap ? "#define USE_METALNESSMAP" : "",
          s.alphaMap ? "#define USE_ALPHAMAP" : "",
          s.alphaTest ? "#define USE_ALPHATEST" : "",
          s.sheen ? "#define USE_SHEEN" : "",
          s.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
          s.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
          s.transmission ? "#define USE_TRANSMISSION" : "",
          s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          s.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          s.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
          s.vertexTangents ? "#define USE_TANGENT" : "",
          s.vertexColors || s.instancingColor ? "#define USE_COLOR" : "",
          s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          s.vertexUvs ? "#define USE_UV" : "",
          s.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          s.gradientMap ? "#define USE_GRADIENTMAP" : "",
          s.flatShading ? "#define FLAT_SHADED" : "",
          s.doubleSided ? "#define DOUBLE_SIDED" : "",
          s.flipSided ? "#define FLIP_SIDED" : "",
          s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          s.shadowMapEnabled ? "#define " + u : "",
          s.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          s.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
          s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          s.logarithmicDepthBuffer && s.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          0 !== s.toneMapping ? "#define TONE_MAPPING" : "",
          0 !== s.toneMapping ? Vn.tonemapping_pars_fragment : "",
          0 !== s.toneMapping ? Lr("toneMapping", s.toneMapping) : "",
          s.dithering ? "#define DITHERING" : "",
          s.opaque ? "#define OPAQUE" : "",
          Vn.encodings_pars_fragment,
          Rr("linearToOutputTexel", s.outputEncoding),
          s.useDepthPacking ? "#define DEPTH_PACKING " + s.depthPacking : "",
          "\n",
        ]
          .filter(Cr)
          .join("\n"))),
      (c = Nr(c)),
      (c = Pr(c, s)),
      (c = Dr(c, s)),
      (h = Nr(h)),
      (h = Pr(h, s)),
      (h = Dr(h, s)),
      (c = Br(c)),
      (h = Br(h)),
      s.isWebGL2 &&
        !0 !== s.isRawShaderMaterial &&
        ((b = "#version 300 es\n"),
        (y =
          [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture",
          ].join("\n") +
          "\n" +
          y),
        (_ =
          [
            "#define varying in",
            s.glslVersion === B
              ? ""
              : "layout(location = 0) out highp vec4 pc_fragColor;",
            s.glslVersion === B ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad",
          ].join("\n") +
          "\n" +
          _));
    const w = b + _ + h,
      M = Tr(o, 35633, b + y + c),
      S = Tr(o, 35632, w);
    if (
      (o.attachShader(x, M),
      o.attachShader(x, S),
      void 0 !== s.index0AttributeName
        ? o.bindAttribLocation(x, 0, s.index0AttributeName)
        : !0 === s.morphTargets && o.bindAttribLocation(x, 0, "position"),
      o.linkProgram(x),
      e.debug.checkShaderErrors)
    ) {
      const e = o.getProgramInfoLog(x).trim(),
        t = o.getShaderInfoLog(M).trim(),
        n = o.getShaderInfoLog(S).trim();
      let i = !0,
        r = !0;
      if (!1 === o.getProgramParameter(x, 35714)) {
        i = !1;
        const t = Ar(o, M, "vertex"),
          n = Ar(o, S, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            o.getError() +
            " - VALIDATE_STATUS " +
            o.getProgramParameter(x, 35715) +
            "\n\nProgram Info Log: " +
            e +
            "\n" +
            t +
            "\n" +
            n
        );
      } else
        "" !== e
          ? console.warn("THREE.WebGLProgram: Program Info Log:", e)
          : ("" !== t && "" !== n) || (r = !1);
      r &&
        (this.diagnostics = {
          runnable: i,
          programLog: e,
          vertexShader: { log: t, prefix: y },
          fragmentShader: { log: n, prefix: _ },
        });
    }
    let T, E;
    return (
      o.deleteShader(M),
      o.deleteShader(S),
      (this.getUniforms = function () {
        return void 0 === T && (T = new Sr(o, x)), T;
      }),
      (this.getAttributes = function () {
        return (
          void 0 === E &&
            (E = (function (e, t) {
              const n = {},
                i = e.getProgramParameter(t, 35721);
              for (let r = 0; r < i; r++) {
                const i = e.getActiveAttrib(t, r),
                  s = i.name;
                let a = 1;
                35674 === i.type && (a = 2),
                  35675 === i.type && (a = 3),
                  35676 === i.type && (a = 4),
                  (n[s] = {
                    type: i.type,
                    location: e.getAttribLocation(t, s),
                    locationSize: a,
                  });
              }
              return n;
            })(o, x)),
          E
        );
      }),
      (this.destroy = function () {
        a.releaseStatesOfProgram(this),
          o.deleteProgram(x),
          (this.program = void 0);
      }),
      (this.name = s.shaderName),
      (this.id = Er++),
      (this.cacheKey = r),
      (this.usedTimes = 1),
      (this.program = x),
      (this.vertexShader = M),
      (this.fragmentShader = S),
      this
    );
  }
  let Vr = 0;
  class Wr {
    constructor() {
      (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(e) {
      const t = e.vertexShader,
        n = e.fragmentShader,
        i = this._getShaderStage(t),
        r = this._getShaderStage(n),
        s = this._getShaderCacheForMaterial(e);
      return (
        !1 === s.has(i) && (s.add(i), i.usedTimes++),
        !1 === s.has(r) && (s.add(r), r.usedTimes++),
        this
      );
    }
    remove(e) {
      const t = this.materialCache.get(e);
      for (const e of t)
        e.usedTimes--, 0 === e.usedTimes && this.shaderCache.delete(e.code);
      return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
      return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
      return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
      const t = this.materialCache;
      return !1 === t.has(e) && t.set(e, new Set()), t.get(e);
    }
    _getShaderStage(e) {
      const t = this.shaderCache;
      if (!1 === t.has(e)) {
        const n = new jr(e);
        t.set(e, n);
      }
      return t.get(e);
    }
  }
  class jr {
    constructor(e) {
      (this.id = Vr++), (this.code = e), (this.usedTimes = 0);
    }
  }
  function qr(e, t, n, r, s, a, o) {
    const l = new pt(),
      c = new Wr(),
      h = [],
      u = s.isWebGL2,
      d = s.logarithmicDepthBuffer,
      p = s.vertexTextures;
    let f = s.precision;
    const m = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
    return {
      getParameters: function (a, l, h, g, v) {
        const x = g.fog,
          y = v.geometry,
          _ = a.isMeshStandardMaterial ? g.environment : null,
          b = (a.isMeshStandardMaterial ? n : t).get(a.envMap || _),
          w = b && b.mapping === i ? b.image.height : null,
          M = m[a.type];
        null !== a.precision &&
          ((f = s.getMaxPrecision(a.precision)),
          f !== a.precision &&
            console.warn(
              "THREE.WebGLProgram.getParameters:",
              a.precision,
              "not supported, using",
              f,
              "instead."
            ));
        const S =
            y.morphAttributes.position ||
            y.morphAttributes.normal ||
            y.morphAttributes.color,
          T = void 0 !== S ? S.length : 0;
        let E,
          A,
          R,
          L,
          C = 0;
        if (
          (void 0 !== y.morphAttributes.position && (C = 1),
          void 0 !== y.morphAttributes.normal && (C = 2),
          void 0 !== y.morphAttributes.color && (C = 3),
          M)
        ) {
          const e = jn[M];
          (E = e.vertexShader), (A = e.fragmentShader);
        } else
          (E = a.vertexShader),
            (A = a.fragmentShader),
            c.update(a),
            (R = c.getVertexShaderID(a)),
            (L = c.getFragmentShaderID(a));
        const I = e.getRenderTarget(),
          N = a.alphaTest > 0,
          O = a.clearcoat > 0;
        return {
          isWebGL2: u,
          shaderID: M,
          shaderName: a.type,
          vertexShader: E,
          fragmentShader: A,
          defines: a.defines,
          customVertexShaderID: R,
          customFragmentShaderID: L,
          isRawShaderMaterial: !0 === a.isRawShaderMaterial,
          glslVersion: a.glslVersion,
          precision: f,
          instancing: !0 === v.isInstancedMesh,
          instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
          supportsVertexTextures: p,
          outputEncoding:
            null === I
              ? e.outputEncoding
              : !0 === I.isXRRenderTarget
              ? I.texture.encoding
              : P,
          map: !!a.map,
          matcap: !!a.matcap,
          envMap: !!b,
          envMapMode: b && b.mapping,
          envMapCubeUVHeight: w,
          lightMap: !!a.lightMap,
          aoMap: !!a.aoMap,
          emissiveMap: !!a.emissiveMap,
          bumpMap: !!a.bumpMap,
          normalMap: !!a.normalMap,
          objectSpaceNormalMap: 1 === a.normalMapType,
          tangentSpaceNormalMap: 0 === a.normalMapType,
          decodeVideoTexture:
            !!a.map && !0 === a.map.isVideoTexture && a.map.encoding === D,
          clearcoat: O,
          clearcoatMap: O && !!a.clearcoatMap,
          clearcoatRoughnessMap: O && !!a.clearcoatRoughnessMap,
          clearcoatNormalMap: O && !!a.clearcoatNormalMap,
          displacementMap: !!a.displacementMap,
          roughnessMap: !!a.roughnessMap,
          metalnessMap: !!a.metalnessMap,
          specularMap: !!a.specularMap,
          specularIntensityMap: !!a.specularIntensityMap,
          specularColorMap: !!a.specularColorMap,
          opaque: !1 === a.transparent && 1 === a.blending,
          alphaMap: !!a.alphaMap,
          alphaTest: N,
          gradientMap: !!a.gradientMap,
          sheen: a.sheen > 0,
          sheenColorMap: !!a.sheenColorMap,
          sheenRoughnessMap: !!a.sheenRoughnessMap,
          transmission: a.transmission > 0,
          transmissionMap: !!a.transmissionMap,
          thicknessMap: !!a.thicknessMap,
          combine: a.combine,
          vertexTangents: !!a.normalMap && !!y.attributes.tangent,
          vertexColors: a.vertexColors,
          vertexAlphas:
            !0 === a.vertexColors &&
            !!y.attributes.color &&
            4 === y.attributes.color.itemSize,
          vertexUvs: !!(
            a.map ||
            a.bumpMap ||
            a.normalMap ||
            a.specularMap ||
            a.alphaMap ||
            a.emissiveMap ||
            a.roughnessMap ||
            a.metalnessMap ||
            a.clearcoatMap ||
            a.clearcoatRoughnessMap ||
            a.clearcoatNormalMap ||
            a.displacementMap ||
            a.transmissionMap ||
            a.thicknessMap ||
            a.specularIntensityMap ||
            a.specularColorMap ||
            a.sheenColorMap ||
            a.sheenRoughnessMap
          ),
          uvsVertexOnly: !(
            a.map ||
            a.bumpMap ||
            a.normalMap ||
            a.specularMap ||
            a.alphaMap ||
            a.emissiveMap ||
            a.roughnessMap ||
            a.metalnessMap ||
            a.clearcoatNormalMap ||
            a.transmission > 0 ||
            a.transmissionMap ||
            a.thicknessMap ||
            a.specularIntensityMap ||
            a.specularColorMap ||
            a.sheen > 0 ||
            a.sheenColorMap ||
            a.sheenRoughnessMap ||
            !a.displacementMap
          ),
          fog: !!x,
          useFog: !0 === a.fog,
          fogExp2: x && x.isFogExp2,
          flatShading: !!a.flatShading,
          sizeAttenuation: a.sizeAttenuation,
          logarithmicDepthBuffer: d,
          skinning: !0 === v.isSkinnedMesh,
          morphTargets: void 0 !== y.morphAttributes.position,
          morphNormals: void 0 !== y.morphAttributes.normal,
          morphColors: void 0 !== y.morphAttributes.color,
          morphTargetsCount: T,
          morphTextureStride: C,
          numDirLights: l.directional.length,
          numPointLights: l.point.length,
          numSpotLights: l.spot.length,
          numRectAreaLights: l.rectArea.length,
          numHemiLights: l.hemi.length,
          numDirLightShadows: l.directionalShadowMap.length,
          numPointLightShadows: l.pointShadowMap.length,
          numSpotLightShadows: l.spotShadowMap.length,
          numClippingPlanes: o.numPlanes,
          numClipIntersection: o.numIntersection,
          dithering: a.dithering,
          shadowMapEnabled: e.shadowMap.enabled && h.length > 0,
          shadowMapType: e.shadowMap.type,
          toneMapping: a.toneMapped ? e.toneMapping : 0,
          physicallyCorrectLights: e.physicallyCorrectLights,
          premultipliedAlpha: a.premultipliedAlpha,
          doubleSided: 2 === a.side,
          flipSided: 1 === a.side,
          useDepthPacking: !!a.depthPacking,
          depthPacking: a.depthPacking || 0,
          index0AttributeName: a.index0AttributeName,
          extensionDerivatives: a.extensions && a.extensions.derivatives,
          extensionFragDepth: a.extensions && a.extensions.fragDepth,
          extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
          extensionShaderTextureLOD:
            a.extensions && a.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: u || r.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: u || r.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod:
            u || r.has("EXT_shader_texture_lod"),
          customProgramCacheKey: a.customProgramCacheKey(),
        };
      },
      getProgramCacheKey: function (t) {
        const n = [];
        if (
          (t.shaderID
            ? n.push(t.shaderID)
            : (n.push(t.customVertexShaderID),
              n.push(t.customFragmentShaderID)),
          void 0 !== t.defines)
        )
          for (const e in t.defines) n.push(e), n.push(t.defines[e]);
        return (
          !1 === t.isRawShaderMaterial &&
            ((function (e, t) {
              e.push(t.precision),
                e.push(t.outputEncoding),
                e.push(t.envMapMode),
                e.push(t.envMapCubeUVHeight),
                e.push(t.combine),
                e.push(t.vertexUvs),
                e.push(t.fogExp2),
                e.push(t.sizeAttenuation),
                e.push(t.morphTargetsCount),
                e.push(t.morphAttributeCount),
                e.push(t.numDirLights),
                e.push(t.numPointLights),
                e.push(t.numSpotLights),
                e.push(t.numHemiLights),
                e.push(t.numRectAreaLights),
                e.push(t.numDirLightShadows),
                e.push(t.numPointLightShadows),
                e.push(t.numSpotLightShadows),
                e.push(t.shadowMapType),
                e.push(t.toneMapping),
                e.push(t.numClippingPlanes),
                e.push(t.numClipIntersection),
                e.push(t.depthPacking);
            })(n, t),
            (function (e, t) {
              l.disableAll(),
                t.isWebGL2 && l.enable(0),
                t.supportsVertexTextures && l.enable(1),
                t.instancing && l.enable(2),
                t.instancingColor && l.enable(3),
                t.map && l.enable(4),
                t.matcap && l.enable(5),
                t.envMap && l.enable(6),
                t.lightMap && l.enable(7),
                t.aoMap && l.enable(8),
                t.emissiveMap && l.enable(9),
                t.bumpMap && l.enable(10),
                t.normalMap && l.enable(11),
                t.objectSpaceNormalMap && l.enable(12),
                t.tangentSpaceNormalMap && l.enable(13),
                t.clearcoat && l.enable(14),
                t.clearcoatMap && l.enable(15),
                t.clearcoatRoughnessMap && l.enable(16),
                t.clearcoatNormalMap && l.enable(17),
                t.displacementMap && l.enable(18),
                t.specularMap && l.enable(19),
                t.roughnessMap && l.enable(20),
                t.metalnessMap && l.enable(21),
                t.gradientMap && l.enable(22),
                t.alphaMap && l.enable(23),
                t.alphaTest && l.enable(24),
                t.vertexColors && l.enable(25),
                t.vertexAlphas && l.enable(26),
                t.vertexUvs && l.enable(27),
                t.vertexTangents && l.enable(28),
                t.uvsVertexOnly && l.enable(29),
                t.fog && l.enable(30),
                e.push(l.mask),
                l.disableAll(),
                t.useFog && l.enable(0),
                t.flatShading && l.enable(1),
                t.logarithmicDepthBuffer && l.enable(2),
                t.skinning && l.enable(3),
                t.morphTargets && l.enable(4),
                t.morphNormals && l.enable(5),
                t.morphColors && l.enable(6),
                t.premultipliedAlpha && l.enable(7),
                t.shadowMapEnabled && l.enable(8),
                t.physicallyCorrectLights && l.enable(9),
                t.doubleSided && l.enable(10),
                t.flipSided && l.enable(11),
                t.useDepthPacking && l.enable(12),
                t.dithering && l.enable(13),
                t.specularIntensityMap && l.enable(14),
                t.specularColorMap && l.enable(15),
                t.transmission && l.enable(16),
                t.transmissionMap && l.enable(17),
                t.thicknessMap && l.enable(18),
                t.sheen && l.enable(19),
                t.sheenColorMap && l.enable(20),
                t.sheenRoughnessMap && l.enable(21),
                t.decodeVideoTexture && l.enable(22),
                t.opaque && l.enable(23),
                e.push(l.mask);
            })(n, t),
            n.push(e.outputEncoding)),
          n.push(t.customProgramCacheKey),
          n.join()
        );
      },
      getUniforms: function (e) {
        const t = m[e.type];
        let n;
        if (t) {
          const e = jn[t];
          n = Tn.clone(e.uniforms);
        } else n = e.uniforms;
        return n;
      },
      acquireProgram: function (t, n) {
        let i;
        for (let e = 0, t = h.length; e < t; e++) {
          const t = h[e];
          if (t.cacheKey === n) {
            (i = t), ++i.usedTimes;
            break;
          }
        }
        return void 0 === i && ((i = new Gr(e, n, t, a)), h.push(i)), i;
      },
      releaseProgram: function (e) {
        if (0 == --e.usedTimes) {
          const t = h.indexOf(e);
          (h[t] = h[h.length - 1]), h.pop(), e.destroy();
        }
      },
      releaseShaderCache: function (e) {
        c.remove(e);
      },
      programs: h,
      dispose: function () {
        c.dispose();
      },
    };
  }
  function Xr() {
    let e = new WeakMap();
    return {
      get: function (t) {
        let n = e.get(t);
        return void 0 === n && ((n = {}), e.set(t, n)), n;
      },
      remove: function (t) {
        e.delete(t);
      },
      update: function (t, n, i) {
        e.get(t)[n] = i;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function Yr(e, t) {
    return e.groupOrder !== t.groupOrder
      ? e.groupOrder - t.groupOrder
      : e.renderOrder !== t.renderOrder
      ? e.renderOrder - t.renderOrder
      : e.material.id !== t.material.id
      ? e.material.id - t.material.id
      : e.z !== t.z
      ? e.z - t.z
      : e.id - t.id;
  }
  function Jr(e, t) {
    return e.groupOrder !== t.groupOrder
      ? e.groupOrder - t.groupOrder
      : e.renderOrder !== t.renderOrder
      ? e.renderOrder - t.renderOrder
      : e.z !== t.z
      ? t.z - e.z
      : e.id - t.id;
  }
  function Zr() {
    const e = [];
    let t = 0;
    const n = [],
      i = [],
      r = [];
    function s(n, i, r, s, a, o) {
      let l = e[t];
      return (
        void 0 === l
          ? ((l = {
              id: n.id,
              object: n,
              geometry: i,
              material: r,
              groupOrder: s,
              renderOrder: n.renderOrder,
              z: a,
              group: o,
            }),
            (e[t] = l))
          : ((l.id = n.id),
            (l.object = n),
            (l.geometry = i),
            (l.material = r),
            (l.groupOrder = s),
            (l.renderOrder = n.renderOrder),
            (l.z = a),
            (l.group = o)),
        t++,
        l
      );
    }
    return {
      opaque: n,
      transmissive: i,
      transparent: r,
      init: function () {
        (t = 0), (n.length = 0), (i.length = 0), (r.length = 0);
      },
      push: function (e, t, a, o, l, c) {
        const h = s(e, t, a, o, l, c);
        a.transmission > 0
          ? i.push(h)
          : !0 === a.transparent
          ? r.push(h)
          : n.push(h);
      },
      unshift: function (e, t, a, o, l, c) {
        const h = s(e, t, a, o, l, c);
        a.transmission > 0
          ? i.unshift(h)
          : !0 === a.transparent
          ? r.unshift(h)
          : n.unshift(h);
      },
      finish: function () {
        for (let n = t, i = e.length; n < i; n++) {
          const t = e[n];
          if (null === t.id) break;
          (t.id = null),
            (t.object = null),
            (t.geometry = null),
            (t.material = null),
            (t.group = null);
        }
      },
      sort: function (e, t) {
        n.length > 1 && n.sort(e || Yr),
          i.length > 1 && i.sort(t || Jr),
          r.length > 1 && r.sort(t || Jr);
      },
    };
  }
  function Kr() {
    let e = new WeakMap();
    return {
      get: function (t, n) {
        let i;
        return (
          !1 === e.has(t)
            ? ((i = new Zr()), e.set(t, [i]))
            : n >= e.get(t).length
            ? ((i = new Zr()), e.get(t).push(i))
            : (i = e.get(t)[n]),
          i
        );
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function Qr() {
    const e = {};
    return {
      get: function (t) {
        if (void 0 !== e[t.id]) return e[t.id];
        let n;
        switch (t.type) {
          case "DirectionalLight":
            n = { direction: new Te(), color: new pe() };
            break;
          case "SpotLight":
            n = {
              position: new Te(),
              direction: new Te(),
              color: new pe(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            n = { position: new Te(), color: new pe(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            n = {
              direction: new Te(),
              skyColor: new pe(),
              groundColor: new pe(),
            };
            break;
          case "RectAreaLight":
            n = {
              color: new pe(),
              position: new Te(),
              halfWidth: new Te(),
              halfHeight: new Te(),
            };
        }
        return (e[t.id] = n), n;
      },
    };
  }
  let $r = 0;
  function es(e, t) {
    return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
  }
  function ts(e, t) {
    const n = new Qr(),
      i = (function () {
        const e = {};
        return {
          get: function (t) {
            if (void 0 !== e[t.id]) return e[t.id];
            let n;
            switch (t.type) {
              case "DirectionalLight":
              case "SpotLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new $(),
                };
                break;
              case "PointLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new $(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
            }
            return (e[t.id] = n), n;
          },
        };
      })(),
      r = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadow: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
      };
    for (let e = 0; e < 9; e++) r.probe.push(new Te());
    const s = new Te(),
      a = new nt(),
      o = new nt();
    return {
      setup: function (s, a) {
        let o = 0,
          l = 0,
          c = 0;
        for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
        let h = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 0,
          g = 0,
          v = 0;
        s.sort(es);
        const x = !0 !== a ? Math.PI : 1;
        for (let e = 0, t = s.length; e < t; e++) {
          const t = s[e],
            a = t.color,
            y = t.intensity,
            _ = t.distance,
            b = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
          if (t.isAmbientLight)
            (o += a.r * y * x), (l += a.g * y * x), (c += a.b * y * x);
          else if (t.isLightProbe)
            for (let e = 0; e < 9; e++)
              r.probe[e].addScaledVector(t.sh.coefficients[e], y);
          else if (t.isDirectionalLight) {
            const e = n.get(t);
            if (
              (e.color.copy(t.color).multiplyScalar(t.intensity * x),
              t.castShadow)
            ) {
              const e = t.shadow,
                n = i.get(t);
              (n.shadowBias = e.bias),
                (n.shadowNormalBias = e.normalBias),
                (n.shadowRadius = e.radius),
                (n.shadowMapSize = e.mapSize),
                (r.directionalShadow[h] = n),
                (r.directionalShadowMap[h] = b),
                (r.directionalShadowMatrix[h] = t.shadow.matrix),
                m++;
            }
            (r.directional[h] = e), h++;
          } else if (t.isSpotLight) {
            const e = n.get(t);
            if (
              (e.position.setFromMatrixPosition(t.matrixWorld),
              e.color.copy(a).multiplyScalar(y * x),
              (e.distance = _),
              (e.coneCos = Math.cos(t.angle)),
              (e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra))),
              (e.decay = t.decay),
              t.castShadow)
            ) {
              const e = t.shadow,
                n = i.get(t);
              (n.shadowBias = e.bias),
                (n.shadowNormalBias = e.normalBias),
                (n.shadowRadius = e.radius),
                (n.shadowMapSize = e.mapSize),
                (r.spotShadow[d] = n),
                (r.spotShadowMap[d] = b),
                (r.spotShadowMatrix[d] = t.shadow.matrix),
                v++;
            }
            (r.spot[d] = e), d++;
          } else if (t.isRectAreaLight) {
            const e = n.get(t);
            e.color.copy(a).multiplyScalar(y),
              e.halfWidth.set(0.5 * t.width, 0, 0),
              e.halfHeight.set(0, 0.5 * t.height, 0),
              (r.rectArea[p] = e),
              p++;
          } else if (t.isPointLight) {
            const e = n.get(t);
            if (
              (e.color.copy(t.color).multiplyScalar(t.intensity * x),
              (e.distance = t.distance),
              (e.decay = t.decay),
              t.castShadow)
            ) {
              const e = t.shadow,
                n = i.get(t);
              (n.shadowBias = e.bias),
                (n.shadowNormalBias = e.normalBias),
                (n.shadowRadius = e.radius),
                (n.shadowMapSize = e.mapSize),
                (n.shadowCameraNear = e.camera.near),
                (n.shadowCameraFar = e.camera.far),
                (r.pointShadow[u] = n),
                (r.pointShadowMap[u] = b),
                (r.pointShadowMatrix[u] = t.shadow.matrix),
                g++;
            }
            (r.point[u] = e), u++;
          } else if (t.isHemisphereLight) {
            const e = n.get(t);
            e.skyColor.copy(t.color).multiplyScalar(y * x),
              e.groundColor.copy(t.groundColor).multiplyScalar(y * x),
              (r.hemi[f] = e),
              f++;
          }
        }
        p > 0 &&
          (t.isWebGL2 || !0 === e.has("OES_texture_float_linear")
            ? ((r.rectAreaLTC1 = Wn.LTC_FLOAT_1),
              (r.rectAreaLTC2 = Wn.LTC_FLOAT_2))
            : !0 === e.has("OES_texture_half_float_linear")
            ? ((r.rectAreaLTC1 = Wn.LTC_HALF_1),
              (r.rectAreaLTC2 = Wn.LTC_HALF_2))
            : console.error(
                "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
              )),
          (r.ambient[0] = o),
          (r.ambient[1] = l),
          (r.ambient[2] = c);
        const y = r.hash;
        (y.directionalLength === h &&
          y.pointLength === u &&
          y.spotLength === d &&
          y.rectAreaLength === p &&
          y.hemiLength === f &&
          y.numDirectionalShadows === m &&
          y.numPointShadows === g &&
          y.numSpotShadows === v) ||
          ((r.directional.length = h),
          (r.spot.length = d),
          (r.rectArea.length = p),
          (r.point.length = u),
          (r.hemi.length = f),
          (r.directionalShadow.length = m),
          (r.directionalShadowMap.length = m),
          (r.pointShadow.length = g),
          (r.pointShadowMap.length = g),
          (r.spotShadow.length = v),
          (r.spotShadowMap.length = v),
          (r.directionalShadowMatrix.length = m),
          (r.pointShadowMatrix.length = g),
          (r.spotShadowMatrix.length = v),
          (y.directionalLength = h),
          (y.pointLength = u),
          (y.spotLength = d),
          (y.rectAreaLength = p),
          (y.hemiLength = f),
          (y.numDirectionalShadows = m),
          (y.numPointShadows = g),
          (y.numSpotShadows = v),
          (r.version = $r++));
      },
      setupView: function (e, t) {
        let n = 0,
          i = 0,
          l = 0,
          c = 0,
          h = 0;
        const u = t.matrixWorldInverse;
        for (let t = 0, d = e.length; t < d; t++) {
          const d = e[t];
          if (d.isDirectionalLight) {
            const e = r.directional[n];
            e.direction.setFromMatrixPosition(d.matrixWorld),
              s.setFromMatrixPosition(d.target.matrixWorld),
              e.direction.sub(s),
              e.direction.transformDirection(u),
              n++;
          } else if (d.isSpotLight) {
            const e = r.spot[l];
            e.position.setFromMatrixPosition(d.matrixWorld),
              e.position.applyMatrix4(u),
              e.direction.setFromMatrixPosition(d.matrixWorld),
              s.setFromMatrixPosition(d.target.matrixWorld),
              e.direction.sub(s),
              e.direction.transformDirection(u),
              l++;
          } else if (d.isRectAreaLight) {
            const e = r.rectArea[c];
            e.position.setFromMatrixPosition(d.matrixWorld),
              e.position.applyMatrix4(u),
              o.identity(),
              a.copy(d.matrixWorld),
              a.premultiply(u),
              o.extractRotation(a),
              e.halfWidth.set(0.5 * d.width, 0, 0),
              e.halfHeight.set(0, 0.5 * d.height, 0),
              e.halfWidth.applyMatrix4(o),
              e.halfHeight.applyMatrix4(o),
              c++;
          } else if (d.isPointLight) {
            const e = r.point[i];
            e.position.setFromMatrixPosition(d.matrixWorld),
              e.position.applyMatrix4(u),
              i++;
          } else if (d.isHemisphereLight) {
            const e = r.hemi[h];
            e.direction.setFromMatrixPosition(d.matrixWorld),
              e.direction.transformDirection(u),
              h++;
          }
        }
      },
      state: r,
    };
  }
  function ns(e, t) {
    const n = new ts(e, t),
      i = [],
      r = [];
    return {
      init: function () {
        (i.length = 0), (r.length = 0);
      },
      state: { lightsArray: i, shadowsArray: r, lights: n },
      setupLights: function (e) {
        n.setup(i, e);
      },
      setupLightsView: function (e) {
        n.setupView(i, e);
      },
      pushLight: function (e) {
        i.push(e);
      },
      pushShadow: function (e) {
        r.push(e);
      },
    };
  }
  function is(e, t) {
    let n = new WeakMap();
    return {
      get: function (i, r = 0) {
        let s;
        return (
          !1 === n.has(i)
            ? ((s = new ns(e, t)), n.set(i, [s]))
            : r >= n.get(i).length
            ? ((s = new ns(e, t)), n.get(i).push(s))
            : (s = n.get(i)[r]),
          s
        );
      },
      dispose: function () {
        n = new WeakMap();
      },
    };
  }
  class rs extends Ht {
    constructor(e) {
      super(),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = 3200),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.depthPacking = e.depthPacking),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      );
    }
  }
  rs.prototype.isMeshDepthMaterial = !0;
  class ss extends Ht {
    constructor(e) {
      super(),
        (this.type = "MeshDistanceMaterial"),
        (this.referencePosition = new Te()),
        (this.nearDistance = 1),
        (this.farDistance = 1e3),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.referencePosition.copy(e.referencePosition),
        (this.nearDistance = e.nearDistance),
        (this.farDistance = e.farDistance),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      );
    }
  }
  function as(e, t, n) {
    let i = new Fn();
    const r = new $(),
      s = new $(),
      a = new _e(),
      l = new rs({ depthPacking: 3201 }),
      c = new ss(),
      h = {},
      u = n.maxTextureSize,
      d = { 0: 1, 1: 0, 2: 2 },
      p = new En({
        defines: { VSM_SAMPLES: 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new $() },
          radius: { value: 4 },
        },
        vertexShader:
          "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
      }),
      f = p.clone();
    f.defines.HORIZONTAL_PASS = 1;
    const m = new tn();
    m.setAttribute(
      "position",
      new Wt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const g = new _n(m, p),
      v = this;
    function y(n, i) {
      const r = t.update(g);
      p.defines.VSM_SAMPLES !== n.blurSamples &&
        ((p.defines.VSM_SAMPLES = n.blurSamples),
        (f.defines.VSM_SAMPLES = n.blurSamples),
        (p.needsUpdate = !0),
        (f.needsUpdate = !0)),
        (p.uniforms.shadow_pass.value = n.map.texture),
        (p.uniforms.resolution.value = n.mapSize),
        (p.uniforms.radius.value = n.radius),
        e.setRenderTarget(n.mapPass),
        e.clear(),
        e.renderBufferDirect(i, null, r, p, g, null),
        (f.uniforms.shadow_pass.value = n.mapPass.texture),
        (f.uniforms.resolution.value = n.mapSize),
        (f.uniforms.radius.value = n.radius),
        e.setRenderTarget(n.map),
        e.clear(),
        e.renderBufferDirect(i, null, r, f, g, null);
    }
    function _(t, n, i, r, s, a) {
      let o = null;
      const u =
        !0 === i.isPointLight
          ? t.customDistanceMaterial
          : t.customDepthMaterial;
      if (
        ((o = void 0 !== u ? u : !0 === i.isPointLight ? c : l),
        (e.localClippingEnabled &&
          !0 === n.clipShadows &&
          0 !== n.clippingPlanes.length) ||
          (n.displacementMap && 0 !== n.displacementScale) ||
          (n.alphaMap && n.alphaTest > 0))
      ) {
        const e = o.uuid,
          t = n.uuid;
        let i = h[e];
        void 0 === i && ((i = {}), (h[e] = i));
        let r = i[t];
        void 0 === r && ((r = o.clone()), (i[t] = r)), (o = r);
      }
      return (
        (o.visible = n.visible),
        (o.wireframe = n.wireframe),
        (o.side =
          3 === a
            ? null !== n.shadowSide
              ? n.shadowSide
              : n.side
            : null !== n.shadowSide
            ? n.shadowSide
            : d[n.side]),
        (o.alphaMap = n.alphaMap),
        (o.alphaTest = n.alphaTest),
        (o.clipShadows = n.clipShadows),
        (o.clippingPlanes = n.clippingPlanes),
        (o.clipIntersection = n.clipIntersection),
        (o.displacementMap = n.displacementMap),
        (o.displacementScale = n.displacementScale),
        (o.displacementBias = n.displacementBias),
        (o.wireframeLinewidth = n.wireframeLinewidth),
        (o.linewidth = n.linewidth),
        !0 === i.isPointLight &&
          !0 === o.isMeshDistanceMaterial &&
          (o.referencePosition.setFromMatrixPosition(i.matrixWorld),
          (o.nearDistance = r),
          (o.farDistance = s)),
        o
      );
    }
    function b(n, r, s, a, o) {
      if (!1 === n.visible) return;
      if (
        n.layers.test(r.layers) &&
        (n.isMesh || n.isLine || n.isPoints) &&
        (n.castShadow || (n.receiveShadow && 3 === o)) &&
        (!n.frustumCulled || i.intersectsObject(n))
      ) {
        n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
        const i = t.update(n),
          r = n.material;
        if (Array.isArray(r)) {
          const t = i.groups;
          for (let l = 0, c = t.length; l < c; l++) {
            const c = t[l],
              h = r[c.materialIndex];
            if (h && h.visible) {
              const t = _(n, h, a, s.near, s.far, o);
              e.renderBufferDirect(s, null, i, t, n, c);
            }
          }
        } else if (r.visible) {
          const t = _(n, r, a, s.near, s.far, o);
          e.renderBufferDirect(s, null, i, t, n, null);
        }
      }
      const l = n.children;
      for (let e = 0, t = l.length; e < t; e++) b(l[e], r, s, a, o);
    }
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = 1),
      (this.render = function (t, n, l) {
        if (!1 === v.enabled) return;
        if (!1 === v.autoUpdate && !1 === v.needsUpdate) return;
        if (0 === t.length) return;
        const c = e.getRenderTarget(),
          h = e.getActiveCubeFace(),
          d = e.getActiveMipmapLevel(),
          p = e.state;
        p.setBlending(0),
          p.buffers.color.setClear(1, 1, 1, 1),
          p.buffers.depth.setTest(!0),
          p.setScissorTest(!1);
        for (let c = 0, h = t.length; c < h; c++) {
          const h = t[c],
            d = h.shadow;
          if (void 0 === d) {
            console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
            continue;
          }
          if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
          r.copy(d.mapSize);
          const f = d.getFrameExtents();
          if (
            (r.multiply(f),
            s.copy(d.mapSize),
            (r.x > u || r.y > u) &&
              (r.x > u &&
                ((s.x = Math.floor(u / f.x)),
                (r.x = s.x * f.x),
                (d.mapSize.x = s.x)),
              r.y > u &&
                ((s.y = Math.floor(u / f.y)),
                (r.y = s.y * f.y),
                (d.mapSize.y = s.y))),
            null !== d.map ||
              d.isPointLightShadow ||
              3 !== this.type ||
              ((d.map = new be(r.x, r.y)),
              (d.map.texture.name = h.name + ".shadowMap"),
              (d.mapPass = new be(r.x, r.y)),
              d.camera.updateProjectionMatrix()),
            null === d.map)
          ) {
            const e = { minFilter: o, magFilter: o, format: x };
            (d.map = new be(r.x, r.y, e)),
              (d.map.texture.name = h.name + ".shadowMap"),
              d.camera.updateProjectionMatrix();
          }
          e.setRenderTarget(d.map), e.clear();
          const m = d.getViewportCount();
          for (let e = 0; e < m; e++) {
            const t = d.getViewport(e);
            a.set(s.x * t.x, s.y * t.y, s.x * t.z, s.y * t.w),
              p.viewport(a),
              d.updateMatrices(h, e),
              (i = d.getFrustum()),
              b(n, l, d.camera, h, this.type);
          }
          d.isPointLightShadow || 3 !== this.type || y(d, l),
            (d.needsUpdate = !1);
        }
        (v.needsUpdate = !1), e.setRenderTarget(c, h, d);
      });
  }
  function os(t, n, i) {
    const r = i.isWebGL2,
      s = new (function () {
        let e = !1;
        const n = new _e();
        let i = null;
        const r = new _e(0, 0, 0, 0);
        return {
          setMask: function (n) {
            i === n || e || (t.colorMask(n, n, n, n), (i = n));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e, i, s, a, o) {
            !0 === o && ((e *= a), (i *= a), (s *= a)),
              n.set(e, i, s, a),
              !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
          },
          reset: function () {
            (e = !1), (i = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      a = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function (e) {
            e ? F(2929) : H(2929);
          },
          setMask: function (i) {
            n === i || e || (t.depthMask(i), (n = i));
          },
          setFunc: function (e) {
            if (i !== e) {
              if (e)
                switch (e) {
                  case 0:
                    t.depthFunc(512);
                    break;
                  case 1:
                    t.depthFunc(519);
                    break;
                  case 2:
                    t.depthFunc(513);
                    break;
                  case 3:
                  default:
                    t.depthFunc(515);
                    break;
                  case 4:
                    t.depthFunc(514);
                    break;
                  case 5:
                    t.depthFunc(518);
                    break;
                  case 6:
                    t.depthFunc(516);
                    break;
                  case 7:
                    t.depthFunc(517);
                }
              else t.depthFunc(515);
              i = e;
            }
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            r !== e && (t.clearDepth(e), (r = e));
          },
          reset: function () {
            (e = !1), (n = null), (i = null), (r = null);
          },
        };
      })(),
      o = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null,
          s = null,
          a = null,
          o = null,
          l = null,
          c = null;
        return {
          setTest: function (t) {
            e || (t ? F(2960) : H(2960));
          },
          setMask: function (i) {
            n === i || e || (t.stencilMask(i), (n = i));
          },
          setFunc: function (e, n, a) {
            (i === e && r === n && s === a) ||
              (t.stencilFunc(e, n, a), (i = e), (r = n), (s = a));
          },
          setOp: function (e, n, i) {
            (a === e && o === n && l === i) ||
              (t.stencilOp(e, n, i), (a = e), (o = n), (l = i));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            c !== e && (t.clearStencil(e), (c = e));
          },
          reset: function () {
            (e = !1),
              (n = null),
              (i = null),
              (r = null),
              (s = null),
              (a = null),
              (o = null),
              (l = null),
              (c = null);
          },
        };
      })();
    let l = {},
      c = {},
      h = new WeakMap(),
      u = [],
      d = null,
      p = !1,
      f = null,
      m = null,
      g = null,
      v = null,
      x = null,
      y = null,
      _ = null,
      b = !1,
      w = null,
      M = null,
      S = null,
      T = null,
      E = null;
    const A = t.getParameter(35661);
    let R = !1,
      L = 0;
    const C = t.getParameter(7938);
    -1 !== C.indexOf("WebGL")
      ? ((L = parseFloat(/^WebGL (\d)/.exec(C)[1])), (R = L >= 1))
      : -1 !== C.indexOf("OpenGL ES") &&
        ((L = parseFloat(/^OpenGL ES (\d)/.exec(C)[1])), (R = L >= 2));
    let P = null,
      D = {};
    const I = t.getParameter(3088),
      N = t.getParameter(2978),
      O = new _e().fromArray(I),
      z = new _e().fromArray(N);
    function U(e, n, i) {
      const r = new Uint8Array(4),
        s = t.createTexture();
      t.bindTexture(e, s),
        t.texParameteri(e, 10241, 9728),
        t.texParameteri(e, 10240, 9728);
      for (let e = 0; e < i; e++)
        t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
      return s;
    }
    const B = {};
    function F(e) {
      !0 !== l[e] && (t.enable(e), (l[e] = !0));
    }
    function H(e) {
      !1 !== l[e] && (t.disable(e), (l[e] = !1));
    }
    (B[3553] = U(3553, 3553, 1)),
      (B[34067] = U(34067, 34069, 6)),
      s.setClear(0, 0, 0, 1),
      a.setClear(1),
      o.setClear(0),
      F(2929),
      a.setFunc(3),
      W(!1),
      j(1),
      F(2884),
      V(0);
    const k = { [e]: 32774, 101: 32778, 102: 32779 };
    if (r) (k[103] = 32775), (k[104] = 32776);
    else {
      const e = n.get("EXT_blend_minmax");
      null !== e && ((k[103] = e.MIN_EXT), (k[104] = e.MAX_EXT));
    }
    const G = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773,
    };
    function V(n, i, r, s, a, o, l, c) {
      if (0 !== n) {
        if ((!1 === p && (F(3042), (p = !0)), 5 === n))
          (a = a || i),
            (o = o || r),
            (l = l || s),
            (i === m && a === x) ||
              (t.blendEquationSeparate(k[i], k[a]), (m = i), (x = a)),
            (r === g && s === v && o === y && l === _) ||
              (t.blendFuncSeparate(G[r], G[s], G[o], G[l]),
              (g = r),
              (v = s),
              (y = o),
              (_ = l)),
            (f = n),
            (b = null);
        else if (n !== f || c !== b) {
          if (
            ((m === e && x === e) || (t.blendEquation(32774), (m = e), (x = e)),
            c)
          )
            switch (n) {
              case 1:
                t.blendFuncSeparate(1, 771, 1, 771);
                break;
              case 2:
                t.blendFunc(1, 1);
                break;
              case 3:
                t.blendFuncSeparate(0, 769, 0, 1);
                break;
              case 4:
                t.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", n);
            }
          else
            switch (n) {
              case 1:
                t.blendFuncSeparate(770, 771, 1, 771);
                break;
              case 2:
                t.blendFunc(770, 1);
                break;
              case 3:
                t.blendFuncSeparate(0, 769, 0, 1);
                break;
              case 4:
                t.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", n);
            }
          (g = null), (v = null), (y = null), (_ = null), (f = n), (b = c);
        }
      } else !0 === p && (H(3042), (p = !1));
    }
    function W(e) {
      w !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (w = e));
    }
    function j(e) {
      0 !== e
        ? (F(2884),
          e !== M &&
            (1 === e
              ? t.cullFace(1029)
              : 2 === e
              ? t.cullFace(1028)
              : t.cullFace(1032)))
        : H(2884),
        (M = e);
    }
    function q(e, n, i) {
      e
        ? (F(32823),
          (T === n && E === i) || (t.polygonOffset(n, i), (T = n), (E = i)))
        : H(32823);
    }
    function X(e) {
      void 0 === e && (e = 33984 + A - 1),
        P !== e && (t.activeTexture(e), (P = e));
    }
    return {
      buffers: { color: s, depth: a, stencil: o },
      enable: F,
      disable: H,
      bindFramebuffer: function (e, n) {
        return (
          c[e] !== n &&
          (t.bindFramebuffer(e, n),
          (c[e] = n),
          r && (36009 === e && (c[36160] = n), 36160 === e && (c[36009] = n)),
          !0)
        );
      },
      drawBuffers: function (e, r) {
        let s = u,
          a = !1;
        if (e)
          if (
            ((s = h.get(r)),
            void 0 === s && ((s = []), h.set(r, s)),
            e.isWebGLMultipleRenderTargets)
          ) {
            const t = e.texture;
            if (s.length !== t.length || 36064 !== s[0]) {
              for (let e = 0, n = t.length; e < n; e++) s[e] = 36064 + e;
              (s.length = t.length), (a = !0);
            }
          } else 36064 !== s[0] && ((s[0] = 36064), (a = !0));
        else 1029 !== s[0] && ((s[0] = 1029), (a = !0));
        a &&
          (i.isWebGL2
            ? t.drawBuffers(s)
            : n.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
      },
      useProgram: function (e) {
        return d !== e && (t.useProgram(e), (d = e), !0);
      },
      setBlending: V,
      setMaterial: function (e, t) {
        2 === e.side ? H(2884) : F(2884);
        let n = 1 === e.side;
        t && (n = !n),
          W(n),
          1 === e.blending && !1 === e.transparent
            ? V(0)
            : V(
                e.blending,
                e.blendEquation,
                e.blendSrc,
                e.blendDst,
                e.blendEquationAlpha,
                e.blendSrcAlpha,
                e.blendDstAlpha,
                e.premultipliedAlpha
              ),
          a.setFunc(e.depthFunc),
          a.setTest(e.depthTest),
          a.setMask(e.depthWrite),
          s.setMask(e.colorWrite);
        const i = e.stencilWrite;
        o.setTest(i),
          i &&
            (o.setMask(e.stencilWriteMask),
            o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
            o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
          q(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
          !0 === e.alphaToCoverage ? F(32926) : H(32926);
      },
      setFlipSided: W,
      setCullFace: j,
      setLineWidth: function (e) {
        e !== S && (R && t.lineWidth(e), (S = e));
      },
      setPolygonOffset: q,
      setScissorTest: function (e) {
        e ? F(3089) : H(3089);
      },
      activeTexture: X,
      bindTexture: function (e, n) {
        null === P && X();
        let i = D[P];
        void 0 === i && ((i = { type: void 0, texture: void 0 }), (D[P] = i)),
          (i.type === e && i.texture === n) ||
            (t.bindTexture(e, n || B[e]), (i.type = e), (i.texture = n));
      },
      unbindTexture: function () {
        const e = D[P];
        void 0 !== e &&
          void 0 !== e.type &&
          (t.bindTexture(e.type, null),
          (e.type = void 0),
          (e.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texStorage2D: function () {
        try {
          t.texStorage2D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texStorage3D: function () {
        try {
          t.texStorage3D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texSubImage2D: function () {
        try {
          t.texSubImage2D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texSubImage3D: function () {
        try {
          t.texSubImage3D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      compressedTexSubImage2D: function () {
        try {
          t.compressedTexSubImage2D.apply(t, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      scissor: function (e) {
        !1 === O.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), O.copy(e));
      },
      viewport: function (e) {
        !1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e));
      },
      reset: function () {
        t.disable(3042),
          t.disable(2884),
          t.disable(2929),
          t.disable(32823),
          t.disable(3089),
          t.disable(2960),
          t.disable(32926),
          t.blendEquation(32774),
          t.blendFunc(1, 0),
          t.blendFuncSeparate(1, 0, 1, 0),
          t.colorMask(!0, !0, !0, !0),
          t.clearColor(0, 0, 0, 0),
          t.depthMask(!0),
          t.depthFunc(513),
          t.clearDepth(1),
          t.stencilMask(4294967295),
          t.stencilFunc(519, 0, 4294967295),
          t.stencilOp(7680, 7680, 7680),
          t.clearStencil(0),
          t.cullFace(1029),
          t.frontFace(2305),
          t.polygonOffset(0, 0),
          t.activeTexture(33984),
          t.bindFramebuffer(36160, null),
          !0 === r &&
            (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)),
          t.useProgram(null),
          t.lineWidth(1),
          t.scissor(0, 0, t.canvas.width, t.canvas.height),
          t.viewport(0, 0, t.canvas.width, t.canvas.height),
          (l = {}),
          (P = null),
          (D = {}),
          (c = {}),
          (h = new WeakMap()),
          (u = []),
          (d = null),
          (p = !1),
          (f = null),
          (m = null),
          (g = null),
          (v = null),
          (x = null),
          (y = null),
          (_ = null),
          (b = !1),
          (w = null),
          (M = null),
          (S = null),
          (T = null),
          (E = null),
          O.set(0, 0, t.canvas.width, t.canvas.height),
          z.set(0, 0, t.canvas.width, t.canvas.height),
          s.reset(),
          a.reset(),
          o.reset();
      },
    };
  }
  function ls(e, t, n, i, b, w, M) {
    const S = b.isWebGL2,
      T = b.maxTextures,
      E = b.maxCubemapSize,
      A = b.maxTextureSize,
      R = b.maxSamples,
      L = t.has("WEBGL_multisampled_render_to_texture")
        ? t.get("WEBGL_multisampled_render_to_texture")
        : null,
      C = /OculusBrowser/g.test(navigator.userAgent),
      I = new WeakMap();
    let N;
    const O = new WeakMap();
    let z = !1;
    try {
      z =
        "undefined" != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e) {}
    function U(e, t) {
      return z ? new OffscreenCanvas(e, t) : ne("canvas");
    }
    function B(e, t, n, i) {
      let r = 1;
      if (
        ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)),
        r < 1 || !0 === t)
      ) {
        if (
          ("undefined" != typeof HTMLImageElement &&
            e instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            e instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
        ) {
          const i = t ? K : Math.floor,
            s = i(r * e.width),
            a = i(r * e.height);
          void 0 === N && (N = U(s, a));
          const o = n ? U(s, a) : N;
          return (
            (o.width = s),
            (o.height = a),
            o.getContext("2d").drawImage(e, 0, 0, s, a),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                e.width +
                "x" +
                e.height +
                ") to (" +
                s +
                "x" +
                a +
                ")."
            ),
            o
          );
        }
        return (
          "data" in e &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                e.width +
                "x" +
                e.height +
                ")."
            ),
          e
        );
      }
      return e;
    }
    function H(e) {
      return J(e.width) && J(e.height);
    }
    function k(e, t) {
      return e.generateMipmaps && t && e.minFilter !== o && e.minFilter !== h;
    }
    function G(t) {
      e.generateMipmap(t);
    }
    function V(n, i, r, s, a = !1) {
      if (!1 === S) return i;
      if (null !== n) {
        if (void 0 !== e[n]) return e[n];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            n +
            "'"
        );
      }
      let o = i;
      return (
        6403 === i &&
          (5126 === r && (o = 33326),
          5131 === r && (o = 33325),
          5121 === r && (o = 33321)),
        33319 === i &&
          (5126 === r && (o = 33328),
          5131 === r && (o = 33327),
          5121 === r && (o = 33323)),
        6408 === i &&
          (5126 === r && (o = 34836),
          5131 === r && (o = 34842),
          5121 === r && (o = s === D && !1 === a ? 35907 : 32856),
          32819 === r && (o = 32854),
          32820 === r && (o = 32855)),
        (33325 !== o &&
          33326 !== o &&
          33327 !== o &&
          33328 !== o &&
          34842 !== o &&
          34836 !== o) ||
          t.get("EXT_color_buffer_float"),
        o
      );
    }
    function W(e, t, n) {
      return !0 === k(e, n) ||
        (e.isFramebufferTexture && e.minFilter !== o && e.minFilter !== h)
        ? Math.log2(Math.max(t.width, t.height)) + 1
        : void 0 !== e.mipmaps && e.mipmaps.length > 0
        ? e.mipmaps.length
        : e.isCompressedTexture && Array.isArray(e.image)
        ? t.mipmaps.length
        : 1;
    }
    function j(e) {
      return e === o || e === l || e === c ? 9728 : 9729;
    }
    function q(e) {
      const t = e.target;
      t.removeEventListener("dispose", q),
        (function (e) {
          const t = i.get(e);
          if (void 0 === t.__webglInit) return;
          const n = e.source,
            r = O.get(n);
          if (r) {
            const i = r[t.__cacheKey];
            i.usedTimes--,
              0 === i.usedTimes && Y(e),
              0 === Object.keys(r).length && O.delete(n);
          }
          i.remove(e);
        })(t),
        t.isVideoTexture && I.delete(t);
    }
    function X(t) {
      const n = t.target;
      n.removeEventListener("dispose", X),
        (function (t) {
          const n = t.texture,
            r = i.get(t),
            s = i.get(n);
          if (
            (void 0 !== s.__webglTexture &&
              (e.deleteTexture(s.__webglTexture), M.memory.textures--),
            t.depthTexture && t.depthTexture.dispose(),
            t.isWebGLCubeRenderTarget)
          )
            for (let t = 0; t < 6; t++)
              e.deleteFramebuffer(r.__webglFramebuffer[t]),
                r.__webglDepthbuffer &&
                  e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
          else
            e.deleteFramebuffer(r.__webglFramebuffer),
              r.__webglDepthbuffer &&
                e.deleteRenderbuffer(r.__webglDepthbuffer),
              r.__webglMultisampledFramebuffer &&
                e.deleteFramebuffer(r.__webglMultisampledFramebuffer),
              r.__webglColorRenderbuffer &&
                e.deleteRenderbuffer(r.__webglColorRenderbuffer),
              r.__webglDepthRenderbuffer &&
                e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
          if (t.isWebGLMultipleRenderTargets)
            for (let t = 0, r = n.length; t < r; t++) {
              const r = i.get(n[t]);
              r.__webglTexture &&
                (e.deleteTexture(r.__webglTexture), M.memory.textures--),
                i.remove(n[t]);
            }
          i.remove(n), i.remove(t);
        })(n);
    }
    function Y(t) {
      const n = i.get(t);
      e.deleteTexture(n.__webglTexture);
      const r = t.source;
      delete O.get(r)[n.__cacheKey], M.memory.textures--;
    }
    let Z = 0;
    function Q(e, t) {
      const r = i.get(e);
      if (
        (e.isVideoTexture &&
          (function (e) {
            const t = M.render.frame;
            I.get(e) !== t && (I.set(e, t), e.update());
          })(e),
        !1 === e.isRenderTargetTexture &&
          e.version > 0 &&
          r.__version !== e.version)
      ) {
        const n = e.image;
        if (null === n)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but no image data found."
          );
        else {
          if (!1 !== n.complete) return void re(r, e, t);
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        }
      }
      n.activeTexture(33984 + t), n.bindTexture(3553, r.__webglTexture);
    }
    const $ = { [r]: 10497, [s]: 33071, [a]: 33648 },
      ee = {
        [o]: 9728,
        [l]: 9984,
        [c]: 9986,
        [h]: 9729,
        1007: 9985,
        [u]: 9987,
      };
    function te(n, r, a) {
      if (
        (a
          ? (e.texParameteri(n, 10242, $[r.wrapS]),
            e.texParameteri(n, 10243, $[r.wrapT]),
            (32879 !== n && 35866 !== n) ||
              e.texParameteri(n, 32882, $[r.wrapR]),
            e.texParameteri(n, 10240, ee[r.magFilter]),
            e.texParameteri(n, 10241, ee[r.minFilter]))
          : (e.texParameteri(n, 10242, 33071),
            e.texParameteri(n, 10243, 33071),
            (32879 !== n && 35866 !== n) || e.texParameteri(n, 32882, 33071),
            (r.wrapS === s && r.wrapT === s) ||
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
              ),
            e.texParameteri(n, 10240, j(r.magFilter)),
            e.texParameteri(n, 10241, j(r.minFilter)),
            r.minFilter !== o &&
              r.minFilter !== h &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
              )),
        !0 === t.has("EXT_texture_filter_anisotropic"))
      ) {
        const s = t.get("EXT_texture_filter_anisotropic");
        if (r.type === m && !1 === t.has("OES_texture_float_linear")) return;
        if (
          !1 === S &&
          r.type === g &&
          !1 === t.has("OES_texture_half_float_linear")
        )
          return;
        (r.anisotropy > 1 || i.get(r).__currentAnisotropy) &&
          (e.texParameterf(
            n,
            s.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(r.anisotropy, b.getMaxAnisotropy())
          ),
          (i.get(r).__currentAnisotropy = r.anisotropy));
      }
    }
    function ie(t, n) {
      let i = !1;
      void 0 === t.__webglInit &&
        ((t.__webglInit = !0), n.addEventListener("dispose", q));
      const r = n.source;
      let s = O.get(r);
      void 0 === s && ((s = {}), O.set(r, s));
      const a = (function (e) {
        const t = [];
        return (
          t.push(e.wrapS),
          t.push(e.wrapT),
          t.push(e.magFilter),
          t.push(e.minFilter),
          t.push(e.anisotropy),
          t.push(e.internalFormat),
          t.push(e.format),
          t.push(e.type),
          t.push(e.generateMipmaps),
          t.push(e.premultiplyAlpha),
          t.push(e.flipY),
          t.push(e.unpackAlignment),
          t.push(e.encoding),
          t.join()
        );
      })(n);
      if (a !== t.__cacheKey) {
        void 0 === s[a] &&
          ((s[a] = { texture: e.createTexture(), usedTimes: 0 }),
          M.memory.textures++,
          (i = !0)),
          s[a].usedTimes++;
        const r = s[t.__cacheKey];
        void 0 !== r &&
          (s[t.__cacheKey].usedTimes--, 0 === r.usedTimes && Y(n)),
          (t.__cacheKey = a),
          (t.__webglTexture = s[a].texture);
      }
      return i;
    }
    function re(t, i, r) {
      let a = 3553;
      i.isDataArrayTexture && (a = 35866), i.isData3DTexture && (a = 32879);
      const l = ie(t, i),
        c = i.source;
      if (
        (n.activeTexture(33984 + r),
        n.bindTexture(a, t.__webglTexture),
        c.version !== c.__currentVersion || !0 === l)
      ) {
        e.pixelStorei(37440, i.flipY),
          e.pixelStorei(37441, i.premultiplyAlpha),
          e.pixelStorei(3317, i.unpackAlignment),
          e.pixelStorei(37443, 0);
        const r =
          (function (e) {
            return (
              !S &&
              (e.wrapS !== s ||
                e.wrapT !== s ||
                (e.minFilter !== o && e.minFilter !== h))
            );
          })(i) && !1 === H(i.image);
        let u = B(i.image, r, !1, A);
        u = he(i, u);
        const d = H(u) || S,
          g = w.convert(i.format, i.encoding);
        let b,
          M = w.convert(i.type),
          T = V(i.internalFormat, g, M, i.encoding, i.isVideoTexture);
        te(a, i, d);
        const E = i.mipmaps,
          R = S && !0 !== i.isVideoTexture,
          L = void 0 === t.__version || !0 === l,
          C = W(i, u, d);
        if (i.isDepthTexture)
          (T = 6402),
            S
              ? (T =
                  i.type === m
                    ? 36012
                    : i.type === f
                    ? 33190
                    : i.type === v
                    ? 35056
                    : 33189)
              : i.type === m &&
                console.error(
                  "WebGLRenderer: Floating point depth texture requires WebGL2."
                ),
            i.format === y &&
              6402 === T &&
              i.type !== p &&
              i.type !== f &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
              ),
              (i.type = p),
              (M = w.convert(i.type))),
            i.format === _ &&
              6402 === T &&
              ((T = 34041),
              i.type !== v &&
                (console.warn(
                  "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                ),
                (i.type = v),
                (M = w.convert(i.type)))),
            L &&
              (R
                ? n.texStorage2D(3553, 1, T, u.width, u.height)
                : n.texImage2D(3553, 0, T, u.width, u.height, 0, g, M, null));
        else if (i.isDataTexture)
          if (E.length > 0 && d) {
            R && L && n.texStorage2D(3553, C, T, E[0].width, E[0].height);
            for (let e = 0, t = E.length; e < t; e++)
              (b = E[e]),
                R
                  ? n.texSubImage2D(
                      3553,
                      e,
                      0,
                      0,
                      b.width,
                      b.height,
                      g,
                      M,
                      b.data
                    )
                  : n.texImage2D(
                      3553,
                      e,
                      T,
                      b.width,
                      b.height,
                      0,
                      g,
                      M,
                      b.data
                    );
            i.generateMipmaps = !1;
          } else
            R
              ? (L && n.texStorage2D(3553, C, T, u.width, u.height),
                n.texSubImage2D(3553, 0, 0, 0, u.width, u.height, g, M, u.data))
              : n.texImage2D(3553, 0, T, u.width, u.height, 0, g, M, u.data);
        else if (i.isCompressedTexture) {
          R && L && n.texStorage2D(3553, C, T, E[0].width, E[0].height);
          for (let e = 0, t = E.length; e < t; e++)
            (b = E[e]),
              i.format !== x
                ? null !== g
                  ? R
                    ? n.compressedTexSubImage2D(
                        3553,
                        e,
                        0,
                        0,
                        b.width,
                        b.height,
                        g,
                        b.data
                      )
                    : n.compressedTexImage2D(
                        3553,
                        e,
                        T,
                        b.width,
                        b.height,
                        0,
                        b.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : R
                ? n.texSubImage2D(
                    3553,
                    e,
                    0,
                    0,
                    b.width,
                    b.height,
                    g,
                    M,
                    b.data
                  )
                : n.texImage2D(3553, e, T, b.width, b.height, 0, g, M, b.data);
        } else if (i.isDataArrayTexture)
          R
            ? (L && n.texStorage3D(35866, C, T, u.width, u.height, u.depth),
              n.texSubImage3D(
                35866,
                0,
                0,
                0,
                0,
                u.width,
                u.height,
                u.depth,
                g,
                M,
                u.data
              ))
            : n.texImage3D(
                35866,
                0,
                T,
                u.width,
                u.height,
                u.depth,
                0,
                g,
                M,
                u.data
              );
        else if (i.isData3DTexture)
          R
            ? (L && n.texStorage3D(32879, C, T, u.width, u.height, u.depth),
              n.texSubImage3D(
                32879,
                0,
                0,
                0,
                0,
                u.width,
                u.height,
                u.depth,
                g,
                M,
                u.data
              ))
            : n.texImage3D(
                32879,
                0,
                T,
                u.width,
                u.height,
                u.depth,
                0,
                g,
                M,
                u.data
              );
        else if (i.isFramebufferTexture) {
          if (L)
            if (R) n.texStorage2D(3553, C, T, u.width, u.height);
            else {
              let e = u.width,
                t = u.height;
              for (let i = 0; i < C; i++)
                n.texImage2D(3553, i, T, e, t, 0, g, M, null),
                  (e >>= 1),
                  (t >>= 1);
            }
        } else if (E.length > 0 && d) {
          R && L && n.texStorage2D(3553, C, T, E[0].width, E[0].height);
          for (let e = 0, t = E.length; e < t; e++)
            (b = E[e]),
              R
                ? n.texSubImage2D(3553, e, 0, 0, g, M, b)
                : n.texImage2D(3553, e, T, g, M, b);
          i.generateMipmaps = !1;
        } else
          R
            ? (L && n.texStorage2D(3553, C, T, u.width, u.height),
              n.texSubImage2D(3553, 0, 0, 0, g, M, u))
            : n.texImage2D(3553, 0, T, g, M, u);
        k(i, d) && G(a),
          (c.__currentVersion = c.version),
          i.onUpdate && i.onUpdate(i);
      }
      t.__version = i.version;
    }
    function se(t, r, s, a, o) {
      const l = w.convert(s.format, s.encoding),
        c = w.convert(s.type),
        h = V(s.internalFormat, l, c, s.encoding);
      i.get(r).__hasExternalTextures ||
        (32879 === o || 35866 === o
          ? n.texImage3D(o, 0, h, r.width, r.height, r.depth, 0, l, c, null)
          : n.texImage2D(o, 0, h, r.width, r.height, 0, l, c, null)),
        n.bindFramebuffer(36160, t),
        ce(r)
          ? L.framebufferTexture2DMultisampleEXT(
              36160,
              a,
              o,
              i.get(s).__webglTexture,
              0,
              le(r)
            )
          : e.framebufferTexture2D(36160, a, o, i.get(s).__webglTexture, 0),
        n.bindFramebuffer(36160, null);
    }
    function ae(t, n, i) {
      if ((e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer)) {
        let r = 33189;
        if (i || ce(n)) {
          const t = n.depthTexture;
          t &&
            t.isDepthTexture &&
            (t.type === m ? (r = 36012) : t.type === f && (r = 33190));
          const i = le(n);
          ce(n)
            ? L.renderbufferStorageMultisampleEXT(
                36161,
                i,
                r,
                n.width,
                n.height
              )
            : e.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
        } else e.renderbufferStorage(36161, r, n.width, n.height);
        e.framebufferRenderbuffer(36160, 36096, 36161, t);
      } else if (n.depthBuffer && n.stencilBuffer) {
        const r = le(n);
        i && !1 === ce(n)
          ? e.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height)
          : ce(n)
          ? L.renderbufferStorageMultisampleEXT(
              36161,
              r,
              35056,
              n.width,
              n.height
            )
          : e.renderbufferStorage(36161, 34041, n.width, n.height),
          e.framebufferRenderbuffer(36160, 33306, 36161, t);
      } else {
        const t =
            !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture,
          r = w.convert(t.format, t.encoding),
          s = w.convert(t.type),
          a = V(t.internalFormat, r, s, t.encoding),
          o = le(n);
        i && !1 === ce(n)
          ? e.renderbufferStorageMultisample(36161, o, a, n.width, n.height)
          : ce(n)
          ? L.renderbufferStorageMultisampleEXT(36161, o, a, n.width, n.height)
          : e.renderbufferStorage(36161, a, n.width, n.height);
      }
      e.bindRenderbuffer(36161, null);
    }
    function oe(t) {
      const r = i.get(t),
        s = !0 === t.isWebGLCubeRenderTarget;
      if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
        if (s)
          throw new Error(
            "target.depthTexture not supported in Cube render targets"
          );
        !(function (t, r) {
          if (r && r.isWebGLCubeRenderTarget)
            throw new Error(
              "Depth Texture with cube render targets is not supported"
            );
          if (
            (n.bindFramebuffer(36160, t),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
          )
            throw new Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (i.get(r.depthTexture).__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
            Q(r.depthTexture, 0);
          const s = i.get(r.depthTexture).__webglTexture,
            a = le(r);
          if (r.depthTexture.format === y)
            ce(r)
              ? L.framebufferTexture2DMultisampleEXT(
                  36160,
                  36096,
                  3553,
                  s,
                  0,
                  a
                )
              : e.framebufferTexture2D(36160, 36096, 3553, s, 0);
          else {
            if (r.depthTexture.format !== _)
              throw new Error("Unknown depthTexture format");
            ce(r)
              ? L.framebufferTexture2DMultisampleEXT(
                  36160,
                  33306,
                  3553,
                  s,
                  0,
                  a
                )
              : e.framebufferTexture2D(36160, 33306, 3553, s, 0);
          }
        })(r.__webglFramebuffer, t);
      } else if (s) {
        r.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++)
          n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
            (r.__webglDepthbuffer[i] = e.createRenderbuffer()),
            ae(r.__webglDepthbuffer[i], t, !1);
      } else
        n.bindFramebuffer(36160, r.__webglFramebuffer),
          (r.__webglDepthbuffer = e.createRenderbuffer()),
          ae(r.__webglDepthbuffer, t, !1);
      n.bindFramebuffer(36160, null);
    }
    function le(e) {
      return Math.min(R, e.samples);
    }
    function ce(e) {
      const n = i.get(e);
      return (
        S &&
        e.samples > 0 &&
        !0 === t.has("WEBGL_multisampled_render_to_texture") &&
        !1 !== n.__useRenderToTexture
      );
    }
    function he(e, n) {
      const i = e.encoding,
        r = e.format,
        s = e.type;
      return (
        !0 === e.isCompressedTexture ||
          !0 === e.isVideoTexture ||
          e.format === F ||
          (i !== P &&
            (i === D
              ? !1 === S
                ? !0 === t.has("EXT_sRGB") && r === x
                  ? ((e.format = F),
                    (e.minFilter = h),
                    (e.generateMipmaps = !1))
                  : (n = me.sRGBToLinear(n))
                : (r === x && s === d) ||
                  console.warn(
                    "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                  )
              : console.error(
                  "THREE.WebGLTextures: Unsupported texture encoding:",
                  i
                ))),
        n
      );
    }
    (this.allocateTextureUnit = function () {
      const e = Z;
      return (
        e >= T &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              e +
              " texture units while this GPU supports only " +
              T
          ),
        (Z += 1),
        e
      );
    }),
      (this.resetTextureUnits = function () {
        Z = 0;
      }),
      (this.setTexture2D = Q),
      (this.setTexture2DArray = function (e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version
          ? re(r, e, t)
          : (n.activeTexture(33984 + t),
            n.bindTexture(35866, r.__webglTexture));
      }),
      (this.setTexture3D = function (e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version
          ? re(r, e, t)
          : (n.activeTexture(33984 + t),
            n.bindTexture(32879, r.__webglTexture));
      }),
      (this.setTextureCube = function (t, r) {
        const s = i.get(t);
        t.version > 0 && s.__version !== t.version
          ? (function (t, i, r) {
              if (6 !== i.image.length) return;
              const s = ie(t, i),
                a = i.source;
              if (
                (n.activeTexture(33984 + r),
                n.bindTexture(34067, t.__webglTexture),
                a.version !== a.__currentVersion || !0 === s)
              ) {
                e.pixelStorei(37440, i.flipY),
                  e.pixelStorei(37441, i.premultiplyAlpha),
                  e.pixelStorei(3317, i.unpackAlignment),
                  e.pixelStorei(37443, 0);
                const r =
                    i.isCompressedTexture || i.image[0].isCompressedTexture,
                  s = i.image[0] && i.image[0].isDataTexture,
                  o = [];
                for (let e = 0; e < 6; e++)
                  (o[e] =
                    r || s
                      ? s
                        ? i.image[e].image
                        : i.image[e]
                      : B(i.image[e], !1, !0, E)),
                    (o[e] = he(i, o[e]));
                const l = o[0],
                  c = H(l) || S,
                  h = w.convert(i.format, i.encoding),
                  u = w.convert(i.type),
                  d = V(i.internalFormat, h, u, i.encoding),
                  p = S && !0 !== i.isVideoTexture,
                  f = void 0 === t.__version;
                let m,
                  g = W(i, l, c);
                if ((te(34067, i, c), r)) {
                  p && f && n.texStorage2D(34067, g, d, l.width, l.height);
                  for (let e = 0; e < 6; e++) {
                    m = o[e].mipmaps;
                    for (let t = 0; t < m.length; t++) {
                      const r = m[t];
                      i.format !== x
                        ? null !== h
                          ? p
                            ? n.compressedTexSubImage2D(
                                34069 + e,
                                t,
                                0,
                                0,
                                r.width,
                                r.height,
                                h,
                                r.data
                              )
                            : n.compressedTexImage2D(
                                34069 + e,
                                t,
                                d,
                                r.width,
                                r.height,
                                0,
                                r.data
                              )
                          : console.warn(
                              "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                            )
                        : p
                        ? n.texSubImage2D(
                            34069 + e,
                            t,
                            0,
                            0,
                            r.width,
                            r.height,
                            h,
                            u,
                            r.data
                          )
                        : n.texImage2D(
                            34069 + e,
                            t,
                            d,
                            r.width,
                            r.height,
                            0,
                            h,
                            u,
                            r.data
                          );
                    }
                  }
                } else {
                  (m = i.mipmaps),
                    p &&
                      f &&
                      (m.length > 0 && g++,
                      n.texStorage2D(34067, g, d, o[0].width, o[0].height));
                  for (let e = 0; e < 6; e++)
                    if (s) {
                      p
                        ? n.texSubImage2D(
                            34069 + e,
                            0,
                            0,
                            0,
                            o[e].width,
                            o[e].height,
                            h,
                            u,
                            o[e].data
                          )
                        : n.texImage2D(
                            34069 + e,
                            0,
                            d,
                            o[e].width,
                            o[e].height,
                            0,
                            h,
                            u,
                            o[e].data
                          );
                      for (let t = 0; t < m.length; t++) {
                        const i = m[t].image[e].image;
                        p
                          ? n.texSubImage2D(
                              34069 + e,
                              t + 1,
                              0,
                              0,
                              i.width,
                              i.height,
                              h,
                              u,
                              i.data
                            )
                          : n.texImage2D(
                              34069 + e,
                              t + 1,
                              d,
                              i.width,
                              i.height,
                              0,
                              h,
                              u,
                              i.data
                            );
                      }
                    } else {
                      p
                        ? n.texSubImage2D(34069 + e, 0, 0, 0, h, u, o[e])
                        : n.texImage2D(34069 + e, 0, d, h, u, o[e]);
                      for (let t = 0; t < m.length; t++) {
                        const i = m[t];
                        p
                          ? n.texSubImage2D(
                              34069 + e,
                              t + 1,
                              0,
                              0,
                              h,
                              u,
                              i.image[e]
                            )
                          : n.texImage2D(34069 + e, t + 1, d, h, u, i.image[e]);
                      }
                    }
                }
                k(i, c) && G(34067),
                  (a.__currentVersion = a.version),
                  i.onUpdate && i.onUpdate(i);
              }
              t.__version = i.version;
            })(s, t, r)
          : (n.activeTexture(33984 + r),
            n.bindTexture(34067, s.__webglTexture));
      }),
      (this.rebindTextures = function (e, t, n) {
        const r = i.get(e);
        void 0 !== t && se(r.__webglFramebuffer, e, e.texture, 36064, 3553),
          void 0 !== n && oe(e);
      }),
      (this.setupRenderTarget = function (t) {
        const r = t.texture,
          s = i.get(t),
          a = i.get(r);
        t.addEventListener("dispose", X),
          !0 !== t.isWebGLMultipleRenderTargets &&
            (void 0 === a.__webglTexture &&
              (a.__webglTexture = e.createTexture()),
            (a.__version = r.version),
            M.memory.textures++);
        const o = !0 === t.isWebGLCubeRenderTarget,
          l = !0 === t.isWebGLMultipleRenderTargets,
          c = H(t) || S;
        if (o) {
          s.__webglFramebuffer = [];
          for (let t = 0; t < 6; t++)
            s.__webglFramebuffer[t] = e.createFramebuffer();
        } else if (((s.__webglFramebuffer = e.createFramebuffer()), l))
          if (b.drawBuffers) {
            const n = t.texture;
            for (let t = 0, r = n.length; t < r; t++) {
              const r = i.get(n[t]);
              void 0 === r.__webglTexture &&
                ((r.__webglTexture = e.createTexture()), M.memory.textures++);
            }
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
            );
        else if (S && t.samples > 0 && !1 === ce(t)) {
          (s.__webglMultisampledFramebuffer = e.createFramebuffer()),
            (s.__webglColorRenderbuffer = e.createRenderbuffer()),
            e.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
          const i = w.convert(r.format, r.encoding),
            a = w.convert(r.type),
            o = V(r.internalFormat, i, a, r.encoding),
            l = le(t);
          e.renderbufferStorageMultisample(36161, l, o, t.width, t.height),
            n.bindFramebuffer(36160, s.__webglMultisampledFramebuffer),
            e.framebufferRenderbuffer(
              36160,
              36064,
              36161,
              s.__webglColorRenderbuffer
            ),
            e.bindRenderbuffer(36161, null),
            t.depthBuffer &&
              ((s.__webglDepthRenderbuffer = e.createRenderbuffer()),
              ae(s.__webglDepthRenderbuffer, t, !0)),
            n.bindFramebuffer(36160, null);
        }
        if (o) {
          n.bindTexture(34067, a.__webglTexture), te(34067, r, c);
          for (let e = 0; e < 6; e++)
            se(s.__webglFramebuffer[e], t, r, 36064, 34069 + e);
          k(r, c) && G(34067), n.unbindTexture();
        } else if (l) {
          const e = t.texture;
          for (let r = 0, a = e.length; r < a; r++) {
            const a = e[r],
              o = i.get(a);
            n.bindTexture(3553, o.__webglTexture),
              te(3553, a, c),
              se(s.__webglFramebuffer, t, a, 36064 + r, 3553),
              k(a, c) && G(3553);
          }
          n.unbindTexture();
        } else {
          let e = 3553;
          (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
            (S
              ? (e = t.isWebGL3DRenderTarget ? 32879 : 35866)
              : console.error(
                  "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
                )),
            n.bindTexture(e, a.__webglTexture),
            te(e, r, c),
            se(s.__webglFramebuffer, t, r, 36064, e),
            k(r, c) && G(e),
            n.unbindTexture();
        }
        t.depthBuffer && oe(t);
      }),
      (this.updateRenderTargetMipmap = function (e) {
        const t = H(e) || S,
          r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
        for (let s = 0, a = r.length; s < a; s++) {
          const a = r[s];
          if (k(a, t)) {
            const t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
              r = i.get(a).__webglTexture;
            n.bindTexture(t, r), G(t), n.unbindTexture();
          }
        }
      }),
      (this.updateMultisampleRenderTarget = function (t) {
        if (S && t.samples > 0 && !1 === ce(t)) {
          const r = t.width,
            s = t.height;
          let a = 16384;
          const o = [36064],
            l = t.stencilBuffer ? 33306 : 36096;
          t.depthBuffer && o.push(l);
          const c = i.get(t),
            h = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
          !1 === h &&
            (t.depthBuffer && (a |= 256), t.stencilBuffer && (a |= 1024)),
            n.bindFramebuffer(36008, c.__webglMultisampledFramebuffer),
            n.bindFramebuffer(36009, c.__webglFramebuffer),
            !0 === h &&
              (e.invalidateFramebuffer(36008, [l]),
              e.invalidateFramebuffer(36009, [l])),
            e.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728),
            C && e.invalidateFramebuffer(36008, o),
            n.bindFramebuffer(36008, null),
            n.bindFramebuffer(36009, c.__webglMultisampledFramebuffer);
        }
      }),
      (this.setupDepthRenderbuffer = oe),
      (this.setupFrameBufferTexture = se),
      (this.useMultisampledRTT = ce);
  }
  function cs(e, t, n) {
    const i = n.isWebGL2;
    return {
      convert: function (n, r = null) {
        let s;
        if (n === d) return 5121;
        if (1017 === n) return 32819;
        if (1018 === n) return 32820;
        if (1010 === n) return 5120;
        if (1011 === n) return 5122;
        if (n === p) return 5123;
        if (1013 === n) return 5124;
        if (n === f) return 5125;
        if (n === m) return 5126;
        if (n === g)
          return i
            ? 5131
            : ((s = t.get("OES_texture_half_float")),
              null !== s ? s.HALF_FLOAT_OES : null);
        if (1021 === n) return 6406;
        if (n === x) return 6408;
        if (1024 === n) return 6409;
        if (1025 === n) return 6410;
        if (n === y) return 6402;
        if (n === _) return 34041;
        if (1028 === n) return 6403;
        if (1022 === n)
          return (
            console.warn(
              "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
            ),
            6408
          );
        if (n === F)
          return (s = t.get("EXT_sRGB")), null !== s ? s.SRGB_ALPHA_EXT : null;
        if (1029 === n) return 36244;
        if (1030 === n) return 33319;
        if (1031 === n) return 33320;
        if (1033 === n) return 36249;
        if (n === b || n === w || n === M || n === S)
          if (r === D) {
            if (((s = t.get("WEBGL_compressed_texture_s3tc_srgb")), null === s))
              return null;
            if (n === b) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === w) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === M) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === S) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else {
            if (((s = t.get("WEBGL_compressed_texture_s3tc")), null === s))
              return null;
            if (n === b) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (n === w) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (n === M) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (n === S) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
          if (((s = t.get("WEBGL_compressed_texture_pvrtc")), null === s))
            return null;
          if (35840 === n) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === n) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === n) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === n) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (36196 === n)
          return (
            (s = t.get("WEBGL_compressed_texture_etc1")),
            null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null
          );
        if (37492 === n || 37496 === n) {
          if (((s = t.get("WEBGL_compressed_texture_etc")), null === s))
            return null;
          if (37492 === n)
            return r === D ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
          if (37496 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              : s.COMPRESSED_RGBA8_ETC2_EAC;
        }
        if (
          37808 === n ||
          37809 === n ||
          37810 === n ||
          37811 === n ||
          37812 === n ||
          37813 === n ||
          37814 === n ||
          37815 === n ||
          37816 === n ||
          37817 === n ||
          37818 === n ||
          37819 === n ||
          37820 === n ||
          37821 === n
        ) {
          if (((s = t.get("WEBGL_compressed_texture_astc")), null === s))
            return null;
          if (37808 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
              : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (37809 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
              : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (37810 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
              : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (37811 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
              : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (37812 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
              : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (37813 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
              : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (37814 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
              : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (37815 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
              : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (37816 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
              : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (37817 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
              : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (37818 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
              : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (37819 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
              : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (37820 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
              : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (37821 === n)
            return r === D
              ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
        }
        if (36492 === n) {
          if (((s = t.get("EXT_texture_compression_bptc")), null === s))
            return null;
          if (36492 === n)
            return r === D
              ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
              : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        }
        return n === v
          ? i
            ? 34042
            : ((s = t.get("WEBGL_depth_texture")),
              null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null)
          : void 0 !== e[n]
          ? e[n]
          : null;
      },
    };
  }
  ss.prototype.isMeshDistanceMaterial = !0;
  class hs extends Rn {
    constructor(e = []) {
      super(), (this.cameras = e);
    }
  }
  hs.prototype.isArrayCamera = !0;
  class us extends At {
    constructor() {
      super(), (this.type = "Group");
    }
  }
  us.prototype.isGroup = !0;
  const ds = { type: "move" };
  class ps {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        null === this._hand &&
          ((this._hand = new us()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        null === this._targetRay &&
          ((this._targetRay = new us()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new Te()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new Te())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        null === this._grip &&
          ((this._grip = new us()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new Te()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new Te())),
        this._grip
      );
    }
    dispatchEvent(e) {
      return (
        null !== this._targetRay && this._targetRay.dispatchEvent(e),
        null !== this._grip && this._grip.dispatchEvent(e),
        null !== this._hand && this._hand.dispatchEvent(e),
        this
      );
    }
    disconnect(e) {
      return (
        this.dispatchEvent({ type: "disconnected", data: e }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
      );
    }
    update(e, t, n) {
      let i = null,
        r = null,
        s = null;
      const a = this._targetRay,
        o = this._grip,
        l = this._hand;
      if (e && "visible-blurred" !== t.session.visibilityState)
        if (
          (null !== a &&
            ((i = t.getPose(e.targetRaySpace, n)),
            null !== i &&
              (a.matrix.fromArray(i.transform.matrix),
              a.matrix.decompose(a.position, a.rotation, a.scale),
              i.linearVelocity
                ? ((a.hasLinearVelocity = !0),
                  a.linearVelocity.copy(i.linearVelocity))
                : (a.hasLinearVelocity = !1),
              i.angularVelocity
                ? ((a.hasAngularVelocity = !0),
                  a.angularVelocity.copy(i.angularVelocity))
                : (a.hasAngularVelocity = !1),
              this.dispatchEvent(ds))),
          l && e.hand)
        ) {
          s = !0;
          for (const i of e.hand.values()) {
            const e = t.getJointPose(i, n);
            if (void 0 === l.joints[i.jointName]) {
              const e = new us();
              (e.matrixAutoUpdate = !1),
                (e.visible = !1),
                (l.joints[i.jointName] = e),
                l.add(e);
            }
            const r = l.joints[i.jointName];
            null !== e &&
              (r.matrix.fromArray(e.transform.matrix),
              r.matrix.decompose(r.position, r.rotation, r.scale),
              (r.jointRadius = e.radius)),
              (r.visible = null !== e);
          }
          const i = l.joints["index-finger-tip"],
            r = l.joints["thumb-tip"],
            a = i.position.distanceTo(r.position),
            o = 0.02,
            c = 0.005;
          l.inputState.pinching && a > o + c
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: e.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              a <= o - c &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: e.handedness,
                target: this,
              }));
        } else
          null !== o &&
            e.gripSpace &&
            ((r = t.getPose(e.gripSpace, n)),
            null !== r &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1)));
      return (
        null !== a && (a.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== s),
        this
      );
    }
  }
  class fs extends ye {
    constructor(e, t, n, i, r, s, a, l, c, h) {
      if ((h = void 0 !== h ? h : y) !== y && h !== _)
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
        );
      void 0 === n && h === y && (n = p),
        void 0 === n && h === _ && (n = v),
        super(null, i, r, s, a, l, h, n, c),
        (this.image = { width: e, height: t }),
        (this.magFilter = void 0 !== a ? a : o),
        (this.minFilter = void 0 !== l ? l : o),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
  }
  fs.prototype.isDepthTexture = !0;
  class ms extends H {
    constructor(e, t) {
      super();
      const n = this;
      let i = null,
        r = 1,
        s = null,
        a = "local-floor",
        o = null,
        l = null,
        c = null,
        h = null,
        u = null,
        f = null;
      const m = t.getContextAttributes();
      let g = null,
        b = null;
      const w = [],
        M = new Map(),
        S = new Rn();
      S.layers.enable(1), (S.viewport = new _e());
      const T = new Rn();
      T.layers.enable(2), (T.viewport = new _e());
      const E = [S, T],
        A = new hs();
      A.layers.enable(1), A.layers.enable(2);
      let R = null,
        L = null;
      function C(e) {
        const t = M.get(e.inputSource);
        t && t.dispatchEvent({ type: e.type, data: e.inputSource });
      }
      function P() {
        M.forEach(function (e, t) {
          e.disconnect(t);
        }),
          M.clear(),
          (R = null),
          (L = null),
          e.setRenderTarget(g),
          (u = null),
          (h = null),
          (c = null),
          (i = null),
          (b = null),
          B.stop(),
          (n.isPresenting = !1),
          n.dispatchEvent({ type: "sessionend" });
      }
      function I(e) {
        const t = i.inputSources;
        for (let e = 0; e < t.length; e++) {
          const n = "right" === t[e].handedness ? 1 : 0;
          M.set(t[e], w[n]);
        }
        for (let t = 0; t < e.removed.length; t++) {
          const n = e.removed[t],
            i = M.get(n);
          i &&
            (i.dispatchEvent({ type: "disconnected", data: n }), M.delete(n));
        }
        for (let t = 0; t < e.added.length; t++) {
          const n = e.added[t],
            i = M.get(n);
          i && i.dispatchEvent({ type: "connected", data: n });
        }
      }
      (this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (e) {
          let t = w[e];
          return (
            void 0 === t && ((t = new ps()), (w[e] = t)), t.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (e) {
          let t = w[e];
          return void 0 === t && ((t = new ps()), (w[e] = t)), t.getGripSpace();
        }),
        (this.getHand = function (e) {
          let t = w[e];
          return void 0 === t && ((t = new ps()), (w[e] = t)), t.getHandSpace();
        }),
        (this.setFramebufferScaleFactor = function (e) {
          (r = e),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
              );
        }),
        (this.setReferenceSpaceType = function (e) {
          (a = e),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change reference space type while presenting."
              );
        }),
        (this.getReferenceSpace = function () {
          return o || s;
        }),
        (this.setReferenceSpace = function (e) {
          o = e;
        }),
        (this.getBaseLayer = function () {
          return null !== h ? h : u;
        }),
        (this.getBinding = function () {
          return c;
        }),
        (this.getFrame = function () {
          return f;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (o) {
          if (((i = o), null !== i)) {
            if (
              ((g = e.getRenderTarget()),
              i.addEventListener("select", C),
              i.addEventListener("selectstart", C),
              i.addEventListener("selectend", C),
              i.addEventListener("squeeze", C),
              i.addEventListener("squeezestart", C),
              i.addEventListener("squeezeend", C),
              i.addEventListener("end", P),
              i.addEventListener("inputsourceschange", I),
              !0 !== m.xrCompatible && (await t.makeXRCompatible()),
              void 0 === i.renderState.layers || !1 === e.capabilities.isWebGL2)
            ) {
              const n = {
                antialias: void 0 !== i.renderState.layers || m.antialias,
                alpha: m.alpha,
                depth: m.depth,
                stencil: m.stencil,
                framebufferScaleFactor: r,
              };
              (u = new XRWebGLLayer(i, t, n)),
                i.updateRenderState({ baseLayer: u }),
                (b = new be(u.framebufferWidth, u.framebufferHeight, {
                  format: x,
                  type: d,
                  encoding: e.outputEncoding,
                }));
            } else {
              let n = null,
                s = null,
                a = null;
              m.depth &&
                ((a = m.stencil ? 35056 : 33190),
                (n = m.stencil ? _ : y),
                (s = m.stencil ? v : p));
              const o = {
                colorFormat: e.outputEncoding === D ? 35907 : 32856,
                depthFormat: a,
                scaleFactor: r,
              };
              (c = new XRWebGLBinding(i, t)),
                (h = c.createProjectionLayer(o)),
                i.updateRenderState({ layers: [h] }),
                (b = new be(h.textureWidth, h.textureHeight, {
                  format: x,
                  type: d,
                  depthTexture: new fs(
                    h.textureWidth,
                    h.textureHeight,
                    s,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    n
                  ),
                  stencilBuffer: m.stencil,
                  encoding: e.outputEncoding,
                  samples: m.antialias ? 4 : 0,
                })),
                (e.properties.get(b).__ignoreDepthValues = h.ignoreDepthValues);
            }
            (b.isXRRenderTarget = !0),
              this.setFoveation(1),
              (s = await i.requestReferenceSpace(a)),
              B.setContext(i),
              B.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" });
          }
        });
      const N = new Te(),
        O = new Te();
      function z(e, t) {
        null === t
          ? e.matrixWorld.copy(e.matrix)
          : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
          e.matrixWorldInverse.copy(e.matrixWorld).invert();
      }
      (this.updateCamera = function (e) {
        if (null === i) return;
        (A.near = T.near = S.near = e.near),
          (A.far = T.far = S.far = e.far),
          (R === A.near && L === A.far) ||
            (i.updateRenderState({ depthNear: A.near, depthFar: A.far }),
            (R = A.near),
            (L = A.far));
        const t = e.parent,
          n = A.cameras;
        z(A, t);
        for (let e = 0; e < n.length; e++) z(n[e], t);
        A.matrixWorld.decompose(A.position, A.quaternion, A.scale),
          e.position.copy(A.position),
          e.quaternion.copy(A.quaternion),
          e.scale.copy(A.scale),
          e.matrix.copy(A.matrix),
          e.matrixWorld.copy(A.matrixWorld);
        const r = e.children;
        for (let e = 0, t = r.length; e < t; e++) r[e].updateMatrixWorld(!0);
        2 === n.length
          ? (function (e, t, n) {
              N.setFromMatrixPosition(t.matrixWorld),
                O.setFromMatrixPosition(n.matrixWorld);
              const i = N.distanceTo(O),
                r = t.projectionMatrix.elements,
                s = n.projectionMatrix.elements,
                a = r[14] / (r[10] - 1),
                o = r[14] / (r[10] + 1),
                l = (r[9] + 1) / r[5],
                c = (r[9] - 1) / r[5],
                h = (r[8] - 1) / r[0],
                u = (s[8] + 1) / s[0],
                d = a * h,
                p = a * u,
                f = i / (-h + u),
                m = f * -h;
              t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                e.translateX(m),
                e.translateZ(f),
                e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                e.matrixWorldInverse.copy(e.matrixWorld).invert();
              const g = a + f,
                v = o + f,
                x = d - m,
                y = p + (i - m),
                _ = ((l * o) / v) * g,
                b = ((c * o) / v) * g;
              e.projectionMatrix.makePerspective(x, y, _, b, g, v);
            })(A, S, T)
          : A.projectionMatrix.copy(S.projectionMatrix);
      }),
        (this.getCamera = function () {
          return A;
        }),
        (this.getFoveation = function () {
          return null !== h
            ? h.fixedFoveation
            : null !== u
            ? u.fixedFoveation
            : void 0;
        }),
        (this.setFoveation = function (e) {
          null !== h && (h.fixedFoveation = e),
            null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = e);
        });
      let U = null;
      const B = new Hn();
      B.setAnimationLoop(function (t, n) {
        if (((l = n.getViewerPose(o || s)), (f = n), null !== l)) {
          const t = l.views;
          null !== u &&
            (e.setRenderTargetFramebuffer(b, u.framebuffer),
            e.setRenderTarget(b));
          let n = !1;
          t.length !== A.cameras.length && ((A.cameras.length = 0), (n = !0));
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            let s = null;
            if (null !== u) s = u.getViewport(r);
            else {
              const t = c.getViewSubImage(h, r);
              (s = t.viewport),
                0 === i &&
                  (e.setRenderTargetTextures(
                    b,
                    t.colorTexture,
                    h.ignoreDepthValues ? void 0 : t.depthStencilTexture
                  ),
                  e.setRenderTarget(b));
            }
            const a = E[i];
            a.matrix.fromArray(r.transform.matrix),
              a.projectionMatrix.fromArray(r.projectionMatrix),
              a.viewport.set(s.x, s.y, s.width, s.height),
              0 === i && A.matrix.copy(a.matrix),
              !0 === n && A.cameras.push(a);
          }
        }
        const r = i.inputSources;
        for (let e = 0; e < w.length; e++) {
          const t = r[e],
            i = M.get(t);
          void 0 !== i && i.update(t, n, o || s);
        }
        U && U(t, n), (f = null);
      }),
        (this.setAnimationLoop = function (e) {
          U = e;
        }),
        (this.dispose = function () {});
    }
  }
  function gs(e, t) {
    function n(n, i) {
      (n.opacity.value = i.opacity),
        i.color && n.diffuse.value.copy(i.color),
        i.emissive &&
          n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
        i.map && (n.map.value = i.map),
        i.alphaMap && (n.alphaMap.value = i.alphaMap),
        i.bumpMap &&
          ((n.bumpMap.value = i.bumpMap),
          (n.bumpScale.value = i.bumpScale),
          1 === i.side && (n.bumpScale.value *= -1)),
        i.displacementMap &&
          ((n.displacementMap.value = i.displacementMap),
          (n.displacementScale.value = i.displacementScale),
          (n.displacementBias.value = i.displacementBias)),
        i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
        i.normalMap &&
          ((n.normalMap.value = i.normalMap),
          n.normalScale.value.copy(i.normalScale),
          1 === i.side && n.normalScale.value.negate()),
        i.specularMap && (n.specularMap.value = i.specularMap),
        i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
      const r = t.get(i).envMap;
      if (
        (r &&
          ((n.envMap.value = r),
          (n.flipEnvMap.value =
            r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
          (n.reflectivity.value = i.reflectivity),
          (n.ior.value = i.ior),
          (n.refractionRatio.value = i.refractionRatio)),
        i.lightMap)
      ) {
        n.lightMap.value = i.lightMap;
        const t = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
        n.lightMapIntensity.value = i.lightMapIntensity * t;
      }
      let s, a;
      i.aoMap &&
        ((n.aoMap.value = i.aoMap),
        (n.aoMapIntensity.value = i.aoMapIntensity)),
        i.map
          ? (s = i.map)
          : i.specularMap
          ? (s = i.specularMap)
          : i.displacementMap
          ? (s = i.displacementMap)
          : i.normalMap
          ? (s = i.normalMap)
          : i.bumpMap
          ? (s = i.bumpMap)
          : i.roughnessMap
          ? (s = i.roughnessMap)
          : i.metalnessMap
          ? (s = i.metalnessMap)
          : i.alphaMap
          ? (s = i.alphaMap)
          : i.emissiveMap
          ? (s = i.emissiveMap)
          : i.clearcoatMap
          ? (s = i.clearcoatMap)
          : i.clearcoatNormalMap
          ? (s = i.clearcoatNormalMap)
          : i.clearcoatRoughnessMap
          ? (s = i.clearcoatRoughnessMap)
          : i.specularIntensityMap
          ? (s = i.specularIntensityMap)
          : i.specularColorMap
          ? (s = i.specularColorMap)
          : i.transmissionMap
          ? (s = i.transmissionMap)
          : i.thicknessMap
          ? (s = i.thicknessMap)
          : i.sheenColorMap
          ? (s = i.sheenColorMap)
          : i.sheenRoughnessMap && (s = i.sheenRoughnessMap),
        void 0 !== s &&
          (s.isWebGLRenderTarget && (s = s.texture),
          !0 === s.matrixAutoUpdate && s.updateMatrix(),
          n.uvTransform.value.copy(s.matrix)),
        i.aoMap ? (a = i.aoMap) : i.lightMap && (a = i.lightMap),
        void 0 !== a &&
          (a.isWebGLRenderTarget && (a = a.texture),
          !0 === a.matrixAutoUpdate && a.updateMatrix(),
          n.uv2Transform.value.copy(a.matrix));
    }
    return {
      refreshFogUniforms: function (e, t) {
        e.fogColor.value.copy(t.color),
          t.isFog
            ? ((e.fogNear.value = t.near), (e.fogFar.value = t.far))
            : t.isFogExp2 && (e.fogDensity.value = t.density);
      },
      refreshMaterialUniforms: function (e, i, r, s, a) {
        i.isMeshBasicMaterial || i.isMeshLambertMaterial
          ? n(e, i)
          : i.isMeshToonMaterial
          ? (n(e, i),
            (function (e, t) {
              t.gradientMap && (e.gradientMap.value = t.gradientMap);
            })(e, i))
          : i.isMeshPhongMaterial
          ? (n(e, i),
            (function (e, t) {
              e.specular.value.copy(t.specular),
                (e.shininess.value = Math.max(t.shininess, 1e-4));
            })(e, i))
          : i.isMeshStandardMaterial
          ? (n(e, i),
            (function (e, n) {
              (e.roughness.value = n.roughness),
                (e.metalness.value = n.metalness),
                n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
                n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
                t.get(n).envMap &&
                  (e.envMapIntensity.value = n.envMapIntensity);
            })(e, i),
            i.isMeshPhysicalMaterial &&
              (function (e, t, n) {
                (e.ior.value = t.ior),
                  t.sheen > 0 &&
                    (e.sheenColor.value
                      .copy(t.sheenColor)
                      .multiplyScalar(t.sheen),
                    (e.sheenRoughness.value = t.sheenRoughness),
                    t.sheenColorMap &&
                      (e.sheenColorMap.value = t.sheenColorMap),
                    t.sheenRoughnessMap &&
                      (e.sheenRoughnessMap.value = t.sheenRoughnessMap)),
                  t.clearcoat > 0 &&
                    ((e.clearcoat.value = t.clearcoat),
                    (e.clearcoatRoughness.value = t.clearcoatRoughness),
                    t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap),
                    t.clearcoatRoughnessMap &&
                      (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
                    t.clearcoatNormalMap &&
                      (e.clearcoatNormalScale.value.copy(
                        t.clearcoatNormalScale
                      ),
                      (e.clearcoatNormalMap.value = t.clearcoatNormalMap),
                      1 === t.side && e.clearcoatNormalScale.value.negate())),
                  t.transmission > 0 &&
                    ((e.transmission.value = t.transmission),
                    (e.transmissionSamplerMap.value = n.texture),
                    e.transmissionSamplerSize.value.set(n.width, n.height),
                    t.transmissionMap &&
                      (e.transmissionMap.value = t.transmissionMap),
                    (e.thickness.value = t.thickness),
                    t.thicknessMap && (e.thicknessMap.value = t.thicknessMap),
                    (e.attenuationDistance.value = t.attenuationDistance),
                    e.attenuationColor.value.copy(t.attenuationColor)),
                  (e.specularIntensity.value = t.specularIntensity),
                  e.specularColor.value.copy(t.specularColor),
                  t.specularIntensityMap &&
                    (e.specularIntensityMap.value = t.specularIntensityMap),
                  t.specularColorMap &&
                    (e.specularColorMap.value = t.specularColorMap);
              })(e, i, a))
          : i.isMeshMatcapMaterial
          ? (n(e, i),
            (function (e, t) {
              t.matcap && (e.matcap.value = t.matcap);
            })(e, i))
          : i.isMeshDepthMaterial
          ? n(e, i)
          : i.isMeshDistanceMaterial
          ? (n(e, i),
            (function (e, t) {
              e.referencePosition.value.copy(t.referencePosition),
                (e.nearDistance.value = t.nearDistance),
                (e.farDistance.value = t.farDistance);
            })(e, i))
          : i.isMeshNormalMaterial
          ? n(e, i)
          : i.isLineBasicMaterial
          ? ((function (e, t) {
              e.diffuse.value.copy(t.color), (e.opacity.value = t.opacity);
            })(e, i),
            i.isLineDashedMaterial &&
              (function (e, t) {
                (e.dashSize.value = t.dashSize),
                  (e.totalSize.value = t.dashSize + t.gapSize),
                  (e.scale.value = t.scale);
              })(e, i))
          : i.isPointsMaterial
          ? (function (e, t, n, i) {
              let r;
              e.diffuse.value.copy(t.color),
                (e.opacity.value = t.opacity),
                (e.size.value = t.size * n),
                (e.scale.value = 0.5 * i),
                t.map && (e.map.value = t.map),
                t.alphaMap && (e.alphaMap.value = t.alphaMap),
                t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest),
                t.map ? (r = t.map) : t.alphaMap && (r = t.alphaMap),
                void 0 !== r &&
                  (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                  e.uvTransform.value.copy(r.matrix));
            })(e, i, r, s)
          : i.isSpriteMaterial
          ? (function (e, t) {
              let n;
              e.diffuse.value.copy(t.color),
                (e.opacity.value = t.opacity),
                (e.rotation.value = t.rotation),
                t.map && (e.map.value = t.map),
                t.alphaMap && (e.alphaMap.value = t.alphaMap),
                t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest),
                t.map ? (n = t.map) : t.alphaMap && (n = t.alphaMap),
                void 0 !== n &&
                  (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                  e.uvTransform.value.copy(n.matrix));
            })(e, i)
          : i.isShadowMaterial
          ? (e.color.value.copy(i.color), (e.opacity.value = i.opacity))
          : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      },
    };
  }
  function vs(e = {}) {
    const t =
        void 0 !== e.canvas
          ? e.canvas
          : (function () {
              const e = ne("canvas");
              return (e.style.display = "block"), e;
            })(),
      n = void 0 !== e.context ? e.context : null,
      i = void 0 === e.depth || e.depth,
      r = void 0 === e.stencil || e.stencil,
      s = void 0 !== e.antialias && e.antialias,
      a = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
      o = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
      l = void 0 !== e.powerPreference ? e.powerPreference : "default",
      c =
        void 0 !== e.failIfMajorPerformanceCaveat &&
        e.failIfMajorPerformanceCaveat;
    let h;
    h =
      null !== n
        ? n.getContextAttributes().alpha
        : void 0 !== e.alpha && e.alpha;
    let p = null,
      f = null;
    const v = [],
      y = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0 }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputEncoding = P),
      (this.physicallyCorrectLights = !1),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1);
    const _ = this;
    let b = !1,
      w = 0,
      M = 0,
      S = null,
      T = -1,
      E = null;
    const A = new _e(),
      R = new _e();
    let L = null,
      C = t.width,
      D = t.height,
      I = 1,
      N = null,
      O = null;
    const z = new _e(0, 0, C, D),
      U = new _e(0, 0, C, D);
    let B = !1;
    const F = new Fn();
    let H = !1,
      k = !1,
      G = null;
    const V = new nt(),
      W = new $(),
      j = new Te(),
      q = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function X() {
      return null === S ? I : 1;
    }
    let Y,
      J,
      Z,
      Q,
      ee,
      te,
      ie,
      re,
      se,
      ae,
      oe,
      le,
      ce,
      he,
      ue,
      de,
      pe,
      fe,
      me,
      ge,
      ve,
      xe,
      ye,
      we = n;
    function Me(e, n) {
      for (let i = 0; i < e.length; i++) {
        const r = e[i],
          s = t.getContext(r, n);
        if (null !== s) return s;
      }
      return null;
    }
    try {
      const e = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: s,
        premultipliedAlpha: a,
        preserveDrawingBuffer: o,
        powerPreference: l,
        failIfMajorPerformanceCaveat: c,
      };
      if (
        ("setAttribute" in t && t.setAttribute("data-engine", "three.js r140"),
        t.addEventListener("webglcontextlost", Ae, !1),
        t.addEventListener("webglcontextrestored", Re, !1),
        null === we)
      ) {
        const t = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (!0 === _.isWebGL1Renderer && t.shift(), (we = Me(t, e)), null === we)
        )
          throw Me(t)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      void 0 === we.getShaderPrecisionFormat &&
        (we.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (e) {
      throw (console.error("THREE.WebGLRenderer: " + e.message), e);
    }
    function Se() {
      (Y = new di(we)),
        (J = new Jn(we, Y, e)),
        Y.init(J),
        (xe = new cs(we, Y, J)),
        (Z = new os(we, Y, J)),
        (Q = new mi(we)),
        (ee = new Xr()),
        (te = new ls(we, Y, Z, ee, J, xe, Q)),
        (ie = new Kn(_)),
        (re = new ui(_)),
        (se = new kn(we, J)),
        (ye = new Xn(we, Y, se, J)),
        (ae = new pi(we, se, Q, ye)),
        (oe = new _i(we, ae, se, Q)),
        (me = new yi(we, J, te)),
        (de = new Zn(ee)),
        (le = new qr(_, ie, re, Y, J, ye, de)),
        (ce = new gs(_, ee)),
        (he = new Kr()),
        (ue = new is(Y, J)),
        (fe = new qn(_, ie, Z, oe, h, a)),
        (pe = new as(_, oe, J)),
        (ge = new Yn(we, Y, Q, J)),
        (ve = new fi(we, Y, Q, J)),
        (Q.programs = le.programs),
        (_.capabilities = J),
        (_.extensions = Y),
        (_.properties = ee),
        (_.renderLists = he),
        (_.shadowMap = pe),
        (_.state = Z),
        (_.info = Q);
    }
    Se();
    const Ee = new ms(_, we);
    function Ae(e) {
      e.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (b = !0);
    }
    function Re() {
      console.log("THREE.WebGLRenderer: Context Restored."), (b = !1);
      const e = Q.autoReset,
        t = pe.enabled,
        n = pe.autoUpdate,
        i = pe.needsUpdate,
        r = pe.type;
      Se(),
        (Q.autoReset = e),
        (pe.enabled = t),
        (pe.autoUpdate = n),
        (pe.needsUpdate = i),
        (pe.type = r);
    }
    function Le(e) {
      const t = e.target;
      t.removeEventListener("dispose", Le),
        (function (e) {
          (function (e) {
            const t = ee.get(e).programs;
            void 0 !== t &&
              (t.forEach(function (e) {
                le.releaseProgram(e);
              }),
              e.isShaderMaterial && le.releaseShaderCache(e));
          })(e),
            ee.remove(e);
        })(t);
    }
    (this.xr = Ee),
      (this.getContext = function () {
        return we;
      }),
      (this.getContextAttributes = function () {
        return we.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const e = Y.get("WEBGL_lose_context");
        e && e.loseContext();
      }),
      (this.forceContextRestore = function () {
        const e = Y.get("WEBGL_lose_context");
        e && e.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return I;
      }),
      (this.setPixelRatio = function (e) {
        void 0 !== e && ((I = e), this.setSize(C, D, !1));
      }),
      (this.getSize = function (e) {
        return e.set(C, D);
      }),
      (this.setSize = function (e, n, i) {
        Ee.isPresenting
          ? console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            )
          : ((C = e),
            (D = n),
            (t.width = Math.floor(e * I)),
            (t.height = Math.floor(n * I)),
            !1 !== i &&
              ((t.style.width = e + "px"), (t.style.height = n + "px")),
            this.setViewport(0, 0, e, n));
      }),
      (this.getDrawingBufferSize = function (e) {
        return e.set(C * I, D * I).floor();
      }),
      (this.setDrawingBufferSize = function (e, n, i) {
        (C = e),
          (D = n),
          (I = i),
          (t.width = Math.floor(e * i)),
          (t.height = Math.floor(n * i)),
          this.setViewport(0, 0, e, n);
      }),
      (this.getCurrentViewport = function (e) {
        return e.copy(A);
      }),
      (this.getViewport = function (e) {
        return e.copy(z);
      }),
      (this.setViewport = function (e, t, n, i) {
        e.isVector4 ? z.set(e.x, e.y, e.z, e.w) : z.set(e, t, n, i),
          Z.viewport(A.copy(z).multiplyScalar(I).floor());
      }),
      (this.getScissor = function (e) {
        return e.copy(U);
      }),
      (this.setScissor = function (e, t, n, i) {
        e.isVector4 ? U.set(e.x, e.y, e.z, e.w) : U.set(e, t, n, i),
          Z.scissor(R.copy(U).multiplyScalar(I).floor());
      }),
      (this.getScissorTest = function () {
        return B;
      }),
      (this.setScissorTest = function (e) {
        Z.setScissorTest((B = e));
      }),
      (this.setOpaqueSort = function (e) {
        N = e;
      }),
      (this.setTransparentSort = function (e) {
        O = e;
      }),
      (this.getClearColor = function (e) {
        return e.copy(fe.getClearColor());
      }),
      (this.setClearColor = function () {
        fe.setClearColor.apply(fe, arguments);
      }),
      (this.getClearAlpha = function () {
        return fe.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        fe.setClearAlpha.apply(fe, arguments);
      }),
      (this.clear = function (e = !0, t = !0, n = !0) {
        let i = 0;
        e && (i |= 16384), t && (i |= 256), n && (i |= 1024), we.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", Ae, !1),
          t.removeEventListener("webglcontextrestored", Re, !1),
          he.dispose(),
          ue.dispose(),
          ee.dispose(),
          ie.dispose(),
          re.dispose(),
          oe.dispose(),
          ye.dispose(),
          le.dispose(),
          Ee.dispose(),
          Ee.removeEventListener("sessionstart", Pe),
          Ee.removeEventListener("sessionend", De),
          G && (G.dispose(), (G = null)),
          Ie.stop();
      }),
      (this.renderBufferDirect = function (e, t, n, i, r, s) {
        null === t && (t = q);
        const a = r.isMesh && r.matrixWorld.determinant() < 0,
          o = (function (e, t, n, i, r) {
            !0 !== t.isScene && (t = q), te.resetTextureUnits();
            const s = t.fog,
              a = i.isMeshStandardMaterial ? t.environment : null,
              o =
                null === S
                  ? _.outputEncoding
                  : !0 === S.isXRRenderTarget
                  ? S.texture.encoding
                  : P,
              l = (i.isMeshStandardMaterial ? re : ie).get(i.envMap || a),
              c =
                !0 === i.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              h = !!i.normalMap && !!n.attributes.tangent,
              u = !!n.morphAttributes.position,
              d = !!n.morphAttributes.normal,
              p = !!n.morphAttributes.color,
              m = i.toneMapped ? _.toneMapping : 0,
              g =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              v = void 0 !== g ? g.length : 0,
              x = ee.get(i),
              y = f.state.lights;
            if (!0 === H && (!0 === k || e !== E)) {
              const t = e === E && i.id === T;
              de.setState(i, e, t);
            }
            let b = !1;
            i.version === x.__version
              ? (x.needsLights && x.lightsStateVersion !== y.state.version) ||
                x.outputEncoding !== o ||
                (r.isInstancedMesh && !1 === x.instancing)
                ? (b = !0)
                : r.isInstancedMesh || !0 !== x.instancing
                ? r.isSkinnedMesh && !1 === x.skinning
                  ? (b = !0)
                  : r.isSkinnedMesh || !0 !== x.skinning
                  ? x.envMap !== l || (!0 === i.fog && x.fog !== s)
                    ? (b = !0)
                    : void 0 === x.numClippingPlanes ||
                      (x.numClippingPlanes === de.numPlanes &&
                        x.numIntersection === de.numIntersection)
                    ? (x.vertexAlphas !== c ||
                        x.vertexTangents !== h ||
                        x.morphTargets !== u ||
                        x.morphNormals !== d ||
                        x.morphColors !== p ||
                        x.toneMapping !== m ||
                        (!0 === J.isWebGL2 && x.morphTargetsCount !== v)) &&
                      (b = !0)
                    : (b = !0)
                  : (b = !0)
                : (b = !0)
              : ((b = !0), (x.__version = i.version));
            let w = x.currentProgram;
            !0 === b && (w = Be(i, t, r));
            let M = !1,
              A = !1,
              R = !1;
            const L = w.getUniforms(),
              C = x.uniforms;
            if (
              (Z.useProgram(w.program) && ((M = !0), (A = !0), (R = !0)),
              i.id !== T && ((T = i.id), (A = !0)),
              M || E !== e)
            ) {
              if (
                (L.setValue(we, "projectionMatrix", e.projectionMatrix),
                J.logarithmicDepthBuffer &&
                  L.setValue(
                    we,
                    "logDepthBufFC",
                    2 / (Math.log(e.far + 1) / Math.LN2)
                  ),
                E !== e && ((E = e), (A = !0), (R = !0)),
                i.isShaderMaterial ||
                  i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshStandardMaterial ||
                  i.envMap)
              ) {
                const t = L.map.cameraPosition;
                void 0 !== t &&
                  t.setValue(we, j.setFromMatrixPosition(e.matrixWorld));
              }
              (i.isMeshPhongMaterial ||
                i.isMeshToonMaterial ||
                i.isMeshLambertMaterial ||
                i.isMeshBasicMaterial ||
                i.isMeshStandardMaterial ||
                i.isShaderMaterial) &&
                L.setValue(we, "isOrthographic", !0 === e.isOrthographicCamera),
                (i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshLambertMaterial ||
                  i.isMeshBasicMaterial ||
                  i.isMeshStandardMaterial ||
                  i.isShaderMaterial ||
                  i.isShadowMaterial ||
                  r.isSkinnedMesh) &&
                  L.setValue(we, "viewMatrix", e.matrixWorldInverse);
            }
            if (r.isSkinnedMesh) {
              L.setOptional(we, r, "bindMatrix"),
                L.setOptional(we, r, "bindMatrixInverse");
              const e = r.skeleton;
              e &&
                (J.floatVertexTextures
                  ? (null === e.boneTexture && e.computeBoneTexture(),
                    L.setValue(we, "boneTexture", e.boneTexture, te),
                    L.setValue(we, "boneTextureSize", e.boneTextureSize))
                  : console.warn(
                      "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                    ));
            }
            const N = n.morphAttributes;
            var O, z;
            return (
              (void 0 !== N.position ||
                void 0 !== N.normal ||
                (void 0 !== N.color && !0 === J.isWebGL2)) &&
                me.update(r, n, i, w),
              (A || x.receiveShadow !== r.receiveShadow) &&
                ((x.receiveShadow = r.receiveShadow),
                L.setValue(we, "receiveShadow", r.receiveShadow)),
              A &&
                (L.setValue(we, "toneMappingExposure", _.toneMappingExposure),
                x.needsLights &&
                  ((z = R),
                  ((O = C).ambientLightColor.needsUpdate = z),
                  (O.lightProbe.needsUpdate = z),
                  (O.directionalLights.needsUpdate = z),
                  (O.directionalLightShadows.needsUpdate = z),
                  (O.pointLights.needsUpdate = z),
                  (O.pointLightShadows.needsUpdate = z),
                  (O.spotLights.needsUpdate = z),
                  (O.spotLightShadows.needsUpdate = z),
                  (O.rectAreaLights.needsUpdate = z),
                  (O.hemisphereLights.needsUpdate = z)),
                s && !0 === i.fog && ce.refreshFogUniforms(C, s),
                ce.refreshMaterialUniforms(C, i, I, D, G),
                Sr.upload(we, x.uniformsList, C, te)),
              i.isShaderMaterial &&
                !0 === i.uniformsNeedUpdate &&
                (Sr.upload(we, x.uniformsList, C, te),
                (i.uniformsNeedUpdate = !1)),
              i.isSpriteMaterial && L.setValue(we, "center", r.center),
              L.setValue(we, "modelViewMatrix", r.modelViewMatrix),
              L.setValue(we, "normalMatrix", r.normalMatrix),
              L.setValue(we, "modelMatrix", r.matrixWorld),
              w
            );
          })(e, t, n, i, r);
        Z.setMaterial(i, a);
        let l = n.index;
        const c = n.attributes.position;
        if (null === l) {
          if (void 0 === c || 0 === c.count) return;
        } else if (0 === l.count) return;
        let h,
          u = 1;
        !0 === i.wireframe && ((l = ae.getWireframeAttribute(n)), (u = 2)),
          ye.setup(r, i, o, n, l);
        let d = ge;
        null !== l && ((h = se.get(l)), (d = ve), d.setIndex(h));
        const p = null !== l ? l.count : c.count,
          m = n.drawRange.start * u,
          g = n.drawRange.count * u,
          v = null !== s ? s.start * u : 0,
          x = null !== s ? s.count * u : 1 / 0,
          y = Math.max(m, v),
          b = Math.min(p, m + g, v + x) - 1,
          w = Math.max(0, b - y + 1);
        if (0 !== w) {
          if (r.isMesh)
            !0 === i.wireframe
              ? (Z.setLineWidth(i.wireframeLinewidth * X()), d.setMode(1))
              : d.setMode(4);
          else if (r.isLine) {
            let e = i.linewidth;
            void 0 === e && (e = 1),
              Z.setLineWidth(e * X()),
              r.isLineSegments
                ? d.setMode(1)
                : r.isLineLoop
                ? d.setMode(2)
                : d.setMode(3);
          } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
          if (r.isInstancedMesh) d.renderInstances(y, w, r.count);
          else if (n.isInstancedBufferGeometry) {
            const e = Math.min(n.instanceCount, n._maxInstanceCount);
            d.renderInstances(y, w, e);
          } else d.render(y, w);
        }
      }),
      (this.compile = function (e, t) {
        (f = ue.get(e)),
          f.init(),
          y.push(f),
          e.traverseVisible(function (e) {
            e.isLight &&
              e.layers.test(t.layers) &&
              (f.pushLight(e), e.castShadow && f.pushShadow(e));
          }),
          f.setupLights(_.physicallyCorrectLights),
          e.traverse(function (t) {
            const n = t.material;
            if (n)
              if (Array.isArray(n))
                for (let i = 0; i < n.length; i++) Be(n[i], e, t);
              else Be(n, e, t);
          }),
          y.pop(),
          (f = null);
      });
    let Ce = null;
    function Pe() {
      Ie.stop();
    }
    function De() {
      Ie.start();
    }
    const Ie = new Hn();
    function Ne(e, t, n, i) {
      if (!1 === e.visible) return;
      if (e.layers.test(t.layers))
        if (e.isGroup) n = e.renderOrder;
        else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
        else if (e.isLight) f.pushLight(e), e.castShadow && f.pushShadow(e);
        else if (e.isSprite) {
          if (!e.frustumCulled || F.intersectsSprite(e)) {
            i && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);
            const t = oe.update(e),
              r = e.material;
            r.visible && p.push(e, t, r, n, j.z, null);
          }
        } else if (
          (e.isMesh || e.isLine || e.isPoints) &&
          (e.isSkinnedMesh &&
            e.skeleton.frame !== Q.render.frame &&
            (e.skeleton.update(), (e.skeleton.frame = Q.render.frame)),
          !e.frustumCulled || F.intersectsObject(e))
        ) {
          i && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);
          const t = oe.update(e),
            r = e.material;
          if (Array.isArray(r)) {
            const i = t.groups;
            for (let s = 0, a = i.length; s < a; s++) {
              const a = i[s],
                o = r[a.materialIndex];
              o && o.visible && p.push(e, t, o, n, j.z, a);
            }
          } else r.visible && p.push(e, t, r, n, j.z, null);
        }
      const r = e.children;
      for (let e = 0, s = r.length; e < s; e++) Ne(r[e], t, n, i);
    }
    function Oe(e, t, n, i) {
      const r = e.opaque,
        a = e.transmissive,
        o = e.transparent;
      f.setupLightsView(n),
        a.length > 0 &&
          (function (e, t, n) {
            const i = J.isWebGL2;
            null === G &&
              (G = new be(1, 1, {
                generateMipmaps: !0,
                type: Y.has("EXT_color_buffer_half_float") ? g : d,
                minFilter: u,
                samples: i && !0 === s ? 4 : 0,
              })),
              _.getDrawingBufferSize(W),
              i ? G.setSize(W.x, W.y) : G.setSize(K(W.x), K(W.y));
            const r = _.getRenderTarget();
            _.setRenderTarget(G), _.clear();
            const a = _.toneMapping;
            (_.toneMapping = 0),
              ze(e, t, n),
              (_.toneMapping = a),
              te.updateMultisampleRenderTarget(G),
              te.updateRenderTargetMipmap(G),
              _.setRenderTarget(r);
          })(r, t, n),
        i && Z.viewport(A.copy(i)),
        r.length > 0 && ze(r, t, n),
        a.length > 0 && ze(a, t, n),
        o.length > 0 && ze(o, t, n),
        Z.buffers.depth.setTest(!0),
        Z.buffers.depth.setMask(!0),
        Z.buffers.color.setMask(!0),
        Z.setPolygonOffset(!1);
    }
    function ze(e, t, n) {
      const i = !0 === t.isScene ? t.overrideMaterial : null;
      for (let r = 0, s = e.length; r < s; r++) {
        const s = e[r],
          a = s.object,
          o = s.geometry,
          l = null === i ? s.material : i,
          c = s.group;
        a.layers.test(n.layers) && Ue(a, t, n, o, l, c);
      }
    }
    function Ue(e, t, n, i, r, s) {
      e.onBeforeRender(_, t, n, i, r, s),
        e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
        e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
        r.onBeforeRender(_, t, n, i, e, s),
        !0 === r.transparent && 2 === r.side
          ? ((r.side = 1),
            (r.needsUpdate = !0),
            _.renderBufferDirect(n, t, i, r, e, s),
            (r.side = 0),
            (r.needsUpdate = !0),
            _.renderBufferDirect(n, t, i, r, e, s),
            (r.side = 2))
          : _.renderBufferDirect(n, t, i, r, e, s),
        e.onAfterRender(_, t, n, i, r, s);
    }
    function Be(e, t, n) {
      !0 !== t.isScene && (t = q);
      const i = ee.get(e),
        r = f.state.lights,
        s = f.state.shadowsArray,
        a = r.state.version,
        o = le.getParameters(e, r.state, s, t, n),
        l = le.getProgramCacheKey(o);
      let c = i.programs;
      (i.environment = e.isMeshStandardMaterial ? t.environment : null),
        (i.fog = t.fog),
        (i.envMap = (e.isMeshStandardMaterial ? re : ie).get(
          e.envMap || i.environment
        )),
        void 0 === c &&
          (e.addEventListener("dispose", Le),
          (c = new Map()),
          (i.programs = c));
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === a)
          return Fe(e, o), h;
      } else
        (o.uniforms = le.getUniforms(e)),
          e.onBuild(n, o, _),
          e.onBeforeCompile(o, _),
          (h = le.acquireProgram(o, l)),
          c.set(l, h),
          (i.uniforms = o.uniforms);
      const u = i.uniforms;
      ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
        (u.clippingPlanes = de.uniform),
        Fe(e, o),
        (i.needsLights = (function (e) {
          return (
            e.isMeshLambertMaterial ||
            e.isMeshToonMaterial ||
            e.isMeshPhongMaterial ||
            e.isMeshStandardMaterial ||
            e.isShadowMaterial ||
            (e.isShaderMaterial && !0 === e.lights)
          );
        })(e)),
        (i.lightsStateVersion = a),
        i.needsLights &&
          ((u.ambientLightColor.value = r.state.ambient),
          (u.lightProbe.value = r.state.probe),
          (u.directionalLights.value = r.state.directional),
          (u.directionalLightShadows.value = r.state.directionalShadow),
          (u.spotLights.value = r.state.spot),
          (u.spotLightShadows.value = r.state.spotShadow),
          (u.rectAreaLights.value = r.state.rectArea),
          (u.ltc_1.value = r.state.rectAreaLTC1),
          (u.ltc_2.value = r.state.rectAreaLTC2),
          (u.pointLights.value = r.state.point),
          (u.pointLightShadows.value = r.state.pointShadow),
          (u.hemisphereLights.value = r.state.hemi),
          (u.directionalShadowMap.value = r.state.directionalShadowMap),
          (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (u.spotShadowMap.value = r.state.spotShadowMap),
          (u.spotShadowMatrix.value = r.state.spotShadowMatrix),
          (u.pointShadowMap.value = r.state.pointShadowMap),
          (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
      const d = h.getUniforms(),
        p = Sr.seqWithValue(d.seq, u);
      return (i.currentProgram = h), (i.uniformsList = p), h;
    }
    function Fe(e, t) {
      const n = ee.get(e);
      (n.outputEncoding = t.outputEncoding),
        (n.instancing = t.instancing),
        (n.skinning = t.skinning),
        (n.morphTargets = t.morphTargets),
        (n.morphNormals = t.morphNormals),
        (n.morphColors = t.morphColors),
        (n.morphTargetsCount = t.morphTargetsCount),
        (n.numClippingPlanes = t.numClippingPlanes),
        (n.numIntersection = t.numClipIntersection),
        (n.vertexAlphas = t.vertexAlphas),
        (n.vertexTangents = t.vertexTangents),
        (n.toneMapping = t.toneMapping);
    }
    Ie.setAnimationLoop(function (e) {
      Ce && Ce(e);
    }),
      "undefined" != typeof self && Ie.setContext(self),
      (this.setAnimationLoop = function (e) {
        (Ce = e), Ee.setAnimationLoop(e), null === e ? Ie.stop() : Ie.start();
      }),
      Ee.addEventListener("sessionstart", Pe),
      Ee.addEventListener("sessionend", De),
      (this.render = function (e, t) {
        if (void 0 !== t && !0 !== t.isCamera)
          return void console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
        if (!0 === b) return;
        !0 === e.autoUpdate && e.updateMatrixWorld(),
          null === t.parent && t.updateMatrixWorld(),
          !0 === Ee.enabled &&
            !0 === Ee.isPresenting &&
            (!0 === Ee.cameraAutoUpdate && Ee.updateCamera(t),
            (t = Ee.getCamera())),
          !0 === e.isScene && e.onBeforeRender(_, e, t, S),
          (f = ue.get(e, y.length)),
          f.init(),
          y.push(f),
          V.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          F.setFromProjectionMatrix(V),
          (k = this.localClippingEnabled),
          (H = de.init(this.clippingPlanes, k, t)),
          (p = he.get(e, v.length)),
          p.init(),
          v.push(p),
          Ne(e, t, 0, _.sortObjects),
          p.finish(),
          !0 === _.sortObjects && p.sort(N, O),
          !0 === H && de.beginShadows();
        const n = f.state.shadowsArray;
        if (
          (pe.render(n, e, t),
          !0 === H && de.endShadows(),
          !0 === this.info.autoReset && this.info.reset(),
          fe.render(p, e),
          f.setupLights(_.physicallyCorrectLights),
          t.isArrayCamera)
        ) {
          const n = t.cameras;
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            Oe(p, e, i, i.viewport);
          }
        } else Oe(p, e, t);
        null !== S &&
          (te.updateMultisampleRenderTarget(S), te.updateRenderTargetMipmap(S)),
          !0 === e.isScene && e.onAfterRender(_, e, t),
          ye.resetDefaultState(),
          (T = -1),
          (E = null),
          y.pop(),
          (f = y.length > 0 ? y[y.length - 1] : null),
          v.pop(),
          (p = v.length > 0 ? v[v.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return w;
      }),
      (this.getActiveMipmapLevel = function () {
        return M;
      }),
      (this.getRenderTarget = function () {
        return S;
      }),
      (this.setRenderTargetTextures = function (e, t, n) {
        (ee.get(e.texture).__webglTexture = t),
          (ee.get(e.depthTexture).__webglTexture = n);
        const i = ee.get(e);
        (i.__hasExternalTextures = !0),
          i.__hasExternalTextures &&
            ((i.__autoAllocateDepthBuffer = void 0 === n),
            i.__autoAllocateDepthBuffer ||
              (!0 === Y.has("WEBGL_multisampled_render_to_texture") &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (i.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (e, t) {
        const n = ee.get(e);
        (n.__webglFramebuffer = t), (n.__useDefaultFramebuffer = void 0 === t);
      }),
      (this.setRenderTarget = function (e, t = 0, n = 0) {
        (S = e), (w = t), (M = n);
        let i = !0;
        if (e) {
          const t = ee.get(e);
          void 0 !== t.__useDefaultFramebuffer
            ? (Z.bindFramebuffer(36160, null), (i = !1))
            : void 0 === t.__webglFramebuffer
            ? te.setupRenderTarget(e)
            : t.__hasExternalTextures &&
              te.rebindTextures(
                e,
                ee.get(e.texture).__webglTexture,
                ee.get(e.depthTexture).__webglTexture
              );
        }
        let r = null,
          s = !1,
          a = !1;
        if (e) {
          const n = e.texture;
          (n.isData3DTexture || n.isDataArrayTexture) && (a = !0);
          const i = ee.get(e).__webglFramebuffer;
          e.isWebGLCubeRenderTarget
            ? ((r = i[t]), (s = !0))
            : (r =
                J.isWebGL2 && e.samples > 0 && !1 === te.useMultisampledRTT(e)
                  ? ee.get(e).__webglMultisampledFramebuffer
                  : i),
            A.copy(e.viewport),
            R.copy(e.scissor),
            (L = e.scissorTest);
        } else
          A.copy(z).multiplyScalar(I).floor(),
            R.copy(U).multiplyScalar(I).floor(),
            (L = B);
        if (
          (Z.bindFramebuffer(36160, r) &&
            J.drawBuffers &&
            i &&
            Z.drawBuffers(e, r),
          Z.viewport(A),
          Z.scissor(R),
          Z.setScissorTest(L),
          s)
        ) {
          const i = ee.get(e.texture);
          we.framebufferTexture2D(36160, 36064, 34069 + t, i.__webglTexture, n);
        } else if (a) {
          const i = ee.get(e.texture),
            r = t || 0;
          we.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
        }
        T = -1;
      }),
      (this.readRenderTargetPixels = function (e, t, n, i, r, s, a) {
        if (!e || !e.isWebGLRenderTarget)
          return void console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = ee.get(e).__webglFramebuffer;
        if ((e.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
          Z.bindFramebuffer(36160, o);
          try {
            const a = e.texture,
              o = a.format,
              l = a.type;
            if (o !== x && xe.convert(o) !== we.getParameter(35739))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
            const c =
              l === g &&
              (Y.has("EXT_color_buffer_half_float") ||
                (J.isWebGL2 && Y.has("EXT_color_buffer_float")));
            if (
              !(
                l === d ||
                xe.convert(l) === we.getParameter(35738) ||
                (l === m &&
                  (J.isWebGL2 ||
                    Y.has("OES_texture_float") ||
                    Y.has("WEBGL_color_buffer_float"))) ||
                c
              )
            )
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            t >= 0 &&
              t <= e.width - i &&
              n >= 0 &&
              n <= e.height - r &&
              we.readPixels(t, n, i, r, xe.convert(o), xe.convert(l), s);
          } finally {
            const e = null !== S ? ee.get(S).__webglFramebuffer : null;
            Z.bindFramebuffer(36160, e);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (e, t, n = 0) {
        if (!0 !== t.isFramebufferTexture)
          return void console.error(
            "THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."
          );
        const i = Math.pow(2, -n),
          r = Math.floor(t.image.width * i),
          s = Math.floor(t.image.height * i);
        te.setTexture2D(t, 0),
          we.copyTexSubImage2D(3553, n, 0, 0, e.x, e.y, r, s),
          Z.unbindTexture();
      }),
      (this.copyTextureToTexture = function (e, t, n, i = 0) {
        const r = t.image.width,
          s = t.image.height,
          a = xe.convert(n.format),
          o = xe.convert(n.type);
        te.setTexture2D(n, 0),
          we.pixelStorei(37440, n.flipY),
          we.pixelStorei(37441, n.premultiplyAlpha),
          we.pixelStorei(3317, n.unpackAlignment),
          t.isDataTexture
            ? we.texSubImage2D(3553, i, e.x, e.y, r, s, a, o, t.image.data)
            : t.isCompressedTexture
            ? we.compressedTexSubImage2D(
                3553,
                i,
                e.x,
                e.y,
                t.mipmaps[0].width,
                t.mipmaps[0].height,
                a,
                t.mipmaps[0].data
              )
            : we.texSubImage2D(3553, i, e.x, e.y, a, o, t.image),
          0 === i && n.generateMipmaps && we.generateMipmap(3553),
          Z.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (e, t, n, i, r = 0) {
        if (_.isWebGL1Renderer)
          return void console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
        const s = e.max.x - e.min.x + 1,
          a = e.max.y - e.min.y + 1,
          o = e.max.z - e.min.z + 1,
          l = xe.convert(i.format),
          c = xe.convert(i.type);
        let h;
        if (i.isData3DTexture) te.setTexture3D(i, 0), (h = 32879);
        else {
          if (!i.isDataArrayTexture)
            return void console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
            );
          te.setTexture2DArray(i, 0), (h = 35866);
        }
        we.pixelStorei(37440, i.flipY),
          we.pixelStorei(37441, i.premultiplyAlpha),
          we.pixelStorei(3317, i.unpackAlignment);
        const u = we.getParameter(3314),
          d = we.getParameter(32878),
          p = we.getParameter(3316),
          f = we.getParameter(3315),
          m = we.getParameter(32877),
          g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
        we.pixelStorei(3314, g.width),
          we.pixelStorei(32878, g.height),
          we.pixelStorei(3316, e.min.x),
          we.pixelStorei(3315, e.min.y),
          we.pixelStorei(32877, e.min.z),
          n.isDataTexture || n.isData3DTexture
            ? we.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, g.data)
            : n.isCompressedTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              we.compressedTexSubImage3D(
                h,
                r,
                t.x,
                t.y,
                t.z,
                s,
                a,
                o,
                l,
                g.data
              ))
            : we.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, g),
          we.pixelStorei(3314, u),
          we.pixelStorei(32878, d),
          we.pixelStorei(3316, p),
          we.pixelStorei(3315, f),
          we.pixelStorei(32877, m),
          0 === r && i.generateMipmaps && we.generateMipmap(h),
          Z.unbindTexture();
      }),
      (this.initTexture = function (e) {
        te.setTexture2D(e, 0), Z.unbindTexture();
      }),
      (this.resetState = function () {
        (w = 0), (M = 0), (S = null), Z.reset(), ye.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  (vs.prototype.isWebGLRenderer = !0),
    (class extends vs {}.prototype.isWebGL1Renderer = !0);
  class xs {
    constructor(e, t = 25e-5) {
      (this.name = ""), (this.color = new pe(e)), (this.density = t);
    }
    clone() {
      return new xs(this.color, this.density);
    }
    toJSON() {
      return {
        type: "FogExp2",
        color: this.color.getHex(),
        density: this.density,
      };
    }
  }
  xs.prototype.isFogExp2 = !0;
  class ys {
    constructor(e, t = 1, n = 1e3) {
      (this.name = ""),
        (this.color = new pe(e)),
        (this.near = t),
        (this.far = n);
    }
    clone() {
      return new ys(this.color, this.near, this.far);
    }
    toJSON() {
      return {
        type: "Fog",
        color: this.color.getHex(),
        near: this.near,
        far: this.far,
      };
    }
  }
  ys.prototype.isFog = !0;
  class _s extends At {
    constructor() {
      super(),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.overrideMaterial = null),
        (this.autoUpdate = !0),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        null !== e.background && (this.background = e.background.clone()),
        null !== e.environment && (this.environment = e.environment.clone()),
        null !== e.fog && (this.fog = e.fog.clone()),
        null !== e.overrideMaterial &&
          (this.overrideMaterial = e.overrideMaterial.clone()),
        (this.autoUpdate = e.autoUpdate),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return null !== this.fog && (t.object.fog = this.fog.toJSON()), t;
    }
  }
  _s.prototype.isScene = !0;
  class bs {
    constructor(e, t) {
      (this.array = e),
        (this.stride = t),
        (this.count = void 0 !== e ? e.length / t : 0),
        (this.usage = z),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0),
        (this.uuid = j());
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      !0 === e && this.version++;
    }
    setUsage(e) {
      return (this.usage = e), this;
    }
    copy(e) {
      return (
        (this.array = new e.array.constructor(e.array)),
        (this.count = e.count),
        (this.stride = e.stride),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      (e *= this.stride), (n *= t.stride);
      for (let i = 0, r = this.stride; i < r; i++)
        this.array[e + i] = t.array[n + i];
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    clone(e) {
      void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = j()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
          (e.arrayBuffers[this.array.buffer._uuid] =
            this.array.slice(0).buffer);
      const t = new this.array.constructor(
          e.arrayBuffers[this.array.buffer._uuid]
        ),
        n = new this.constructor(t, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(e) {
      return (this.onUploadCallback = e), this;
    }
    toJSON(e) {
      return (
        void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = j()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
          (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
            new Uint32Array(this.array.buffer)
          )),
        {
          uuid: this.uuid,
          buffer: this.array.buffer._uuid,
          type: this.array.constructor.name,
          stride: this.stride,
        }
      );
    }
  }
  bs.prototype.isInterleavedBuffer = !0;
  const ws = new Te();
  class Ms {
    constructor(e, t, n, i = !1) {
      (this.name = ""),
        (this.data = e),
        (this.itemSize = t),
        (this.offset = n),
        (this.normalized = !0 === i);
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++)
        ws.fromBufferAttribute(this, t),
          ws.applyMatrix4(e),
          this.setXYZ(t, ws.x, ws.y, ws.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        ws.fromBufferAttribute(this, t),
          ws.applyNormalMatrix(e),
          this.setXYZ(t, ws.x, ws.y, ws.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        ws.fromBufferAttribute(this, t),
          ws.transformDirection(e),
          this.setXYZ(t, ws.x, ws.y, ws.z);
      return this;
    }
    setX(e, t) {
      return (this.data.array[e * this.data.stride + this.offset] = t), this;
    }
    setY(e, t) {
      return (
        (this.data.array[e * this.data.stride + this.offset + 1] = t), this
      );
    }
    setZ(e, t) {
      return (
        (this.data.array[e * this.data.stride + this.offset + 2] = t), this
      );
    }
    setW(e, t) {
      return (
        (this.data.array[e * this.data.stride + this.offset + 3] = t), this
      );
    }
    getX(e) {
      return this.data.array[e * this.data.stride + this.offset];
    }
    getY(e) {
      return this.data.array[e * this.data.stride + this.offset + 1];
    }
    getZ(e) {
      return this.data.array[e * this.data.stride + this.offset + 2];
    }
    getW(e) {
      return this.data.array[e * this.data.stride + this.offset + 3];
    }
    setXY(e, t, n) {
      return (
        (e = e * this.data.stride + this.offset),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, i) {
      return (
        (e = e * this.data.stride + this.offset),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = i),
        this
      );
    }
    setXYZW(e, t, n, i, r) {
      return (
        (e = e * this.data.stride + this.offset),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = i),
        (this.data.array[e + 3] = r),
        this
      );
    }
    clone(e) {
      if (void 0 === e) {
        console.log(
          "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
        );
        const e = [];
        for (let t = 0; t < this.count; t++) {
          const n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return new Wt(
          new this.array.constructor(e),
          this.itemSize,
          this.normalized
        );
      }
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Ms(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
    }
    toJSON(e) {
      if (void 0 === e) {
        console.log(
          "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
        );
        const e = [];
        for (let t = 0; t < this.count; t++) {
          const n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized,
        };
      }
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    }
  }
  Ms.prototype.isInterleavedBufferAttribute = !0;
  class Ss extends Ht {
    constructor(e) {
      super(),
        (this.type = "SpriteMaterial"),
        (this.color = new pe(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.rotation = 0),
        (this.sizeAttenuation = !0),
        (this.transparent = !0),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.rotation = e.rotation),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      );
    }
  }
  let Ts;
  Ss.prototype.isSpriteMaterial = !0;
  const Es = new Te(),
    As = new Te(),
    Rs = new Te(),
    Ls = new $(),
    Cs = new $(),
    Ps = new nt(),
    Ds = new Te(),
    Is = new Te(),
    Ns = new Te(),
    Os = new $(),
    zs = new $(),
    Us = new $();
  function Bs(e, t, n, i, r, s) {
    Ls.subVectors(e, n).addScalar(0.5).multiply(i),
      void 0 !== r
        ? ((Cs.x = s * Ls.x - r * Ls.y), (Cs.y = r * Ls.x + s * Ls.y))
        : Cs.copy(Ls),
      e.copy(t),
      (e.x += Cs.x),
      (e.y += Cs.y),
      e.applyMatrix4(Ps);
  }
  (class extends At {
    constructor(e) {
      if ((super(), (this.type = "Sprite"), void 0 === Ts)) {
        Ts = new tn();
        const e = new Float32Array([
            -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
            0.5, 0, 0, 1,
          ]),
          t = new bs(e, 5);
        Ts.setIndex([0, 1, 2, 0, 2, 3]),
          Ts.setAttribute("position", new Ms(t, 3, 0, !1)),
          Ts.setAttribute("uv", new Ms(t, 2, 3, !1));
      }
      (this.geometry = Ts),
        (this.material = void 0 !== e ? e : new Ss()),
        (this.center = new $(0.5, 0.5));
    }
    raycast(e, t) {
      null === e.camera &&
        console.error(
          'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
        ),
        As.setFromMatrixScale(this.matrixWorld),
        Ps.copy(e.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(
          e.camera.matrixWorldInverse,
          this.matrixWorld
        ),
        Rs.setFromMatrixPosition(this.modelViewMatrix),
        e.camera.isPerspectiveCamera &&
          !1 === this.material.sizeAttenuation &&
          As.multiplyScalar(-Rs.z);
      const n = this.material.rotation;
      let i, r;
      0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
      const s = this.center;
      Bs(Ds.set(-0.5, -0.5, 0), Rs, s, As, i, r),
        Bs(Is.set(0.5, -0.5, 0), Rs, s, As, i, r),
        Bs(Ns.set(0.5, 0.5, 0), Rs, s, As, i, r),
        Os.set(0, 0),
        zs.set(1, 0),
        Us.set(1, 1);
      let a = e.ray.intersectTriangle(Ds, Is, Ns, !1, Es);
      if (
        null === a &&
        (Bs(Is.set(-0.5, 0.5, 0), Rs, s, As, i, r),
        zs.set(0, 1),
        (a = e.ray.intersectTriangle(Ds, Ns, Is, !1, Es)),
        null === a)
      )
        return;
      const o = e.ray.origin.distanceTo(Es);
      o < e.near ||
        o > e.far ||
        t.push({
          distance: o,
          point: Es.clone(),
          uv: Bt.getUV(Es, Ds, Is, Ns, Os, zs, Us, new $()),
          face: null,
          object: this,
        });
    }
    copy(e) {
      return (
        super.copy(e),
        void 0 !== e.center && this.center.copy(e.center),
        (this.material = e.material),
        this
      );
    }
  }).prototype.isSprite = !0;
  const Fs = new Te(),
    Hs = new _e(),
    ks = new _e(),
    Gs = new Te(),
    Vs = new nt();
  class Ws extends _n {
    constructor(e, t) {
      super(e, t),
        (this.type = "SkinnedMesh"),
        (this.bindMode = "attached"),
        (this.bindMatrix = new nt()),
        (this.bindMatrixInverse = new nt());
    }
    copy(e) {
      return (
        super.copy(e),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        this
      );
    }
    bind(e, t) {
      (this.skeleton = e),
        void 0 === t &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const e = new _e(),
        t = this.geometry.attributes.skinWeight;
      for (let n = 0, i = t.count; n < i; n++) {
        e.fromBufferAttribute(t, n);
        const i = 1 / e.manhattanLength();
        i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0),
          t.setXYZW(n, e.x, e.y, e.z, e.w);
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e),
        "attached" === this.bindMode
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : "detached" === this.bindMode
          ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
          : console.warn(
              "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
            );
    }
    boneTransform(e, t) {
      const n = this.skeleton,
        i = this.geometry;
      Hs.fromBufferAttribute(i.attributes.skinIndex, e),
        ks.fromBufferAttribute(i.attributes.skinWeight, e),
        Fs.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
      for (let e = 0; e < 4; e++) {
        const i = ks.getComponent(e);
        if (0 !== i) {
          const r = Hs.getComponent(e);
          Vs.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
            t.addScaledVector(Gs.copy(Fs).applyMatrix4(Vs), i);
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
  }
  Ws.prototype.isSkinnedMesh = !0;
  class js extends At {
    constructor() {
      super(), (this.type = "Bone");
    }
  }
  js.prototype.isBone = !0;
  class qs extends ye {
    constructor(
      e = null,
      t = 1,
      n = 1,
      i,
      r,
      s,
      a,
      o,
      l = 1003,
      c = 1003,
      h,
      u
    ) {
      super(null, s, a, o, l, c, i, r, h, u),
        (this.image = { data: e, width: t, height: n }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  qs.prototype.isDataTexture = !0;
  const Xs = new nt(),
    Ys = new nt();
  class Js {
    constructor(e = [], t = []) {
      (this.uuid = j()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.boneTexture = null),
        (this.boneTextureSize = 0),
        (this.frame = -1),
        this.init();
    }
    init() {
      const e = this.bones,
        t = this.boneInverses;
      if (
        ((this.boneMatrices = new Float32Array(16 * e.length)), 0 === t.length)
      )
        this.calculateInverses();
      else if (e.length !== t.length) {
        console.warn(
          "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
        ),
          (this.boneInverses = []);
        for (let e = 0, t = this.bones.length; e < t; e++)
          this.boneInverses.push(new nt());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const t = new nt();
        this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(t);
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const t = this.bones[e];
        t && t.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const t = this.bones[e];
        t &&
          (t.parent && t.parent.isBone
            ? (t.matrix.copy(t.parent.matrixWorld).invert(),
              t.matrix.multiply(t.matrixWorld))
            : t.matrix.copy(t.matrixWorld),
          t.matrix.decompose(t.position, t.quaternion, t.scale));
      }
    }
    update() {
      const e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        i = this.boneTexture;
      for (let i = 0, r = e.length; i < r; i++) {
        const r = e[i] ? e[i].matrixWorld : Ys;
        Xs.multiplyMatrices(r, t[i]), Xs.toArray(n, 16 * i);
      }
      null !== i && (i.needsUpdate = !0);
    }
    clone() {
      return new Js(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(4 * this.bones.length);
      (e = Z(e)), (e = Math.max(e, 4));
      const t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      const n = new qs(t, e, e, x, m);
      return (
        (n.needsUpdate = !0),
        (this.boneMatrices = t),
        (this.boneTexture = n),
        (this.boneTextureSize = e),
        this
      );
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        const n = this.bones[t];
        if (n.name === e) return n;
      }
    }
    dispose() {
      null !== this.boneTexture &&
        (this.boneTexture.dispose(), (this.boneTexture = null));
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, i = e.bones.length; n < i; n++) {
        const i = e.bones[n];
        let r = t[i];
        void 0 === r &&
          (console.warn("THREE.Skeleton: No bone found with UUID:", i),
          (r = new js())),
          this.bones.push(r),
          this.boneInverses.push(new nt().fromArray(e.boneInverses[n]));
      }
      return this.init(), this;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "Skeleton",
          generator: "Skeleton.toJSON",
        },
        bones: [],
        boneInverses: [],
      };
      e.uuid = this.uuid;
      const t = this.bones,
        n = this.boneInverses;
      for (let i = 0, r = t.length; i < r; i++) {
        const r = t[i];
        e.bones.push(r.uuid);
        const s = n[i];
        e.boneInverses.push(s.toArray());
      }
      return e;
    }
  }
  class Zs extends Wt {
    constructor(e, t, n, i = 1) {
      "number" == typeof n &&
        ((i = n),
        (n = !1),
        console.error(
          "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
        )),
        super(e, t, n),
        (this.meshPerAttribute = i);
    }
    copy(e) {
      return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.meshPerAttribute = this.meshPerAttribute),
        (e.isInstancedBufferAttribute = !0),
        e
      );
    }
  }
  Zs.prototype.isInstancedBufferAttribute = !0;
  const Ks = new nt(),
    Qs = new nt(),
    $s = [],
    ea = new _n();
  (class extends _n {
    constructor(e, t, n) {
      super(e, t),
        (this.instanceMatrix = new Zs(new Float32Array(16 * n), 16)),
        (this.instanceColor = null),
        (this.count = n),
        (this.frustumCulled = !1);
    }
    copy(e) {
      return (
        super.copy(e),
        this.instanceMatrix.copy(e.instanceMatrix),
        null !== e.instanceColor &&
          (this.instanceColor = e.instanceColor.clone()),
        (this.count = e.count),
        this
      );
    }
    getColorAt(e, t) {
      t.fromArray(this.instanceColor.array, 3 * e);
    }
    getMatrixAt(e, t) {
      t.fromArray(this.instanceMatrix.array, 16 * e);
    }
    raycast(e, t) {
      const n = this.matrixWorld,
        i = this.count;
      if (
        ((ea.geometry = this.geometry),
        (ea.material = this.material),
        void 0 !== ea.material)
      )
        for (let r = 0; r < i; r++) {
          this.getMatrixAt(r, Ks),
            Qs.multiplyMatrices(n, Ks),
            (ea.matrixWorld = Qs),
            ea.raycast(e, $s);
          for (let e = 0, n = $s.length; e < n; e++) {
            const n = $s[e];
            (n.instanceId = r), (n.object = this), t.push(n);
          }
          $s.length = 0;
        }
    }
    setColorAt(e, t) {
      null === this.instanceColor &&
        (this.instanceColor = new Zs(
          new Float32Array(3 * this.instanceMatrix.count),
          3
        )),
        t.toArray(this.instanceColor.array, 3 * e);
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, 16 * e);
    }
    updateMorphTargets() {}
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }).prototype.isInstancedMesh = !0;
  class ta extends Ht {
    constructor(e) {
      super(),
        (this.type = "LineBasicMaterial"),
        (this.color = new pe(16777215)),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.linewidth = e.linewidth),
        (this.linecap = e.linecap),
        (this.linejoin = e.linejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  ta.prototype.isLineBasicMaterial = !0;
  const na = new Te(),
    ia = new Te(),
    ra = new nt(),
    sa = new tt(),
    aa = new Xe();
  class oa extends At {
    constructor(e = new tn(), t = new ta()) {
      super(),
        (this.type = "Line"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e) {
      return (
        super.copy(e),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.isBufferGeometry)
        if (null === e.index) {
          const t = e.attributes.position,
            n = [0];
          for (let e = 1, i = t.count; e < i; e++)
            na.fromBufferAttribute(t, e - 1),
              ia.fromBufferAttribute(t, e),
              (n[e] = n[e - 1]),
              (n[e] += na.distanceTo(ia));
          e.setAttribute("lineDistance", new Xt(n, 1));
        } else
          console.warn(
            "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      else
        e.isGeometry &&
          console.error(
            "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      return this;
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = e.params.Line.threshold,
        s = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        aa.copy(n.boundingSphere),
        aa.applyMatrix4(i),
        (aa.radius += r),
        !1 === e.ray.intersectsSphere(aa))
      )
        return;
      ra.copy(i).invert(), sa.copy(e.ray).applyMatrix4(ra);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a,
        l = new Te(),
        c = new Te(),
        h = new Te(),
        u = new Te(),
        d = this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        const i = n.index,
          r = n.attributes.position;
        if (null !== i)
          for (
            let n = Math.max(0, s.start),
              a = Math.min(i.count, s.start + s.count) - 1;
            n < a;
            n += d
          ) {
            const s = i.getX(n),
              a = i.getX(n + 1);
            if (
              (l.fromBufferAttribute(r, s),
              c.fromBufferAttribute(r, a),
              sa.distanceSqToSegment(l, c, u, h) > o)
            )
              continue;
            u.applyMatrix4(this.matrixWorld);
            const d = e.ray.origin.distanceTo(u);
            d < e.near ||
              d > e.far ||
              t.push({
                distance: d,
                point: h.clone().applyMatrix4(this.matrixWorld),
                index: n,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
        else
          for (
            let n = Math.max(0, s.start),
              i = Math.min(r.count, s.start + s.count) - 1;
            n < i;
            n += d
          ) {
            if (
              (l.fromBufferAttribute(r, n),
              c.fromBufferAttribute(r, n + 1),
              sa.distanceSqToSegment(l, c, u, h) > o)
            )
              continue;
            u.applyMatrix4(this.matrixWorld);
            const i = e.ray.origin.distanceTo(u);
            i < e.near ||
              i > e.far ||
              t.push({
                distance: i,
                point: h.clone().applyMatrix4(this.matrixWorld),
                index: n,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
      } else
        n.isGeometry &&
          console.error(
            "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
    }
    updateMorphTargets() {
      const e = this.geometry;
      if (e.isBufferGeometry) {
        const t = e.morphAttributes,
          n = Object.keys(t);
        if (n.length > 0) {
          const e = t[n[0]];
          if (void 0 !== e) {
            (this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {});
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t].name || String(t);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = t);
            }
          }
        }
      } else {
        const t = e.morphTargets;
        void 0 !== t &&
          t.length > 0 &&
          console.error(
            "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      }
    }
  }
  oa.prototype.isLine = !0;
  const la = new Te(),
    ca = new Te();
  class ha extends oa {
    constructor(e, t) {
      super(e, t), (this.type = "LineSegments");
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.isBufferGeometry)
        if (null === e.index) {
          const t = e.attributes.position,
            n = [];
          for (let e = 0, i = t.count; e < i; e += 2)
            la.fromBufferAttribute(t, e),
              ca.fromBufferAttribute(t, e + 1),
              (n[e] = 0 === e ? 0 : n[e - 1]),
              (n[e + 1] = n[e] + la.distanceTo(ca));
          e.setAttribute("lineDistance", new Xt(n, 1));
        } else
          console.warn(
            "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      else
        e.isGeometry &&
          console.error(
            "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      return this;
    }
  }
  ha.prototype.isLineSegments = !0;
  class ua extends oa {
    constructor(e, t) {
      super(e, t), (this.type = "LineLoop");
    }
  }
  ua.prototype.isLineLoop = !0;
  class da extends Ht {
    constructor(e) {
      super(),
        (this.type = "PointsMaterial"),
        (this.color = new pe(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.size = e.size),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      );
    }
  }
  da.prototype.isPointsMaterial = !0;
  const pa = new nt(),
    fa = new tt(),
    ma = new Xe(),
    ga = new Te();
  class va extends At {
    constructor(e = new tn(), t = new da()) {
      super(),
        (this.type = "Points"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e) {
      return (
        super.copy(e),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = e.params.Points.threshold,
        s = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        ma.copy(n.boundingSphere),
        ma.applyMatrix4(i),
        (ma.radius += r),
        !1 === e.ray.intersectsSphere(ma))
      )
        return;
      pa.copy(i).invert(), fa.copy(e.ray).applyMatrix4(pa);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a;
      if (n.isBufferGeometry) {
        const r = n.index,
          a = n.attributes.position;
        if (null !== r)
          for (
            let n = Math.max(0, s.start),
              l = Math.min(r.count, s.start + s.count);
            n < l;
            n++
          ) {
            const s = r.getX(n);
            ga.fromBufferAttribute(a, s), xa(ga, s, o, i, e, t, this);
          }
        else
          for (
            let n = Math.max(0, s.start),
              r = Math.min(a.count, s.start + s.count);
            n < r;
            n++
          )
            ga.fromBufferAttribute(a, n), xa(ga, n, o, i, e, t, this);
      } else
        console.error(
          "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
    updateMorphTargets() {
      const e = this.geometry;
      if (e.isBufferGeometry) {
        const t = e.morphAttributes,
          n = Object.keys(t);
        if (n.length > 0) {
          const e = t[n[0]];
          if (void 0 !== e) {
            (this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {});
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t].name || String(t);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = t);
            }
          }
        }
      } else {
        const t = e.morphTargets;
        void 0 !== t &&
          t.length > 0 &&
          console.error(
            "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      }
    }
  }
  function xa(e, t, n, i, r, s, a) {
    const o = fa.distanceSqToPoint(e);
    if (o < n) {
      const n = new Te();
      fa.closestPointToPoint(e, n), n.applyMatrix4(i);
      const l = r.ray.origin.distanceTo(n);
      if (l < r.near || l > r.far) return;
      s.push({
        distance: l,
        distanceToRay: Math.sqrt(o),
        point: n,
        index: t,
        face: null,
        object: a,
      });
    }
  }
  (va.prototype.isPoints = !0),
    (class extends ye {
      constructor(e, t, n, i, r, s, a, o, l) {
        super(e, t, n, i, r, s, a, o, l),
          (this.minFilter = void 0 !== s ? s : h),
          (this.magFilter = void 0 !== r ? r : h),
          (this.generateMipmaps = !1);
        const c = this;
        "requestVideoFrameCallback" in e &&
          e.requestVideoFrameCallback(function t() {
            (c.needsUpdate = !0), e.requestVideoFrameCallback(t);
          });
      }
      clone() {
        return new this.constructor(this.image).copy(this);
      }
      update() {
        const e = this.image;
        !1 == "requestVideoFrameCallback" in e &&
          e.readyState >= e.HAVE_CURRENT_DATA &&
          (this.needsUpdate = !0);
      }
    }.prototype.isVideoTexture = !0),
    (class extends ye {
      constructor(e, t, n) {
        super({ width: e, height: t }),
          (this.format = n),
          (this.magFilter = o),
          (this.minFilter = o),
          (this.generateMipmaps = !1),
          (this.needsUpdate = !0);
      }
    }.prototype.isFramebufferTexture = !0);
  ((class extends ye {
    constructor(e, t, n, i, r, s, a, o, l, c, h, u) {
      super(null, s, a, o, l, c, i, r, h, u),
        (this.image = { width: t, height: n }),
        (this.mipmaps = e),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
  }).prototype.isCompressedTexture = !0),
    (class extends ye {
      constructor(e, t, n, i, r, s, a, o, l) {
        super(e, t, n, i, r, s, a, o, l), (this.needsUpdate = !0);
      }
    }.prototype.isCanvasTexture = !0);
  class ya {
    constructor() {
      (this.type = "Curve"), (this.arcLengthDivisions = 200);
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(e, t) {
      const n = this.getUtoTmapping(e);
      return this.getPoint(n, t);
    }
    getPoints(e = 5) {
      const t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return t;
    }
    getSpacedPoints(e = 5) {
      const t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
      return t;
    }
    getLength() {
      const e = this.getLengths();
      return e[e.length - 1];
    }
    getLengths(e = this.arcLengthDivisions) {
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === e + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      const t = [];
      let n,
        i = this.getPoint(0),
        r = 0;
      t.push(0);
      for (let s = 1; s <= e; s++)
        (n = this.getPoint(s / e)), (r += n.distanceTo(i)), t.push(r), (i = n);
      return (this.cacheArcLengths = t), t;
    }
    updateArcLengths() {
      (this.needsUpdate = !0), this.getLengths();
    }
    getUtoTmapping(e, t) {
      const n = this.getLengths();
      let i = 0;
      const r = n.length;
      let s;
      s = t || e * n[r - 1];
      let a,
        o = 0,
        l = r - 1;
      for (; o <= l; )
        if (((i = Math.floor(o + (l - o) / 2)), (a = n[i] - s), a < 0))
          o = i + 1;
        else {
          if (!(a > 0)) {
            l = i;
            break;
          }
          l = i - 1;
        }
      if (((i = l), n[i] === s)) return i / (r - 1);
      const c = n[i];
      return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
    }
    getTangent(e, t) {
      const n = 1e-4;
      let i = e - n,
        r = e + n;
      i < 0 && (i = 0), r > 1 && (r = 1);
      const s = this.getPoint(i),
        a = this.getPoint(r),
        o = t || (s.isVector2 ? new $() : new Te());
      return o.copy(a).sub(s).normalize(), o;
    }
    getTangentAt(e, t) {
      const n = this.getUtoTmapping(e);
      return this.getTangent(n, t);
    }
    computeFrenetFrames(e, t) {
      const n = new Te(),
        i = [],
        r = [],
        s = [],
        a = new Te(),
        o = new nt();
      for (let t = 0; t <= e; t++) {
        const n = t / e;
        i[t] = this.getTangentAt(n, new Te());
      }
      (r[0] = new Te()), (s[0] = new Te());
      let l = Number.MAX_VALUE;
      const c = Math.abs(i[0].x),
        h = Math.abs(i[0].y),
        u = Math.abs(i[0].z);
      c <= l && ((l = c), n.set(1, 0, 0)),
        h <= l && ((l = h), n.set(0, 1, 0)),
        u <= l && n.set(0, 0, 1),
        a.crossVectors(i[0], n).normalize(),
        r[0].crossVectors(i[0], a),
        s[0].crossVectors(i[0], r[0]);
      for (let t = 1; t <= e; t++) {
        if (
          ((r[t] = r[t - 1].clone()),
          (s[t] = s[t - 1].clone()),
          a.crossVectors(i[t - 1], i[t]),
          a.length() > Number.EPSILON)
        ) {
          a.normalize();
          const e = Math.acos(q(i[t - 1].dot(i[t]), -1, 1));
          r[t].applyMatrix4(o.makeRotationAxis(a, e));
        }
        s[t].crossVectors(i[t], r[t]);
      }
      if (!0 === t) {
        let t = Math.acos(q(r[0].dot(r[e]), -1, 1));
        (t /= e), i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (t = -t);
        for (let n = 1; n <= e; n++)
          r[n].applyMatrix4(o.makeRotationAxis(i[n], t * n)),
            s[n].crossVectors(i[n], r[n]);
      }
      return { tangents: i, normals: r, binormals: s };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.arcLengthDivisions = e.arcLengthDivisions), this;
    }
    toJSON() {
      const e = {
        metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
      };
      return (
        (e.arcLengthDivisions = this.arcLengthDivisions),
        (e.type = this.type),
        e
      );
    }
    fromJSON(e) {
      return (this.arcLengthDivisions = e.arcLengthDivisions), this;
    }
  }
  class _a extends ya {
    constructor(
      e = 0,
      t = 0,
      n = 1,
      i = 1,
      r = 0,
      s = 2 * Math.PI,
      a = !1,
      o = 0
    ) {
      super(),
        (this.type = "EllipseCurve"),
        (this.aX = e),
        (this.aY = t),
        (this.xRadius = n),
        (this.yRadius = i),
        (this.aStartAngle = r),
        (this.aEndAngle = s),
        (this.aClockwise = a),
        (this.aRotation = o);
    }
    getPoint(e, t) {
      const n = t || new $(),
        i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0; ) r += i;
      for (; r > i; ) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i),
        !0 !== this.aClockwise || s || (r === i ? (r = -i) : (r -= i));
      const a = this.aStartAngle + e * r;
      let o = this.aX + this.xRadius * Math.cos(a),
        l = this.aY + this.yRadius * Math.sin(a);
      if (0 !== this.aRotation) {
        const e = Math.cos(this.aRotation),
          t = Math.sin(this.aRotation),
          n = o - this.aX,
          i = l - this.aY;
        (o = n * e - i * t + this.aX), (l = n * t + i * e + this.aY);
      }
      return n.set(o, l);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.aX = this.aX),
        (e.aY = this.aY),
        (e.xRadius = this.xRadius),
        (e.yRadius = this.yRadius),
        (e.aStartAngle = this.aStartAngle),
        (e.aEndAngle = this.aEndAngle),
        (e.aClockwise = this.aClockwise),
        (e.aRotation = this.aRotation),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }
  }
  _a.prototype.isEllipseCurve = !0;
  class ba extends _a {
    constructor(e, t, n, i, r, s) {
      super(e, t, n, n, i, r, s), (this.type = "ArcCurve");
    }
  }
  function wa() {
    let e = 0,
      t = 0,
      n = 0,
      i = 0;
    function r(r, s, a, o) {
      (e = r),
        (t = a),
        (n = -3 * r + 3 * s - 2 * a - o),
        (i = 2 * r - 2 * s + a + o);
    }
    return {
      initCatmullRom: function (e, t, n, i, s) {
        r(t, n, s * (n - e), s * (i - t));
      },
      initNonuniformCatmullRom: function (e, t, n, i, s, a, o) {
        let l = (t - e) / s - (n - e) / (s + a) + (n - t) / a,
          c = (n - t) / a - (i - t) / (a + o) + (i - n) / o;
        (l *= a), (c *= a), r(t, n, l, c);
      },
      calc: function (r) {
        const s = r * r;
        return e + t * r + n * s + i * (s * r);
      },
    };
  }
  ba.prototype.isArcCurve = !0;
  const Ma = new Te(),
    Sa = new wa(),
    Ta = new wa(),
    Ea = new wa();
  class Aa extends ya {
    constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
      super(),
        (this.type = "CatmullRomCurve3"),
        (this.points = e),
        (this.closed = t),
        (this.curveType = n),
        (this.tension = i);
    }
    getPoint(e, t = new Te()) {
      const n = t,
        i = this.points,
        r = i.length,
        s = (r - (this.closed ? 0 : 1)) * e;
      let a,
        o,
        l = Math.floor(s),
        c = s - l;
      this.closed
        ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r)
        : 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
        this.closed || l > 0
          ? (a = i[(l - 1) % r])
          : (Ma.subVectors(i[0], i[1]).add(i[0]), (a = Ma));
      const h = i[l % r],
        u = i[(l + 1) % r];
      if (
        (this.closed || l + 2 < r
          ? (o = i[(l + 2) % r])
          : (Ma.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (o = Ma)),
        "centripetal" === this.curveType || "chordal" === this.curveType)
      ) {
        const e = "chordal" === this.curveType ? 0.5 : 0.25;
        let t = Math.pow(a.distanceToSquared(h), e),
          n = Math.pow(h.distanceToSquared(u), e),
          i = Math.pow(u.distanceToSquared(o), e);
        n < 1e-4 && (n = 1),
          t < 1e-4 && (t = n),
          i < 1e-4 && (i = n),
          Sa.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, t, n, i),
          Ta.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, t, n, i),
          Ea.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, t, n, i);
      } else
        "catmullrom" === this.curveType &&
          (Sa.initCatmullRom(a.x, h.x, u.x, o.x, this.tension),
          Ta.initCatmullRom(a.y, h.y, u.y, o.y, this.tension),
          Ea.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
      return n.set(Sa.calc(c), Ta.calc(c), Ea.calc(c)), n;
    }
    copy(e) {
      super.copy(e), (this.points = []);
      for (let t = 0, n = e.points.length; t < n; t++) {
        const n = e.points[t];
        this.points.push(n.clone());
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
    toJSON() {
      const e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        const n = this.points[t];
        e.points.push(n.toArray());
      }
      return (
        (e.closed = this.closed),
        (e.curveType = this.curveType),
        (e.tension = this.tension),
        e
      );
    }
    fromJSON(e) {
      super.fromJSON(e), (this.points = []);
      for (let t = 0, n = e.points.length; t < n; t++) {
        const n = e.points[t];
        this.points.push(new Te().fromArray(n));
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
  }
  function Ra(e, t, n, i, r) {
    const s = 0.5 * (i - t),
      a = 0.5 * (r - n),
      o = e * e;
    return (
      (2 * n - 2 * i + s + a) * (e * o) +
      (-3 * n + 3 * i - 2 * s - a) * o +
      s * e +
      n
    );
  }
  function La(e, t, n, i) {
    return (
      (function (e, t) {
        const n = 1 - e;
        return n * n * t;
      })(e, t) +
      (function (e, t) {
        return 2 * (1 - e) * e * t;
      })(e, n) +
      (function (e, t) {
        return e * e * t;
      })(e, i)
    );
  }
  function Ca(e, t, n, i, r) {
    return (
      (function (e, t) {
        const n = 1 - e;
        return n * n * n * t;
      })(e, t) +
      (function (e, t) {
        const n = 1 - e;
        return 3 * n * n * e * t;
      })(e, n) +
      (function (e, t) {
        return 3 * (1 - e) * e * e * t;
      })(e, i) +
      (function (e, t) {
        return e * e * e * t;
      })(e, r)
    );
  }
  Aa.prototype.isCatmullRomCurve3 = !0;
  class Pa extends ya {
    constructor(e = new $(), t = new $(), n = new $(), i = new $()) {
      super(),
        (this.type = "CubicBezierCurve"),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n),
        (this.v3 = i);
    }
    getPoint(e, t = new $()) {
      const n = t,
        i = this.v0,
        r = this.v1,
        s = this.v2,
        a = this.v3;
      return n.set(Ca(e, i.x, r.x, s.x, a.x), Ca(e, i.y, r.y, s.y, a.y)), n;
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }
  }
  Pa.prototype.isCubicBezierCurve = !0;
  class Da extends ya {
    constructor(e = new Te(), t = new Te(), n = new Te(), i = new Te()) {
      super(),
        (this.type = "CubicBezierCurve3"),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n),
        (this.v3 = i);
    }
    getPoint(e, t = new Te()) {
      const n = t,
        i = this.v0,
        r = this.v1,
        s = this.v2,
        a = this.v3;
      return (
        n.set(
          Ca(e, i.x, r.x, s.x, a.x),
          Ca(e, i.y, r.y, s.y, a.y),
          Ca(e, i.z, r.z, s.z, a.z)
        ),
        n
      );
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }
  }
  Da.prototype.isCubicBezierCurve3 = !0;
  class Ia extends ya {
    constructor(e = new $(), t = new $()) {
      super(), (this.type = "LineCurve"), (this.v1 = e), (this.v2 = t);
    }
    getPoint(e, t = new $()) {
      const n = t;
      return (
        1 === e
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
        n
      );
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t) {
      const n = t || new $();
      return n.copy(this.v2).sub(this.v1).normalize(), n;
    }
    copy(e) {
      return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
      const e = super.toJSON();
      return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  }
  Ia.prototype.isLineCurve = !0;
  class Na extends ya {
    constructor(e = new $(), t = new $(), n = new $()) {
      super(),
        (this.type = "QuadraticBezierCurve"),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n);
    }
    getPoint(e, t = new $()) {
      const n = t,
        i = this.v0,
        r = this.v1,
        s = this.v2;
      return n.set(La(e, i.x, r.x, s.x), La(e, i.y, r.y, s.y)), n;
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  }
  Na.prototype.isQuadraticBezierCurve = !0;
  class Oa extends ya {
    constructor(e = new Te(), t = new Te(), n = new Te()) {
      super(),
        (this.type = "QuadraticBezierCurve3"),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n);
    }
    getPoint(e, t = new Te()) {
      const n = t,
        i = this.v0,
        r = this.v1,
        s = this.v2;
      return (
        n.set(La(e, i.x, r.x, s.x), La(e, i.y, r.y, s.y), La(e, i.z, r.z, s.z)),
        n
      );
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  }
  Oa.prototype.isQuadraticBezierCurve3 = !0;
  class za extends ya {
    constructor(e = []) {
      super(), (this.type = "SplineCurve"), (this.points = e);
    }
    getPoint(e, t = new $()) {
      const n = t,
        i = this.points,
        r = (i.length - 1) * e,
        s = Math.floor(r),
        a = r - s,
        o = i[0 === s ? s : s - 1],
        l = i[s],
        c = i[s > i.length - 2 ? i.length - 1 : s + 1],
        h = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n.set(Ra(a, o.x, l.x, c.x, h.x), Ra(a, o.y, l.y, c.y, h.y)), n;
    }
    copy(e) {
      super.copy(e), (this.points = []);
      for (let t = 0, n = e.points.length; t < n; t++) {
        const n = e.points[t];
        this.points.push(n.clone());
      }
      return this;
    }
    toJSON() {
      const e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        const n = this.points[t];
        e.points.push(n.toArray());
      }
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e), (this.points = []);
      for (let t = 0, n = e.points.length; t < n; t++) {
        const n = e.points[t];
        this.points.push(new $().fromArray(n));
      }
      return this;
    }
  }
  za.prototype.isSplineCurve = !0;
  var Ua = Object.freeze({
    __proto__: null,
    ArcCurve: ba,
    CatmullRomCurve3: Aa,
    CubicBezierCurve: Pa,
    CubicBezierCurve3: Da,
    EllipseCurve: _a,
    LineCurve: Ia,
    LineCurve3: class extends ya {
      constructor(e = new Te(), t = new Te()) {
        super(),
          (this.type = "LineCurve3"),
          (this.isLineCurve3 = !0),
          (this.v1 = e),
          (this.v2 = t);
      }
      getPoint(e, t = new Te()) {
        const n = t;
        return (
          1 === e
            ? n.copy(this.v2)
            : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
          n
        );
      }
      getPointAt(e, t) {
        return this.getPoint(e, t);
      }
      copy(e) {
        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
      }
      toJSON() {
        const e = super.toJSON();
        return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
      }
      fromJSON(e) {
        return (
          super.fromJSON(e),
          this.v1.fromArray(e.v1),
          this.v2.fromArray(e.v2),
          this
        );
      }
    },
    QuadraticBezierCurve: Na,
    QuadraticBezierCurve3: Oa,
    SplineCurve: za,
  });
  class Ba extends ya {
    constructor() {
      super(),
        (this.type = "CurvePath"),
        (this.curves = []),
        (this.autoClose = !1);
    }
    add(e) {
      this.curves.push(e);
    }
    closePath() {
      const e = this.curves[0].getPoint(0),
        t = this.curves[this.curves.length - 1].getPoint(1);
      e.equals(t) || this.curves.push(new Ia(t, e));
    }
    getPoint(e, t) {
      const n = e * this.getLength(),
        i = this.getCurveLengths();
      let r = 0;
      for (; r < i.length; ) {
        if (i[r] >= n) {
          const e = i[r] - n,
            s = this.curves[r],
            a = s.getLength(),
            o = 0 === a ? 0 : 1 - e / a;
          return s.getPointAt(o, t);
        }
        r++;
      }
      return null;
    }
    getLength() {
      const e = this.getCurveLengths();
      return e[e.length - 1];
    }
    updateArcLengths() {
      (this.needsUpdate = !0),
        (this.cacheLengths = null),
        this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      const e = [];
      let t = 0;
      for (let n = 0, i = this.curves.length; n < i; n++)
        (t += this.curves[n].getLength()), e.push(t);
      return (this.cacheLengths = e), e;
    }
    getSpacedPoints(e = 40) {
      const t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return this.autoClose && t.push(t[0]), t;
    }
    getPoints(e = 12) {
      const t = [];
      let n;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        const s = r[i],
          a = s.isEllipseCurve
            ? 2 * e
            : s.isLineCurve || s.isLineCurve3
            ? 1
            : s.isSplineCurve
            ? e * s.points.length
            : e,
          o = s.getPoints(a);
        for (let e = 0; e < o.length; e++) {
          const i = o[e];
          (n && n.equals(i)) || (t.push(i), (n = i));
        }
      }
      return (
        this.autoClose &&
          t.length > 1 &&
          !t[t.length - 1].equals(t[0]) &&
          t.push(t[0]),
        t
      );
    }
    copy(e) {
      super.copy(e), (this.curves = []);
      for (let t = 0, n = e.curves.length; t < n; t++) {
        const n = e.curves[t];
        this.curves.push(n.clone());
      }
      return (this.autoClose = e.autoClose), this;
    }
    toJSON() {
      const e = super.toJSON();
      (e.autoClose = this.autoClose), (e.curves = []);
      for (let t = 0, n = this.curves.length; t < n; t++) {
        const n = this.curves[t];
        e.curves.push(n.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
      for (let t = 0, n = e.curves.length; t < n; t++) {
        const n = e.curves[t];
        this.curves.push(new Ua[n.type]().fromJSON(n));
      }
      return this;
    }
  }
  class Fa extends Ba {
    constructor(e) {
      super(),
        (this.type = "Path"),
        (this.currentPoint = new $()),
        e && this.setFromPoints(e);
    }
    setFromPoints(e) {
      this.moveTo(e[0].x, e[0].y);
      for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
      return this;
    }
    moveTo(e, t) {
      return this.currentPoint.set(e, t), this;
    }
    lineTo(e, t) {
      const n = new Ia(this.currentPoint.clone(), new $(e, t));
      return this.curves.push(n), this.currentPoint.set(e, t), this;
    }
    quadraticCurveTo(e, t, n, i) {
      const r = new Na(this.currentPoint.clone(), new $(e, t), new $(n, i));
      return this.curves.push(r), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(e, t, n, i, r, s) {
      const a = new Pa(
        this.currentPoint.clone(),
        new $(e, t),
        new $(n, i),
        new $(r, s)
      );
      return this.curves.push(a), this.currentPoint.set(r, s), this;
    }
    splineThru(e) {
      const t = [this.currentPoint.clone()].concat(e),
        n = new za(t);
      return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
    }
    arc(e, t, n, i, r, s) {
      const a = this.currentPoint.x,
        o = this.currentPoint.y;
      return this.absarc(e + a, t + o, n, i, r, s), this;
    }
    absarc(e, t, n, i, r, s) {
      return this.absellipse(e, t, n, n, i, r, s), this;
    }
    ellipse(e, t, n, i, r, s, a, o) {
      const l = this.currentPoint.x,
        c = this.currentPoint.y;
      return this.absellipse(e + l, t + c, n, i, r, s, a, o), this;
    }
    absellipse(e, t, n, i, r, s, a, o) {
      const l = new _a(e, t, n, i, r, s, a, o);
      if (this.curves.length > 0) {
        const e = l.getPoint(0);
        e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
      }
      this.curves.push(l);
      const c = l.getPoint(1);
      return this.currentPoint.copy(c), this;
    }
    copy(e) {
      return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
    }
    toJSON() {
      const e = super.toJSON();
      return (e.currentPoint = this.currentPoint.toArray()), e;
    }
    fromJSON(e) {
      return (
        super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this
      );
    }
  }
  new Te(), new Te(), new Te(), new Bt();
  class Ha extends Fa {
    constructor(e) {
      super(e), (this.uuid = j()), (this.type = "Shape"), (this.holes = []);
    }
    getPointsHoles(e) {
      const t = [];
      for (let n = 0, i = this.holes.length; n < i; n++)
        t[n] = this.holes[n].getPoints(e);
      return t;
    }
    extractPoints(e) {
      return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
    }
    copy(e) {
      super.copy(e), (this.holes = []);
      for (let t = 0, n = e.holes.length; t < n; t++) {
        const n = e.holes[t];
        this.holes.push(n.clone());
      }
      return this;
    }
    toJSON() {
      const e = super.toJSON();
      (e.uuid = this.uuid), (e.holes = []);
      for (let t = 0, n = this.holes.length; t < n; t++) {
        const n = this.holes[t];
        e.holes.push(n.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
      for (let t = 0, n = e.holes.length; t < n; t++) {
        const n = e.holes[t];
        this.holes.push(new Fa().fromJSON(n));
      }
      return this;
    }
  }
  function ka(e, t, n, i, r) {
    let s, a;
    if (
      r ===
      (function (e, t, n, i) {
        let r = 0;
        for (let s = t, a = n - i; s < n; s += i)
          (r += (e[a] - e[s]) * (e[s + 1] + e[a + 1])), (a = s);
        return r;
      })(e, t, n, i) >
        0
    )
      for (s = t; s < n; s += i) a = lo(s, e[s], e[s + 1], a);
    else for (s = n - i; s >= t; s -= i) a = lo(s, e[s], e[s + 1], a);
    return a && no(a, a.next) && (co(a), (a = a.next)), a;
  }
  function Ga(e, t) {
    if (!e) return e;
    t || (t = e);
    let n,
      i = e;
    do {
      if (
        ((n = !1), i.steiner || (!no(i, i.next) && 0 !== to(i.prev, i, i.next)))
      )
        i = i.next;
      else {
        if ((co(i), (i = t = i.prev), i === i.next)) break;
        n = !0;
      }
    } while (n || i !== t);
    return t;
  }
  function Va(e, t, n, i, r, s, a) {
    if (!e) return;
    !a &&
      s &&
      (function (e, t, n, i) {
        let r = e;
        do {
          null === r.z && (r.z = Ka(r.x, r.y, t, n, i)),
            (r.prevZ = r.prev),
            (r.nextZ = r.next),
            (r = r.next);
        } while (r !== e);
        (r.prevZ.nextZ = null),
          (r.prevZ = null),
          (function (e) {
            let t,
              n,
              i,
              r,
              s,
              a,
              o,
              l,
              c = 1;
            do {
              for (n = e, e = null, s = null, a = 0; n; ) {
                for (
                  a++, i = n, o = 0, t = 0;
                  t < c && (o++, (i = i.nextZ), i);
                  t++
                );
                for (l = c; o > 0 || (l > 0 && i); )
                  0 !== o && (0 === l || !i || n.z <= i.z)
                    ? ((r = n), (n = n.nextZ), o--)
                    : ((r = i), (i = i.nextZ), l--),
                    s ? (s.nextZ = r) : (e = r),
                    (r.prevZ = s),
                    (s = r);
                n = i;
              }
              (s.nextZ = null), (c *= 2);
            } while (a > 1);
          })(r);
      })(e, i, r, s);
    let o,
      l,
      c = e;
    for (; e.prev !== e.next; )
      if (((o = e.prev), (l = e.next), s ? ja(e, i, r, s) : Wa(e)))
        t.push(o.i / n),
          t.push(e.i / n),
          t.push(l.i / n),
          co(e),
          (e = l.next),
          (c = l.next);
      else if ((e = l) === c) {
        a
          ? 1 === a
            ? Va((e = qa(Ga(e), t, n)), t, n, i, r, s, 2)
            : 2 === a && Xa(e, t, n, i, r, s)
          : Va(Ga(e), t, n, i, r, s, 1);
        break;
      }
  }
  function Wa(e) {
    const t = e.prev,
      n = e,
      i = e.next;
    if (to(t, n, i) >= 0) return !1;
    let r = e.next.next;
    for (; r !== e.prev; ) {
      if (
        $a(t.x, t.y, n.x, n.y, i.x, i.y, r.x, r.y) &&
        to(r.prev, r, r.next) >= 0
      )
        return !1;
      r = r.next;
    }
    return !0;
  }
  function ja(e, t, n, i) {
    const r = e.prev,
      s = e,
      a = e.next;
    if (to(r, s, a) >= 0) return !1;
    const o = r.x < s.x ? (r.x < a.x ? r.x : a.x) : s.x < a.x ? s.x : a.x,
      l = r.y < s.y ? (r.y < a.y ? r.y : a.y) : s.y < a.y ? s.y : a.y,
      c = r.x > s.x ? (r.x > a.x ? r.x : a.x) : s.x > a.x ? s.x : a.x,
      h = r.y > s.y ? (r.y > a.y ? r.y : a.y) : s.y > a.y ? s.y : a.y,
      u = Ka(o, l, t, n, i),
      d = Ka(c, h, t, n, i);
    let p = e.prevZ,
      f = e.nextZ;
    for (; p && p.z >= u && f && f.z <= d; ) {
      if (
        p !== e.prev &&
        p !== e.next &&
        $a(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
        to(p.prev, p, p.next) >= 0
      )
        return !1;
      if (
        ((p = p.prevZ),
        f !== e.prev &&
          f !== e.next &&
          $a(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) &&
          to(f.prev, f, f.next) >= 0)
      )
        return !1;
      f = f.nextZ;
    }
    for (; p && p.z >= u; ) {
      if (
        p !== e.prev &&
        p !== e.next &&
        $a(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
        to(p.prev, p, p.next) >= 0
      )
        return !1;
      p = p.prevZ;
    }
    for (; f && f.z <= d; ) {
      if (
        f !== e.prev &&
        f !== e.next &&
        $a(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) &&
        to(f.prev, f, f.next) >= 0
      )
        return !1;
      f = f.nextZ;
    }
    return !0;
  }
  function qa(e, t, n) {
    let i = e;
    do {
      const r = i.prev,
        s = i.next.next;
      !no(r, s) &&
        io(r, i, i.next, s) &&
        ao(r, s) &&
        ao(s, r) &&
        (t.push(r.i / n),
        t.push(i.i / n),
        t.push(s.i / n),
        co(i),
        co(i.next),
        (i = e = s)),
        (i = i.next);
    } while (i !== e);
    return Ga(i);
  }
  function Xa(e, t, n, i, r, s) {
    let a = e;
    do {
      let e = a.next.next;
      for (; e !== a.prev; ) {
        if (a.i !== e.i && eo(a, e)) {
          let o = oo(a, e);
          return (
            (a = Ga(a, a.next)),
            (o = Ga(o, o.next)),
            Va(a, t, n, i, r, s),
            void Va(o, t, n, i, r, s)
          );
        }
        e = e.next;
      }
      a = a.next;
    } while (a !== e);
  }
  function Ya(e, t) {
    return e.x - t.x;
  }
  function Ja(e, t) {
    if (
      ((t = (function (e, t) {
        let n = t;
        const i = e.x,
          r = e.y;
        let s,
          a = -1 / 0;
        do {
          if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
            const e = n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
            if (e <= i && e > a) {
              if (((a = e), e === i)) {
                if (r === n.y) return n;
                if (r === n.next.y) return n.next;
              }
              s = n.x < n.next.x ? n : n.next;
            }
          }
          n = n.next;
        } while (n !== t);
        if (!s) return null;
        if (i === a) return s;
        const o = s,
          l = s.x,
          c = s.y;
        let h,
          u = 1 / 0;
        n = s;
        do {
          i >= n.x &&
            n.x >= l &&
            i !== n.x &&
            $a(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) &&
            ((h = Math.abs(r - n.y) / (i - n.x)),
            ao(n, e) &&
              (h < u ||
                (h === u && (n.x > s.x || (n.x === s.x && Za(s, n))))) &&
              ((s = n), (u = h))),
            (n = n.next);
        } while (n !== o);
        return s;
      })(e, t)),
      t)
    ) {
      const n = oo(t, e);
      Ga(t, t.next), Ga(n, n.next);
    }
  }
  function Za(e, t) {
    return to(e.prev, e, t.prev) < 0 && to(t.next, e, e.next) < 0;
  }
  function Ka(e, t, n, i, r) {
    return (
      (e =
        1431655765 &
        ((e =
          858993459 &
          ((e =
            252645135 &
            ((e = 16711935 & ((e = 32767 * (e - n) * r) | (e << 8))) |
              (e << 4))) |
            (e << 2))) |
          (e << 1))) |
      ((t =
        1431655765 &
        ((t =
          858993459 &
          ((t =
            252645135 &
            ((t = 16711935 & ((t = 32767 * (t - i) * r) | (t << 8))) |
              (t << 4))) |
            (t << 2))) |
          (t << 1))) <<
        1)
    );
  }
  function Qa(e) {
    let t = e,
      n = e;
    do {
      (t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t), (t = t.next);
    } while (t !== e);
    return n;
  }
  function $a(e, t, n, i, r, s, a, o) {
    return (
      (r - a) * (t - o) - (e - a) * (s - o) >= 0 &&
      (e - a) * (i - o) - (n - a) * (t - o) >= 0 &&
      (n - a) * (s - o) - (r - a) * (i - o) >= 0
    );
  }
  function eo(e, t) {
    return (
      e.next.i !== t.i &&
      e.prev.i !== t.i &&
      !(function (e, t) {
        let n = e;
        do {
          if (
            n.i !== e.i &&
            n.next.i !== e.i &&
            n.i !== t.i &&
            n.next.i !== t.i &&
            io(n, n.next, e, t)
          )
            return !0;
          n = n.next;
        } while (n !== e);
        return !1;
      })(e, t) &&
      ((ao(e, t) &&
        ao(t, e) &&
        (function (e, t) {
          let n = e,
            i = !1;
          const r = (e.x + t.x) / 2,
            s = (e.y + t.y) / 2;
          do {
            n.y > s != n.next.y > s &&
              n.next.y !== n.y &&
              r < ((n.next.x - n.x) * (s - n.y)) / (n.next.y - n.y) + n.x &&
              (i = !i),
              (n = n.next);
          } while (n !== e);
          return i;
        })(e, t) &&
        (to(e.prev, e, t.prev) || to(e, t.prev, t))) ||
        (no(e, t) && to(e.prev, e, e.next) > 0 && to(t.prev, t, t.next) > 0))
    );
  }
  function to(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
  }
  function no(e, t) {
    return e.x === t.x && e.y === t.y;
  }
  function io(e, t, n, i) {
    const r = so(to(e, t, n)),
      s = so(to(e, t, i)),
      a = so(to(n, i, e)),
      o = so(to(n, i, t));
    return (
      (r !== s && a !== o) ||
      !(0 !== r || !ro(e, n, t)) ||
      !(0 !== s || !ro(e, i, t)) ||
      !(0 !== a || !ro(n, e, i)) ||
      !(0 !== o || !ro(n, t, i))
    );
  }
  function ro(e, t, n) {
    return (
      t.x <= Math.max(e.x, n.x) &&
      t.x >= Math.min(e.x, n.x) &&
      t.y <= Math.max(e.y, n.y) &&
      t.y >= Math.min(e.y, n.y)
    );
  }
  function so(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0;
  }
  function ao(e, t) {
    return to(e.prev, e, e.next) < 0
      ? to(e, t, e.next) >= 0 && to(e, e.prev, t) >= 0
      : to(e, t, e.prev) < 0 || to(e, e.next, t) < 0;
  }
  function oo(e, t) {
    const n = new ho(e.i, e.x, e.y),
      i = new ho(t.i, t.x, t.y),
      r = e.next,
      s = t.prev;
    return (
      (e.next = t),
      (t.prev = e),
      (n.next = r),
      (r.prev = n),
      (i.next = n),
      (n.prev = i),
      (s.next = i),
      (i.prev = s),
      i
    );
  }
  function lo(e, t, n, i) {
    const r = new ho(e, t, n);
    return (
      i
        ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
        : ((r.prev = r), (r.next = r)),
      r
    );
  }
  function co(e) {
    (e.next.prev = e.prev),
      (e.prev.next = e.next),
      e.prevZ && (e.prevZ.nextZ = e.nextZ),
      e.nextZ && (e.nextZ.prevZ = e.prevZ);
  }
  function ho(e, t, n) {
    (this.i = e),
      (this.x = t),
      (this.y = n),
      (this.prev = null),
      (this.next = null),
      (this.z = null),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = !1);
  }
  class uo {
    static area(e) {
      const t = e.length;
      let n = 0;
      for (let i = t - 1, r = 0; r < t; i = r++)
        n += e[i].x * e[r].y - e[r].x * e[i].y;
      return 0.5 * n;
    }
    static isClockWise(e) {
      return uo.area(e) < 0;
    }
    static triangulateShape(e, t) {
      const n = [],
        i = [],
        r = [];
      po(e), fo(n, e);
      let s = e.length;
      t.forEach(po);
      for (let e = 0; e < t.length; e++)
        i.push(s), (s += t[e].length), fo(n, t[e]);
      const a = (function (e, t, n = 2) {
        const i = t && t.length,
          r = i ? t[0] * n : e.length;
        let s = ka(e, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (
          (i &&
            (s = (function (e, t, n, i) {
              const r = [];
              let s, a, o, l, c;
              for (s = 0, a = t.length; s < a; s++)
                (o = t[s] * i),
                  (l = s < a - 1 ? t[s + 1] * i : e.length),
                  (c = ka(e, o, l, i, !1)),
                  c === c.next && (c.steiner = !0),
                  r.push(Qa(c));
              for (r.sort(Ya), s = 0; s < r.length; s++)
                Ja(r[s], n), (n = Ga(n, n.next));
              return n;
            })(e, t, s, n)),
          e.length > 80 * n)
        ) {
          (o = c = e[0]), (l = h = e[1]);
          for (let t = n; t < r; t += n)
            (u = e[t]),
              (d = e[t + 1]),
              u < o && (o = u),
              d < l && (l = d),
              u > c && (c = u),
              d > h && (h = d);
          (p = Math.max(c - o, h - l)), (p = 0 !== p ? 1 / p : 0);
        }
        return Va(s, a, n, o, l, p), a;
      })(n, i);
      for (let e = 0; e < a.length; e += 3) r.push(a.slice(e, e + 3));
      return r;
    }
  }
  function po(e) {
    const t = e.length;
    t > 2 && e[t - 1].equals(e[0]) && e.pop();
  }
  function fo(e, t) {
    for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
  }
  class mo extends tn {
    constructor(
      e = new Ha([
        new $(0.5, 0.5),
        new $(-0.5, 0.5),
        new $(-0.5, -0.5),
        new $(0.5, -0.5),
      ]),
      t = {}
    ) {
      super(),
        (this.type = "ExtrudeGeometry"),
        (this.parameters = { shapes: e, options: t }),
        (e = Array.isArray(e) ? e : [e]);
      const n = this,
        i = [],
        r = [];
      for (let t = 0, n = e.length; t < n; t++) s(e[t]);
      function s(e) {
        const s = [],
          a = void 0 !== t.curveSegments ? t.curveSegments : 12,
          o = void 0 !== t.steps ? t.steps : 1;
        let l = void 0 !== t.depth ? t.depth : 1,
          c = void 0 === t.bevelEnabled || t.bevelEnabled,
          h = void 0 !== t.bevelThickness ? t.bevelThickness : 0.2,
          u = void 0 !== t.bevelSize ? t.bevelSize : h - 0.1,
          d = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
          p = void 0 !== t.bevelSegments ? t.bevelSegments : 3;
        const f = t.extrudePath,
          m = void 0 !== t.UVGenerator ? t.UVGenerator : go;
        void 0 !== t.amount &&
          (console.warn(
            "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
          ),
          (l = t.amount));
        let g,
          v,
          x,
          y,
          _,
          b = !1;
        f &&
          ((g = f.getSpacedPoints(o)),
          (b = !0),
          (c = !1),
          (v = f.computeFrenetFrames(o, !1)),
          (x = new Te()),
          (y = new Te()),
          (_ = new Te())),
          c || ((p = 0), (h = 0), (u = 0), (d = 0));
        const w = e.extractPoints(a);
        let M = w.shape;
        const S = w.holes;
        if (!uo.isClockWise(M)) {
          M = M.reverse();
          for (let e = 0, t = S.length; e < t; e++) {
            const t = S[e];
            uo.isClockWise(t) && (S[e] = t.reverse());
          }
        }
        const T = uo.triangulateShape(M, S),
          E = M;
        for (let e = 0, t = S.length; e < t; e++) {
          const t = S[e];
          M = M.concat(t);
        }
        function A(e, t, n) {
          return (
            t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            t.clone().multiplyScalar(n).add(e)
          );
        }
        const R = M.length,
          L = T.length;
        function C(e, t, n) {
          let i, r, s;
          const a = e.x - t.x,
            o = e.y - t.y,
            l = n.x - e.x,
            c = n.y - e.y,
            h = a * a + o * o,
            u = a * c - o * l;
          if (Math.abs(u) > Number.EPSILON) {
            const u = Math.sqrt(h),
              d = Math.sqrt(l * l + c * c),
              p = t.x - o / u,
              f = t.y + a / u,
              m =
                ((n.x - c / d - p) * c - (n.y + l / d - f) * l) /
                (a * c - o * l);
            (i = p + a * m - e.x), (r = f + o * m - e.y);
            const g = i * i + r * r;
            if (g <= 2) return new $(i, r);
            s = Math.sqrt(g / 2);
          } else {
            let e = !1;
            a > Number.EPSILON
              ? l > Number.EPSILON && (e = !0)
              : a < -Number.EPSILON
              ? l < -Number.EPSILON && (e = !0)
              : Math.sign(o) === Math.sign(c) && (e = !0),
              e
                ? ((i = -o), (r = a), (s = Math.sqrt(h)))
                : ((i = a), (r = o), (s = Math.sqrt(h / 2)));
          }
          return new $(i / s, r / s);
        }
        const P = [];
        for (
          let e = 0, t = E.length, n = t - 1, i = e + 1;
          e < t;
          e++, n++, i++
        )
          n === t && (n = 0), i === t && (i = 0), (P[e] = C(E[e], E[n], E[i]));
        const D = [];
        let I,
          N = P.concat();
        for (let e = 0, t = S.length; e < t; e++) {
          const t = S[e];
          I = [];
          for (
            let e = 0, n = t.length, i = n - 1, r = e + 1;
            e < n;
            e++, i++, r++
          )
            i === n && (i = 0),
              r === n && (r = 0),
              (I[e] = C(t[e], t[i], t[r]));
          D.push(I), (N = N.concat(I));
        }
        for (let e = 0; e < p; e++) {
          const t = e / p,
            n = h * Math.cos((t * Math.PI) / 2),
            i = u * Math.sin((t * Math.PI) / 2) + d;
          for (let e = 0, t = E.length; e < t; e++) {
            const t = A(E[e], P[e], i);
            U(t.x, t.y, -n);
          }
          for (let e = 0, t = S.length; e < t; e++) {
            const t = S[e];
            I = D[e];
            for (let e = 0, r = t.length; e < r; e++) {
              const r = A(t[e], I[e], i);
              U(r.x, r.y, -n);
            }
          }
        }
        const O = u + d;
        for (let e = 0; e < R; e++) {
          const t = c ? A(M[e], N[e], O) : M[e];
          b
            ? (y.copy(v.normals[0]).multiplyScalar(t.x),
              x.copy(v.binormals[0]).multiplyScalar(t.y),
              _.copy(g[0]).add(y).add(x),
              U(_.x, _.y, _.z))
            : U(t.x, t.y, 0);
        }
        for (let e = 1; e <= o; e++)
          for (let t = 0; t < R; t++) {
            const n = c ? A(M[t], N[t], O) : M[t];
            b
              ? (y.copy(v.normals[e]).multiplyScalar(n.x),
                x.copy(v.binormals[e]).multiplyScalar(n.y),
                _.copy(g[e]).add(y).add(x),
                U(_.x, _.y, _.z))
              : U(n.x, n.y, (l / o) * e);
          }
        for (let e = p - 1; e >= 0; e--) {
          const t = e / p,
            n = h * Math.cos((t * Math.PI) / 2),
            i = u * Math.sin((t * Math.PI) / 2) + d;
          for (let e = 0, t = E.length; e < t; e++) {
            const t = A(E[e], P[e], i);
            U(t.x, t.y, l + n);
          }
          for (let e = 0, t = S.length; e < t; e++) {
            const t = S[e];
            I = D[e];
            for (let e = 0, r = t.length; e < r; e++) {
              const r = A(t[e], I[e], i);
              b ? U(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : U(r.x, r.y, l + n);
            }
          }
        }
        function z(e, t) {
          let n = e.length;
          for (; --n >= 0; ) {
            const i = n;
            let r = n - 1;
            r < 0 && (r = e.length - 1);
            for (let e = 0, n = o + 2 * p; e < n; e++) {
              const n = R * e,
                s = R * (e + 1);
              F(t + i + n, t + r + n, t + r + s, t + i + s);
            }
          }
        }
        function U(e, t, n) {
          s.push(e), s.push(t), s.push(n);
        }
        function B(e, t, r) {
          H(e), H(t), H(r);
          const s = i.length / 3,
            a = m.generateTopUV(n, i, s - 3, s - 2, s - 1);
          k(a[0]), k(a[1]), k(a[2]);
        }
        function F(e, t, r, s) {
          H(e), H(t), H(s), H(t), H(r), H(s);
          const a = i.length / 3,
            o = m.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
          k(o[0]), k(o[1]), k(o[3]), k(o[1]), k(o[2]), k(o[3]);
        }
        function H(e) {
          i.push(s[3 * e + 0]), i.push(s[3 * e + 1]), i.push(s[3 * e + 2]);
        }
        function k(e) {
          r.push(e.x), r.push(e.y);
        }
        !(function () {
          const e = i.length / 3;
          if (c) {
            let e = 0,
              t = R * e;
            for (let e = 0; e < L; e++) {
              const n = T[e];
              B(n[2] + t, n[1] + t, n[0] + t);
            }
            (e = o + 2 * p), (t = R * e);
            for (let e = 0; e < L; e++) {
              const n = T[e];
              B(n[0] + t, n[1] + t, n[2] + t);
            }
          } else {
            for (let e = 0; e < L; e++) {
              const t = T[e];
              B(t[2], t[1], t[0]);
            }
            for (let e = 0; e < L; e++) {
              const t = T[e];
              B(t[0] + R * o, t[1] + R * o, t[2] + R * o);
            }
          }
          n.addGroup(e, i.length / 3 - e, 0);
        })(),
          (function () {
            const e = i.length / 3;
            let t = 0;
            z(E, t), (t += E.length);
            for (let e = 0, n = S.length; e < n; e++) {
              const n = S[e];
              z(n, t), (t += n.length);
            }
            n.addGroup(e, i.length / 3 - e, 1);
          })();
      }
      this.setAttribute("position", new Xt(i, 3)),
        this.setAttribute("uv", new Xt(r, 2)),
        this.computeVertexNormals();
    }
    toJSON() {
      const e = super.toJSON();
      return (function (e, t, n) {
        if (((n.shapes = []), Array.isArray(e)))
          for (let t = 0, i = e.length; t < i; t++) {
            const i = e[t];
            n.shapes.push(i.uuid);
          }
        else n.shapes.push(e.uuid);
        return (
          void 0 !== t.extrudePath &&
            (n.options.extrudePath = t.extrudePath.toJSON()),
          n
        );
      })(this.parameters.shapes, this.parameters.options, e);
    }
    static fromJSON(e, t) {
      const n = [];
      for (let i = 0, r = e.shapes.length; i < r; i++) {
        const r = t[e.shapes[i]];
        n.push(r);
      }
      const i = e.options.extrudePath;
      return (
        void 0 !== i && (e.options.extrudePath = new Ua[i.type]().fromJSON(i)),
        new mo(n, e.options)
      );
    }
  }
  const go = {
    generateTopUV: function (e, t, n, i, r) {
      const s = t[3 * n],
        a = t[3 * n + 1],
        o = t[3 * i],
        l = t[3 * i + 1],
        c = t[3 * r],
        h = t[3 * r + 1];
      return [new $(s, a), new $(o, l), new $(c, h)];
    },
    generateSideWallUV: function (e, t, n, i, r, s) {
      const a = t[3 * n],
        o = t[3 * n + 1],
        l = t[3 * n + 2],
        c = t[3 * i],
        h = t[3 * i + 1],
        u = t[3 * i + 2],
        d = t[3 * r],
        p = t[3 * r + 1],
        f = t[3 * r + 2],
        m = t[3 * s],
        g = t[3 * s + 1],
        v = t[3 * s + 2];
      return Math.abs(o - h) < Math.abs(a - c)
        ? [new $(a, 1 - l), new $(c, 1 - u), new $(d, 1 - f), new $(m, 1 - v)]
        : [new $(o, 1 - l), new $(h, 1 - u), new $(p, 1 - f), new $(g, 1 - v)];
    },
  };
  class vo extends tn {
    constructor(
      e = new Ha([new $(0, 0.5), new $(-0.5, -0.5), new $(0.5, -0.5)]),
      t = 12
    ) {
      super(),
        (this.type = "ShapeGeometry"),
        (this.parameters = { shapes: e, curveSegments: t });
      const n = [],
        i = [],
        r = [],
        s = [];
      let a = 0,
        o = 0;
      if (!1 === Array.isArray(e)) l(e);
      else
        for (let t = 0; t < e.length; t++)
          l(e[t]), this.addGroup(a, o, t), (a += o), (o = 0);
      function l(e) {
        const a = i.length / 3,
          l = e.extractPoints(t);
        let c = l.shape;
        const h = l.holes;
        !1 === uo.isClockWise(c) && (c = c.reverse());
        for (let e = 0, t = h.length; e < t; e++) {
          const t = h[e];
          !0 === uo.isClockWise(t) && (h[e] = t.reverse());
        }
        const u = uo.triangulateShape(c, h);
        for (let e = 0, t = h.length; e < t; e++) {
          const t = h[e];
          c = c.concat(t);
        }
        for (let e = 0, t = c.length; e < t; e++) {
          const t = c[e];
          i.push(t.x, t.y, 0), r.push(0, 0, 1), s.push(t.x, t.y);
        }
        for (let e = 0, t = u.length; e < t; e++) {
          const t = u[e],
            i = t[0] + a,
            r = t[1] + a,
            s = t[2] + a;
          n.push(i, r, s), (o += 3);
        }
      }
      this.setIndex(n),
        this.setAttribute("position", new Xt(i, 3)),
        this.setAttribute("normal", new Xt(r, 3)),
        this.setAttribute("uv", new Xt(s, 2));
    }
    toJSON() {
      const e = super.toJSON();
      return (function (e, t) {
        if (((t.shapes = []), Array.isArray(e)))
          for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            t.shapes.push(i.uuid);
          }
        else t.shapes.push(e.uuid);
        return t;
      })(this.parameters.shapes, e);
    }
    static fromJSON(e, t) {
      const n = [];
      for (let i = 0, r = e.shapes.length; i < r; i++) {
        const r = t[e.shapes[i]];
        n.push(r);
      }
      return new vo(n, e.curveSegments);
    }
  }
  class xo extends Ht {
    constructor(e) {
      super(),
        (this.type = "ShadowMaterial"),
        (this.color = new pe(0)),
        (this.transparent = !0),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), (this.fog = e.fog), this;
    }
  }
  xo.prototype.isShadowMaterial = !0;
  class yo extends En {
    constructor(e) {
      super(e), (this.type = "RawShaderMaterial");
    }
  }
  yo.prototype.isRawShaderMaterial = !0;
  class _o extends Ht {
    constructor(e) {
      super(),
        (this.defines = { STANDARD: "" }),
        (this.type = "MeshStandardMaterial"),
        (this.color = new pe(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new pe(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new $(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: "" }),
        this.color.copy(e.color),
        (this.roughness = e.roughness),
        (this.metalness = e.metalness),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.roughnessMap = e.roughnessMap),
        (this.metalnessMap = e.metalnessMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.envMapIntensity = e.envMapIntensity),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      );
    }
  }
  _o.prototype.isMeshStandardMaterial = !0;
  class bo extends _o {
    constructor(e) {
      super(),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.type = "MeshPhysicalMaterial"),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new $(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.ior = 1.5),
        Object.defineProperty(this, "reflectivity", {
          get: function () {
            return q((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
          },
          set: function (e) {
            this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
          },
        }),
        (this.sheenColor = new pe(0)),
        (this.sheenColorMap = null),
        (this.sheenRoughness = 1),
        (this.sheenRoughnessMap = null),
        (this.transmissionMap = null),
        (this.thickness = 0),
        (this.thicknessMap = null),
        (this.attenuationDistance = 0),
        (this.attenuationColor = new pe(1, 1, 1)),
        (this.specularIntensity = 1),
        (this.specularIntensityMap = null),
        (this.specularColor = new pe(1, 1, 1)),
        (this.specularColorMap = null),
        (this._sheen = 0),
        (this._clearcoat = 0),
        (this._transmission = 0),
        this.setValues(e);
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(e) {
      this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(e) {
      this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(e) {
      this._transmission > 0 != e > 0 && this.version++,
        (this._transmission = e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.clearcoat = e.clearcoat),
        (this.clearcoatMap = e.clearcoatMap),
        (this.clearcoatRoughness = e.clearcoatRoughness),
        (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = e.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        (this.ior = e.ior),
        (this.sheen = e.sheen),
        this.sheenColor.copy(e.sheenColor),
        (this.sheenColorMap = e.sheenColorMap),
        (this.sheenRoughness = e.sheenRoughness),
        (this.sheenRoughnessMap = e.sheenRoughnessMap),
        (this.transmission = e.transmission),
        (this.transmissionMap = e.transmissionMap),
        (this.thickness = e.thickness),
        (this.thicknessMap = e.thicknessMap),
        (this.attenuationDistance = e.attenuationDistance),
        this.attenuationColor.copy(e.attenuationColor),
        (this.specularIntensity = e.specularIntensity),
        (this.specularIntensityMap = e.specularIntensityMap),
        this.specularColor.copy(e.specularColor),
        (this.specularColorMap = e.specularColorMap),
        this
      );
    }
  }
  bo.prototype.isMeshPhysicalMaterial = !0;
  class wo extends Ht {
    constructor(e) {
      super(),
        (this.type = "MeshPhongMaterial"),
        (this.color = new pe(16777215)),
        (this.specular = new pe(1118481)),
        (this.shininess = 30),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new pe(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new $(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        this.specular.copy(e.specular),
        (this.shininess = e.shininess),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      );
    }
  }
  wo.prototype.isMeshPhongMaterial = !0;
  class Mo extends Ht {
    constructor(e) {
      super(),
        (this.defines = { TOON: "" }),
        (this.type = "MeshToonMaterial"),
        (this.color = new pe(16777215)),
        (this.map = null),
        (this.gradientMap = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new pe(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new $(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.alphaMap = null),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.gradientMap = e.gradientMap),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.alphaMap = e.alphaMap),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  Mo.prototype.isMeshToonMaterial = !0;
  class So extends Ht {
    constructor(e) {
      super(),
        (this.type = "MeshNormalMaterial"),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new $(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.flatShading = !1),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.flatShading = e.flatShading),
        this
      );
    }
  }
  So.prototype.isMeshNormalMaterial = !0;
  class To extends Ht {
    constructor(e) {
      super(),
        (this.type = "MeshLambertMaterial"),
        (this.color = new pe(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new pe(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  To.prototype.isMeshLambertMaterial = !0;
  class Eo extends Ht {
    constructor(e) {
      super(),
        (this.defines = { MATCAP: "" }),
        (this.type = "MeshMatcapMaterial"),
        (this.color = new pe(16777215)),
        (this.matcap = null),
        (this.map = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new $(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.alphaMap = null),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { MATCAP: "" }),
        this.color.copy(e.color),
        (this.matcap = e.matcap),
        (this.map = e.map),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.alphaMap = e.alphaMap),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      );
    }
  }
  Eo.prototype.isMeshMatcapMaterial = !0;
  class Ao extends ta {
    constructor(e) {
      super(),
        (this.type = "LineDashedMaterial"),
        (this.scale = 1),
        (this.dashSize = 3),
        (this.gapSize = 1),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.scale = e.scale),
        (this.dashSize = e.dashSize),
        (this.gapSize = e.gapSize),
        this
      );
    }
  }
  Ao.prototype.isLineDashedMaterial = !0;
  const Ro = {
    ShadowMaterial: xo,
    SpriteMaterial: Ss,
    RawShaderMaterial: yo,
    ShaderMaterial: En,
    PointsMaterial: da,
    MeshPhysicalMaterial: bo,
    MeshStandardMaterial: _o,
    MeshPhongMaterial: wo,
    MeshToonMaterial: Mo,
    MeshNormalMaterial: So,
    MeshLambertMaterial: To,
    MeshDepthMaterial: rs,
    MeshDistanceMaterial: ss,
    MeshBasicMaterial: kt,
    MeshMatcapMaterial: Eo,
    LineDashedMaterial: Ao,
    LineBasicMaterial: ta,
    Material: Ht,
  };
  Ht.fromType = function (e) {
    return new Ro[e]();
  };
  const Lo = {
    arraySlice: function (e, t, n) {
      return Lo.isTypedArray(e)
        ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length))
        : e.slice(t, n);
    },
    convertArray: function (e, t, n) {
      return !e || (!n && e.constructor === t)
        ? e
        : "number" == typeof t.BYTES_PER_ELEMENT
        ? new t(e)
        : Array.prototype.slice.call(e);
    },
    isTypedArray: function (e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    },
    getKeyframeOrder: function (e) {
      const t = e.length,
        n = new Array(t);
      for (let e = 0; e !== t; ++e) n[e] = e;
      return (
        n.sort(function (t, n) {
          return e[t] - e[n];
        }),
        n
      );
    },
    sortedArray: function (e, t, n) {
      const i = e.length,
        r = new e.constructor(i);
      for (let s = 0, a = 0; a !== i; ++s) {
        const i = n[s] * t;
        for (let n = 0; n !== t; ++n) r[a++] = e[i + n];
      }
      return r;
    },
    flattenJSON: function (e, t, n, i) {
      let r = 1,
        s = e[0];
      for (; void 0 !== s && void 0 === s[i]; ) s = e[r++];
      if (void 0 === s) return;
      let a = s[i];
      if (void 0 !== a)
        if (Array.isArray(a))
          do {
            (a = s[i]),
              void 0 !== a && (t.push(s.time), n.push.apply(n, a)),
              (s = e[r++]);
          } while (void 0 !== s);
        else if (void 0 !== a.toArray)
          do {
            (a = s[i]),
              void 0 !== a && (t.push(s.time), a.toArray(n, n.length)),
              (s = e[r++]);
          } while (void 0 !== s);
        else
          do {
            (a = s[i]),
              void 0 !== a && (t.push(s.time), n.push(a)),
              (s = e[r++]);
          } while (void 0 !== s);
    },
    subclip: function (e, t, n, i, r = 30) {
      const s = e.clone();
      s.name = t;
      const a = [];
      for (let e = 0; e < s.tracks.length; ++e) {
        const t = s.tracks[e],
          o = t.getValueSize(),
          l = [],
          c = [];
        for (let e = 0; e < t.times.length; ++e) {
          const s = t.times[e] * r;
          if (!(s < n || s >= i)) {
            l.push(t.times[e]);
            for (let n = 0; n < o; ++n) c.push(t.values[e * o + n]);
          }
        }
        0 !== l.length &&
          ((t.times = Lo.convertArray(l, t.times.constructor)),
          (t.values = Lo.convertArray(c, t.values.constructor)),
          a.push(t));
      }
      s.tracks = a;
      let o = 1 / 0;
      for (let e = 0; e < s.tracks.length; ++e)
        o > s.tracks[e].times[0] && (o = s.tracks[e].times[0]);
      for (let e = 0; e < s.tracks.length; ++e) s.tracks[e].shift(-1 * o);
      return s.resetDuration(), s;
    },
    makeClipAdditive: function (e, t = 0, n = e, i = 30) {
      i <= 0 && (i = 30);
      const r = n.tracks.length,
        s = t / i;
      for (let t = 0; t < r; ++t) {
        const i = n.tracks[t],
          r = i.ValueTypeName;
        if ("bool" === r || "string" === r) continue;
        const a = e.tracks.find(function (e) {
          return e.name === i.name && e.ValueTypeName === r;
        });
        if (void 0 === a) continue;
        let o = 0;
        const l = i.getValueSize();
        i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (o = l / 3);
        let c = 0;
        const h = a.getValueSize();
        a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (c = h / 3);
        const u = i.times.length - 1;
        let d;
        if (s <= i.times[0]) {
          const e = o,
            t = l - o;
          d = Lo.arraySlice(i.values, e, t);
        } else if (s >= i.times[u]) {
          const e = u * l + o,
            t = e + l - o;
          d = Lo.arraySlice(i.values, e, t);
        } else {
          const e = i.createInterpolant(),
            t = o,
            n = l - o;
          e.evaluate(s), (d = Lo.arraySlice(e.resultBuffer, t, n));
        }
        "quaternion" === r &&
          new Se().fromArray(d).normalize().conjugate().toArray(d);
        const p = a.times.length;
        for (let e = 0; e < p; ++e) {
          const t = e * h + c;
          if ("quaternion" === r)
            Se.multiplyQuaternionsFlat(a.values, t, d, 0, a.values, t);
          else {
            const e = h - 2 * c;
            for (let n = 0; n < e; ++n) a.values[t + n] -= d[n];
          }
        }
      }
      return (e.blendMode = 2501), e;
    },
  };
  class Co {
    constructor(e, t, n, i) {
      (this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = void 0 !== i ? i : new t.constructor(n)),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {});
    }
    evaluate(e) {
      const t = this.parameterPositions;
      let n = this._cachedIndex,
        i = t[n],
        r = t[n - 1];
      e: {
        t: {
          let s;
          n: {
            i: if (!(e < i)) {
              for (let s = n + 2; ; ) {
                if (void 0 === i) {
                  if (e < r) break i;
                  return (
                    (n = t.length),
                    (this._cachedIndex = n),
                    this.afterEnd_(n - 1, e, r)
                  );
                }
                if (n === s) break;
                if (((r = i), (i = t[++n]), e < i)) break t;
              }
              s = t.length;
              break n;
            }
            if (e >= r) break e;
            {
              const a = t[1];
              e < a && ((n = 2), (r = a));
              for (let s = n - 2; ; ) {
                if (void 0 === r)
                  return (this._cachedIndex = 0), this.beforeStart_(0, e, i);
                if (n === s) break;
                if (((i = r), (r = t[--n - 1]), e >= r)) break t;
              }
              (s = n), (n = 0);
            }
          }
          for (; n < s; ) {
            const i = (n + s) >>> 1;
            e < t[i] ? (s = i) : (n = i + 1);
          }
          if (((i = t[n]), (r = t[n - 1]), void 0 === r))
            return (this._cachedIndex = 0), this.beforeStart_(0, e, i);
          if (void 0 === i)
            return (
              (n = t.length),
              (this._cachedIndex = n),
              this.afterEnd_(n - 1, r, e)
            );
        }
        (this._cachedIndex = n), this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, e, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      const t = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = e * i;
      for (let e = 0; e !== i; ++e) t[e] = n[r + e];
      return t;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {}
  }
  (Co.prototype.beforeStart_ = Co.prototype.copySampleValue_),
    (Co.prototype.afterEnd_ = Co.prototype.copySampleValue_);
  class Po extends Co {
    constructor(e, t, n, i) {
      super(e, t, n, i),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: R, endingEnd: R });
    }
    intervalChanged_(e, t, n) {
      const i = this.parameterPositions;
      let r = e - 2,
        s = e + 1,
        a = i[r],
        o = i[s];
      if (void 0 === a)
        switch (this.getSettings_().endingStart) {
          case L:
            (r = e), (a = 2 * t - n);
            break;
          case C:
            (r = i.length - 2), (a = t + i[r] - i[r + 1]);
            break;
          default:
            (r = e), (a = n);
        }
      if (void 0 === o)
        switch (this.getSettings_().endingEnd) {
          case L:
            (s = e), (o = 2 * n - t);
            break;
          case C:
            (s = 1), (o = n + i[1] - i[0]);
            break;
          default:
            (s = e - 1), (o = t);
        }
      const l = 0.5 * (n - t),
        c = this.valueSize;
      (this._weightPrev = l / (t - a)),
        (this._weightNext = l / (o - n)),
        (this._offsetPrev = r * c),
        (this._offsetNext = s * c);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = e * a,
        l = o - a,
        c = this._offsetPrev,
        h = this._offsetNext,
        u = this._weightPrev,
        d = this._weightNext,
        p = (n - t) / (i - t),
        f = p * p,
        m = f * p,
        g = -u * m + 2 * u * f - u * p,
        v = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
        x = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
        y = d * m - d * f;
      for (let e = 0; e !== a; ++e)
        r[e] = g * s[c + e] + v * s[l + e] + x * s[o + e] + y * s[h + e];
      return r;
    }
  }
  class Do extends Co {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = e * a,
        l = o - a,
        c = (n - t) / (i - t),
        h = 1 - c;
      for (let e = 0; e !== a; ++e) r[e] = s[l + e] * h + s[o + e] * c;
      return r;
    }
  }
  class Io extends Co {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  }
  class No {
    constructor(e, t, n, i) {
      if (void 0 === e)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === t || 0 === t.length)
        throw new Error(
          "THREE.KeyframeTrack: no keyframes in track named " + e
        );
      (this.name = e),
        (this.times = Lo.convertArray(t, this.TimeBufferType)),
        (this.values = Lo.convertArray(n, this.ValueBufferType)),
        this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(e) {
      const t = e.constructor;
      let n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: Lo.convertArray(e.times, Array),
          values: Lo.convertArray(e.values, Array),
        };
        const t = e.getInterpolation();
        t !== e.DefaultInterpolation && (n.interpolation = t);
      }
      return (n.type = e.ValueTypeName), n;
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new Io(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new Do(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new Po(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case T:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case E:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case A:
          t = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === t) {
        const t =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (void 0 === this.createInterpolant) {
          if (e === this.DefaultInterpolation) throw new Error(t);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", t), this;
      }
      return (this.createInterpolant = t), this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return T;
        case this.InterpolantFactoryMethodLinear:
          return E;
        case this.InterpolantFactoryMethodSmooth:
          return A;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (0 !== e) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (1 !== e) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      const n = this.times,
        i = n.length;
      let r = 0,
        s = i - 1;
      for (; r !== i && n[r] < e; ) ++r;
      for (; -1 !== s && n[s] > t; ) --s;
      if ((++s, 0 !== r || s !== i)) {
        r >= s && ((s = Math.max(s, 1)), (r = s - 1));
        const e = this.getValueSize();
        (this.times = Lo.arraySlice(n, r, s)),
          (this.values = Lo.arraySlice(this.values, r * e, s * e));
      }
      return this;
    }
    validate() {
      let e = !0;
      const t = this.getValueSize();
      t - Math.floor(t) != 0 &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this
        ),
        (e = !1));
      const n = this.times,
        i = this.values,
        r = n.length;
      0 === r &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
      let s = null;
      for (let t = 0; t !== r; t++) {
        const i = n[t];
        if ("number" == typeof i && isNaN(i)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            t,
            i
          ),
            (e = !1);
          break;
        }
        if (null !== s && s > i) {
          console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            t,
            i,
            s
          ),
            (e = !1);
          break;
        }
        s = i;
      }
      if (void 0 !== i && Lo.isTypedArray(i))
        for (let t = 0, n = i.length; t !== n; ++t) {
          const n = i[t];
          if (isNaN(n)) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              t,
              n
            ),
              (e = !1);
            break;
          }
        }
      return e;
    }
    optimize() {
      const e = Lo.arraySlice(this.times),
        t = Lo.arraySlice(this.values),
        n = this.getValueSize(),
        i = this.getInterpolation() === A,
        r = e.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r = !1;
        const o = e[a];
        if (o !== e[a + 1] && (1 !== a || o !== e[0]))
          if (i) r = !0;
          else {
            const e = a * n,
              i = e - n,
              s = e + n;
            for (let a = 0; a !== n; ++a) {
              const n = t[e + a];
              if (n !== t[i + a] || n !== t[s + a]) {
                r = !0;
                break;
              }
            }
          }
        if (r) {
          if (a !== s) {
            e[s] = e[a];
            const i = a * n,
              r = s * n;
            for (let e = 0; e !== n; ++e) t[r + e] = t[i + e];
          }
          ++s;
        }
      }
      if (r > 0) {
        e[s] = e[r];
        for (let e = r * n, i = s * n, a = 0; a !== n; ++a) t[i + a] = t[e + a];
        ++s;
      }
      return (
        s !== e.length
          ? ((this.times = Lo.arraySlice(e, 0, s)),
            (this.values = Lo.arraySlice(t, 0, s * n)))
          : ((this.times = e), (this.values = t)),
        this
      );
    }
    clone() {
      const e = Lo.arraySlice(this.times, 0),
        t = Lo.arraySlice(this.values, 0),
        n = new (0, this.constructor)(this.name, e, t);
      return (n.createInterpolant = this.createInterpolant), n;
    }
  }
  (No.prototype.TimeBufferType = Float32Array),
    (No.prototype.ValueBufferType = Float32Array),
    (No.prototype.DefaultInterpolation = E);
  class Oo extends No {}
  (Oo.prototype.ValueTypeName = "bool"),
    (Oo.prototype.ValueBufferType = Array),
    (Oo.prototype.DefaultInterpolation = T),
    (Oo.prototype.InterpolantFactoryMethodLinear = void 0),
    (Oo.prototype.InterpolantFactoryMethodSmooth = void 0);
  class zo extends No {}
  zo.prototype.ValueTypeName = "color";
  class Uo extends No {}
  Uo.prototype.ValueTypeName = "number";
  class Bo extends Co {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = (n - t) / (i - t);
      let l = e * a;
      for (let e = l + a; l !== e; l += 4)
        Se.slerpFlat(r, 0, s, l - a, s, l, o);
      return r;
    }
  }
  class Fo extends No {
    InterpolantFactoryMethodLinear(e) {
      return new Bo(this.times, this.values, this.getValueSize(), e);
    }
  }
  (Fo.prototype.ValueTypeName = "quaternion"),
    (Fo.prototype.DefaultInterpolation = E),
    (Fo.prototype.InterpolantFactoryMethodSmooth = void 0);
  class Ho extends No {}
  (Ho.prototype.ValueTypeName = "string"),
    (Ho.prototype.ValueBufferType = Array),
    (Ho.prototype.DefaultInterpolation = T),
    (Ho.prototype.InterpolantFactoryMethodLinear = void 0),
    (Ho.prototype.InterpolantFactoryMethodSmooth = void 0);
  class ko extends No {}
  ko.prototype.ValueTypeName = "vector";
  class Go {
    constructor(e, t = -1, n, i = 2500) {
      (this.name = e),
        (this.tracks = n),
        (this.duration = t),
        (this.blendMode = i),
        (this.uuid = j()),
        this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
      const t = [],
        n = e.tracks,
        i = 1 / (e.fps || 1);
      for (let e = 0, r = n.length; e !== r; ++e) t.push(Vo(n[e]).scale(i));
      const r = new this(e.name, e.duration, t, e.blendMode);
      return (r.uuid = e.uuid), r;
    }
    static toJSON(e) {
      const t = [],
        n = e.tracks,
        i = {
          name: e.name,
          duration: e.duration,
          tracks: t,
          uuid: e.uuid,
          blendMode: e.blendMode,
        };
      for (let e = 0, i = n.length; e !== i; ++e) t.push(No.toJSON(n[e]));
      return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
      const r = t.length,
        s = [];
      for (let e = 0; e < r; e++) {
        let a = [],
          o = [];
        a.push((e + r - 1) % r, e, (e + 1) % r), o.push(0, 1, 0);
        const l = Lo.getKeyframeOrder(a);
        (a = Lo.sortedArray(a, 1, l)),
          (o = Lo.sortedArray(o, 1, l)),
          i || 0 !== a[0] || (a.push(r), o.push(o[0])),
          s.push(
            new Uo(".morphTargetInfluences[" + t[e].name + "]", a, o).scale(
              1 / n
            )
          );
      }
      return new this(e, -1, s);
    }
    static findByName(e, t) {
      let n = e;
      if (!Array.isArray(e)) {
        const t = e;
        n = (t.geometry && t.geometry.animations) || t.animations;
      }
      for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
      const i = {},
        r = /^([\w-]*?)([\d]+)$/;
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t],
          s = n.name.match(r);
        if (s && s.length > 1) {
          const e = s[1];
          let t = i[e];
          t || (i[e] = t = []), t.push(n);
        }
      }
      const s = [];
      for (const e in i)
        s.push(this.CreateFromMorphTargetSequence(e, i[e], t, n));
      return s;
    }
    static parseAnimation(e, t) {
      if (!e)
        return (
          console.error(
            "THREE.AnimationClip: No animation in JSONLoader data."
          ),
          null
        );
      const n = function (e, t, n, i, r) {
          if (0 !== n.length) {
            const s = [],
              a = [];
            Lo.flattenJSON(n, s, a, i),
              0 !== s.length && r.push(new e(t, s, a));
          }
        },
        i = [],
        r = e.name || "default",
        s = e.fps || 30,
        a = e.blendMode;
      let o = e.length || -1;
      const l = e.hierarchy || [];
      for (let e = 0; e < l.length; e++) {
        const r = l[e].keys;
        if (r && 0 !== r.length)
          if (r[0].morphTargets) {
            const e = {};
            let t;
            for (t = 0; t < r.length; t++)
              if (r[t].morphTargets)
                for (let n = 0; n < r[t].morphTargets.length; n++)
                  e[r[t].morphTargets[n]] = -1;
            for (const n in e) {
              const e = [],
                s = [];
              for (let i = 0; i !== r[t].morphTargets.length; ++i) {
                const i = r[t];
                e.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
              }
              i.push(new Uo(".morphTargetInfluence[" + n + "]", e, s));
            }
            o = e.length * s;
          } else {
            const s = ".bones[" + t[e].name + "]";
            n(ko, s + ".position", r, "pos", i),
              n(Fo, s + ".quaternion", r, "rot", i),
              n(ko, s + ".scale", r, "scl", i);
          }
      }
      return 0 === i.length ? null : new this(r, o, i, a);
    }
    resetDuration() {
      let e = 0;
      for (let t = 0, n = this.tracks.length; t !== n; ++t) {
        const n = this.tracks[t];
        e = Math.max(e, n.times[n.times.length - 1]);
      }
      return (this.duration = e), this;
    }
    trim() {
      for (let e = 0; e < this.tracks.length; e++)
        this.tracks[e].trim(0, this.duration);
      return this;
    }
    validate() {
      let e = !0;
      for (let t = 0; t < this.tracks.length; t++)
        e = e && this.tracks[t].validate();
      return e;
    }
    optimize() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
      return this;
    }
    clone() {
      const e = [];
      for (let t = 0; t < this.tracks.length; t++)
        e.push(this.tracks[t].clone());
      return new this.constructor(this.name, this.duration, e, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function Vo(e) {
    if (void 0 === e.type)
      throw new Error(
        "THREE.KeyframeTrack: track type undefined, can not parse"
      );
    const t = (function (e) {
      switch (e.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return Uo;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return ko;
        case "color":
          return zo;
        case "quaternion":
          return Fo;
        case "bool":
        case "boolean":
          return Oo;
        case "string":
          return Ho;
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
    })(e.type);
    if (void 0 === e.times) {
      const t = [],
        n = [];
      Lo.flattenJSON(e.keys, t, n, "value"), (e.times = t), (e.values = n);
    }
    return void 0 !== t.parse
      ? t.parse(e)
      : new t(e.name, e.times, e.values, e.interpolation);
  }
  const Wo = {
    enabled: !1,
    files: {},
    add: function (e, t) {
      !1 !== this.enabled && (this.files[e] = t);
    },
    get: function (e) {
      if (!1 !== this.enabled) return this.files[e];
    },
    remove: function (e) {
      delete this.files[e];
    },
    clear: function () {
      this.files = {};
    },
  };
  const jo = new (class {
    constructor(e, t, n) {
      const i = this;
      let r,
        s = !1,
        a = 0,
        o = 0;
      const l = [];
      (this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = n),
        (this.itemStart = function (e) {
          o++, !1 === s && void 0 !== i.onStart && i.onStart(e, a, o), (s = !0);
        }),
        (this.itemEnd = function (e) {
          a++,
            void 0 !== i.onProgress && i.onProgress(e, a, o),
            a === o && ((s = !1), void 0 !== i.onLoad && i.onLoad());
        }),
        (this.itemError = function (e) {
          void 0 !== i.onError && i.onError(e);
        }),
        (this.resolveURL = function (e) {
          return r ? r(e) : e;
        }),
        (this.setURLModifier = function (e) {
          return (r = e), this;
        }),
        (this.addHandler = function (e, t) {
          return l.push(e, t), this;
        }),
        (this.removeHandler = function (e) {
          const t = l.indexOf(e);
          return -1 !== t && l.splice(t, 2), this;
        }),
        (this.getHandler = function (e) {
          for (let t = 0, n = l.length; t < n; t += 2) {
            const n = l[t],
              i = l[t + 1];
            if ((n.global && (n.lastIndex = 0), n.test(e))) return i;
          }
          return null;
        });
    }
  })();
  class qo {
    constructor(e) {
      (this.manager = void 0 !== e ? e : jo),
        (this.crossOrigin = "anonymous"),
        (this.withCredentials = !1),
        (this.path = ""),
        (this.resourcePath = ""),
        (this.requestHeader = {});
    }
    load() {}
    loadAsync(e, t) {
      const n = this;
      return new Promise(function (i, r) {
        n.load(e, i, t, r);
      });
    }
    parse() {}
    setCrossOrigin(e) {
      return (this.crossOrigin = e), this;
    }
    setWithCredentials(e) {
      return (this.withCredentials = e), this;
    }
    setPath(e) {
      return (this.path = e), this;
    }
    setResourcePath(e) {
      return (this.resourcePath = e), this;
    }
    setRequestHeader(e) {
      return (this.requestHeader = e), this;
    }
  }
  const Xo = {};
  class Yo extends qo {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const r = Wo.get(e);
      if (void 0 !== r)
        return (
          this.manager.itemStart(e),
          setTimeout(() => {
            t && t(r), this.manager.itemEnd(e);
          }, 0),
          r
        );
      if (void 0 !== Xo[e])
        return void Xo[e].push({ onLoad: t, onProgress: n, onError: i });
      (Xo[e] = []), Xo[e].push({ onLoad: t, onProgress: n, onError: i });
      const s = new Request(e, {
          headers: new Headers(this.requestHeader),
          credentials: this.withCredentials ? "include" : "same-origin",
        }),
        a = this.mimeType,
        o = this.responseType;
      fetch(s)
        .then((t) => {
          if (200 === t.status || 0 === t.status) {
            if (
              (0 === t.status &&
                console.warn("THREE.FileLoader: HTTP Status 0 received."),
              "undefined" == typeof ReadableStream ||
                void 0 === t.body ||
                void 0 === t.body.getReader)
            )
              return t;
            const n = Xo[e],
              i = t.body.getReader(),
              r = t.headers.get("Content-Length"),
              s = r ? parseInt(r) : 0,
              a = 0 !== s;
            let o = 0;
            const l = new ReadableStream({
              start(e) {
                !(function t() {
                  i.read().then(({ done: i, value: r }) => {
                    if (i) e.close();
                    else {
                      o += r.byteLength;
                      const i = new ProgressEvent("progress", {
                        lengthComputable: a,
                        loaded: o,
                        total: s,
                      });
                      for (let e = 0, t = n.length; e < t; e++) {
                        const t = n[e];
                        t.onProgress && t.onProgress(i);
                      }
                      e.enqueue(r), t();
                    }
                  });
                })();
              },
            });
            return new Response(l);
          }
          throw Error(
            `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`
          );
        })
        .then((e) => {
          switch (o) {
            case "arraybuffer":
              return e.arrayBuffer();
            case "blob":
              return e.blob();
            case "document":
              return e
                .text()
                .then((e) => new DOMParser().parseFromString(e, a));
            case "json":
              return e.json();
            default:
              if (void 0 === a) return e.text();
              {
                const t = /charset="?([^;"\s]*)"?/i.exec(a),
                  n = t && t[1] ? t[1].toLowerCase() : void 0,
                  i = new TextDecoder(n);
                return e.arrayBuffer().then((e) => i.decode(e));
              }
          }
        })
        .then((t) => {
          Wo.add(e, t);
          const n = Xo[e];
          delete Xo[e];
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            i.onLoad && i.onLoad(t);
          }
        })
        .catch((t) => {
          const n = Xo[e];
          if (void 0 === n) throw (this.manager.itemError(e), t);
          delete Xo[e];
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            i.onError && i.onError(t);
          }
          this.manager.itemError(e);
        })
        .finally(() => {
          this.manager.itemEnd(e);
        }),
        this.manager.itemStart(e);
    }
    setResponseType(e) {
      return (this.responseType = e), this;
    }
    setMimeType(e) {
      return (this.mimeType = e), this;
    }
  }
  class Jo extends qo {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const r = this,
        s = Wo.get(e);
      if (void 0 !== s)
        return (
          r.manager.itemStart(e),
          setTimeout(function () {
            t && t(s), r.manager.itemEnd(e);
          }, 0),
          s
        );
      const a = ne("img");
      function o() {
        c(), Wo.add(e, this), t && t(this), r.manager.itemEnd(e);
      }
      function l(t) {
        c(), i && i(t), r.manager.itemError(e), r.manager.itemEnd(e);
      }
      function c() {
        a.removeEventListener("load", o, !1),
          a.removeEventListener("error", l, !1);
      }
      return (
        a.addEventListener("load", o, !1),
        a.addEventListener("error", l, !1),
        "data:" !== e.slice(0, 5) &&
          void 0 !== this.crossOrigin &&
          (a.crossOrigin = this.crossOrigin),
        r.manager.itemStart(e),
        (a.src = e),
        a
      );
    }
  }
  class Zo extends qo {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const r = new Pn(),
        s = new Jo(this.manager);
      s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
      let a = 0;
      function o(n) {
        s.load(
          e[n],
          function (e) {
            (r.images[n] = e),
              a++,
              6 === a && ((r.needsUpdate = !0), t && t(r));
          },
          void 0,
          i
        );
      }
      for (let t = 0; t < e.length; ++t) o(t);
      return r;
    }
  }
  class Ko extends qo {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const r = new ye(),
        s = new Jo(this.manager);
      return (
        s.setCrossOrigin(this.crossOrigin),
        s.setPath(this.path),
        s.load(
          e,
          function (e) {
            (r.image = e), (r.needsUpdate = !0), void 0 !== t && t(r);
          },
          n,
          i
        ),
        r
      );
    }
  }
  class Qo extends At {
    constructor(e, t = 1) {
      super(),
        (this.type = "Light"),
        (this.color = new pe(e)),
        (this.intensity = t);
    }
    dispose() {}
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.intensity = e.intensity),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.color = this.color.getHex()),
        (t.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (t.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (t.object.distance = this.distance),
        void 0 !== this.angle && (t.object.angle = this.angle),
        void 0 !== this.decay && (t.object.decay = this.decay),
        void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
        t
      );
    }
  }
  Qo.prototype.isLight = !0;
  (class extends Qo {
    constructor(e, t, n) {
      super(e, n),
        (this.type = "HemisphereLight"),
        this.position.copy(At.DefaultUp),
        this.updateMatrix(),
        (this.groundColor = new pe(t));
    }
    copy(e) {
      return (
        Qo.prototype.copy.call(this, e),
        this.groundColor.copy(e.groundColor),
        this
      );
    }
  }).prototype.isHemisphereLight = !0;
  const $o = new nt(),
    el = new Te(),
    tl = new Te();
  class nl {
    constructor(e) {
      (this.camera = e),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new $(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new nt()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Fn()),
        (this._frameExtents = new $(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new _e(0, 0, 1, 1)]);
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      const t = this.camera,
        n = this.matrix;
      el.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(el),
        tl.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(tl),
        t.updateMatrixWorld(),
        $o.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix($o),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(t.projectionMatrix),
        n.multiply(t.matrixWorldInverse);
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
      return (
        (this.camera = e.camera.clone()),
        (this.bias = e.bias),
        (this.radius = e.radius),
        this.mapSize.copy(e.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const e = {};
      return (
        0 !== this.bias && (e.bias = this.bias),
        0 !== this.normalBias && (e.normalBias = this.normalBias),
        1 !== this.radius && (e.radius = this.radius),
        (512 === this.mapSize.x && 512 === this.mapSize.y) ||
          (e.mapSize = this.mapSize.toArray()),
        (e.camera = this.camera.toJSON(!1).object),
        delete e.camera.matrix,
        e
      );
    }
  }
  class il extends nl {
    constructor() {
      super(new Rn(50, 1, 0.5, 500)), (this.focus = 1);
    }
    updateMatrices(e) {
      const t = this.camera,
        n = 2 * W * e.angle * this.focus,
        i = this.mapSize.width / this.mapSize.height,
        r = e.distance || t.far;
      (n === t.fov && i === t.aspect && r === t.far) ||
        ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
        super.updateMatrices(e);
    }
    copy(e) {
      return super.copy(e), (this.focus = e.focus), this;
    }
  }
  il.prototype.isSpotLightShadow = !0;
  class rl extends Qo {
    constructor(e, t, n = 0, i = Math.PI / 3, r = 0, s = 1) {
      super(e, t),
        (this.type = "SpotLight"),
        this.position.copy(At.DefaultUp),
        this.updateMatrix(),
        (this.target = new At()),
        (this.distance = n),
        (this.angle = i),
        (this.penumbra = r),
        (this.decay = s),
        (this.shadow = new il());
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return (
        super.copy(e),
        (this.distance = e.distance),
        (this.angle = e.angle),
        (this.penumbra = e.penumbra),
        (this.decay = e.decay),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  rl.prototype.isSpotLight = !0;
  const sl = new nt(),
    al = new Te(),
    ol = new Te();
  class ll extends nl {
    constructor() {
      super(new Rn(90, 1, 0.5, 500)),
        (this._frameExtents = new $(4, 2)),
        (this._viewportCount = 6),
        (this._viewports = [
          new _e(2, 1, 1, 1),
          new _e(0, 1, 1, 1),
          new _e(3, 1, 1, 1),
          new _e(1, 1, 1, 1),
          new _e(3, 0, 1, 1),
          new _e(1, 0, 1, 1),
        ]),
        (this._cubeDirections = [
          new Te(1, 0, 0),
          new Te(-1, 0, 0),
          new Te(0, 0, 1),
          new Te(0, 0, -1),
          new Te(0, 1, 0),
          new Te(0, -1, 0),
        ]),
        (this._cubeUps = [
          new Te(0, 1, 0),
          new Te(0, 1, 0),
          new Te(0, 1, 0),
          new Te(0, 1, 0),
          new Te(0, 0, 1),
          new Te(0, 0, -1),
        ]);
    }
    updateMatrices(e, t = 0) {
      const n = this.camera,
        i = this.matrix,
        r = e.distance || n.far;
      r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
        al.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(al),
        ol.copy(n.position),
        ol.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(ol),
        n.updateMatrixWorld(),
        i.makeTranslation(-al.x, -al.y, -al.z),
        sl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(sl);
    }
  }
  ll.prototype.isPointLightShadow = !0;
  class cl extends Qo {
    constructor(e, t, n = 0, i = 1) {
      super(e, t),
        (this.type = "PointLight"),
        (this.distance = n),
        (this.decay = i),
        (this.shadow = new ll());
    }
    get power() {
      return 4 * this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return (
        super.copy(e),
        (this.distance = e.distance),
        (this.decay = e.decay),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  cl.prototype.isPointLight = !0;
  class hl extends nl {
    constructor() {
      super(new Qn(-5, 5, 5, -5, 0.5, 500));
    }
  }
  hl.prototype.isDirectionalLightShadow = !0;
  class ul extends Qo {
    constructor(e, t) {
      super(e, t),
        (this.type = "DirectionalLight"),
        this.position.copy(At.DefaultUp),
        this.updateMatrix(),
        (this.target = new At()),
        (this.shadow = new hl());
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return (
        super.copy(e),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  ul.prototype.isDirectionalLight = !0;
  (class extends Qo {
    constructor(e, t) {
      super(e, t), (this.type = "AmbientLight");
    }
  }).prototype.isAmbientLight = !0;
  (class extends Qo {
    constructor(e, t, n = 10, i = 10) {
      super(e, t),
        (this.type = "RectAreaLight"),
        (this.width = n),
        (this.height = i);
    }
    get power() {
      return this.intensity * this.width * this.height * Math.PI;
    }
    set power(e) {
      this.intensity = e / (this.width * this.height * Math.PI);
    }
    copy(e) {
      return (
        super.copy(e), (this.width = e.width), (this.height = e.height), this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (t.object.width = this.width), (t.object.height = this.height), t;
    }
  }).prototype.isRectAreaLight = !0;
  class dl {
    constructor() {
      this.coefficients = [];
      for (let e = 0; e < 9; e++) this.coefficients.push(new Te());
    }
    set(e) {
      for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
      return this;
    }
    zero() {
      for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
      return this;
    }
    getAt(e, t) {
      const n = e.x,
        i = e.y,
        r = e.z,
        s = this.coefficients;
      return (
        t.copy(s[0]).multiplyScalar(0.282095),
        t.addScaledVector(s[1], 0.488603 * i),
        t.addScaledVector(s[2], 0.488603 * r),
        t.addScaledVector(s[3], 0.488603 * n),
        t.addScaledVector(s[4], n * i * 1.092548),
        t.addScaledVector(s[5], i * r * 1.092548),
        t.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)),
        t.addScaledVector(s[7], n * r * 1.092548),
        t.addScaledVector(s[8], 0.546274 * (n * n - i * i)),
        t
      );
    }
    getIrradianceAt(e, t) {
      const n = e.x,
        i = e.y,
        r = e.z,
        s = this.coefficients;
      return (
        t.copy(s[0]).multiplyScalar(0.886227),
        t.addScaledVector(s[1], 1.023328 * i),
        t.addScaledVector(s[2], 1.023328 * r),
        t.addScaledVector(s[3], 1.023328 * n),
        t.addScaledVector(s[4], 0.858086 * n * i),
        t.addScaledVector(s[5], 0.858086 * i * r),
        t.addScaledVector(s[6], 0.743125 * r * r - 0.247708),
        t.addScaledVector(s[7], 0.858086 * n * r),
        t.addScaledVector(s[8], 0.429043 * (n * n - i * i)),
        t
      );
    }
    add(e) {
      for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
      return this;
    }
    addScaledSH(e, t) {
      for (let n = 0; n < 9; n++)
        this.coefficients[n].addScaledVector(e.coefficients[n], t);
      return this;
    }
    scale(e) {
      for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
      return this;
    }
    lerp(e, t) {
      for (let n = 0; n < 9; n++)
        this.coefficients[n].lerp(e.coefficients[n], t);
      return this;
    }
    equals(e) {
      for (let t = 0; t < 9; t++)
        if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
      return !0;
    }
    copy(e) {
      return this.set(e.coefficients);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    fromArray(e, t = 0) {
      const n = this.coefficients;
      for (let i = 0; i < 9; i++) n[i].fromArray(e, t + 3 * i);
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.coefficients;
      for (let i = 0; i < 9; i++) n[i].toArray(e, t + 3 * i);
      return e;
    }
    static getBasisAt(e, t) {
      const n = e.x,
        i = e.y,
        r = e.z;
      (t[0] = 0.282095),
        (t[1] = 0.488603 * i),
        (t[2] = 0.488603 * r),
        (t[3] = 0.488603 * n),
        (t[4] = 1.092548 * n * i),
        (t[5] = 1.092548 * i * r),
        (t[6] = 0.315392 * (3 * r * r - 1)),
        (t[7] = 1.092548 * n * r),
        (t[8] = 0.546274 * (n * n - i * i));
    }
  }
  dl.prototype.isSphericalHarmonics3 = !0;
  class pl extends Qo {
    constructor(e = new dl(), t = 1) {
      super(void 0, t), (this.sh = e);
    }
    copy(e) {
      return super.copy(e), this.sh.copy(e.sh), this;
    }
    fromJSON(e) {
      return (this.intensity = e.intensity), this.sh.fromArray(e.sh), this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (t.object.sh = this.sh.toArray()), t;
    }
  }
  pl.prototype.isLightProbe = !0;
  class fl {
    static decodeText(e) {
      if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
      let t = "";
      for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t));
      } catch (e) {
        return t;
      }
    }
    static extractUrlBase(e) {
      const t = e.lastIndexOf("/");
      return -1 === t ? "./" : e.slice(0, t + 1);
    }
    static resolveURL(e, t) {
      return "string" != typeof e || "" === e
        ? ""
        : (/^https?:\/\//i.test(t) &&
            /^\//.test(e) &&
            (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
          /^(https?:)?\/\//i.test(e) ||
          /^data:.*,.*$/i.test(e) ||
          /^blob:.*$/i.test(e)
            ? e
            : t + e);
    }
  }
  (class extends tn {
    constructor() {
      super(),
        (this.type = "InstancedBufferGeometry"),
        (this.instanceCount = 1 / 0);
    }
    copy(e) {
      return super.copy(e), (this.instanceCount = e.instanceCount), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const e = super.toJSON(this);
      return (
        (e.instanceCount = this.instanceCount),
        (e.isInstancedBufferGeometry = !0),
        e
      );
    }
  }).prototype.isInstancedBufferGeometry = !0;
  class ml extends qo {
    constructor(e) {
      super(e),
        "undefined" == typeof createImageBitmap &&
          console.warn(
            "THREE.ImageBitmapLoader: createImageBitmap() not supported."
          ),
        "undefined" == typeof fetch &&
          console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        (this.options = { premultiplyAlpha: "none" });
    }
    setOptions(e) {
      return (this.options = e), this;
    }
    load(e, t, n, i) {
      void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const r = this,
        s = Wo.get(e);
      if (void 0 !== s)
        return (
          r.manager.itemStart(e),
          setTimeout(function () {
            t && t(s), r.manager.itemEnd(e);
          }, 0),
          s
        );
      const a = {};
      (a.credentials =
        "anonymous" === this.crossOrigin ? "same-origin" : "include"),
        (a.headers = this.requestHeader),
        fetch(e, a)
          .then(function (e) {
            return e.blob();
          })
          .then(function (e) {
            return createImageBitmap(
              e,
              Object.assign(r.options, { colorSpaceConversion: "none" })
            );
          })
          .then(function (n) {
            Wo.add(e, n), t && t(n), r.manager.itemEnd(e);
          })
          .catch(function (t) {
            i && i(t), r.manager.itemError(e), r.manager.itemEnd(e);
          }),
        r.manager.itemStart(e);
    }
  }
  let gl;
  ml.prototype.isImageBitmapLoader = !0;
  class vl extends qo {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const r = this,
        s = new Yo(this.manager);
      s.setResponseType("arraybuffer"),
        s.setPath(this.path),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(this.withCredentials),
        s.load(
          e,
          function (n) {
            try {
              const e = n.slice(0);
              (void 0 === gl &&
                (gl = new (window.AudioContext || window.webkitAudioContext)()),
              gl).decodeAudioData(e, function (e) {
                t(e);
              });
            } catch (t) {
              i ? i(t) : console.error(t), r.manager.itemError(e);
            }
          },
          n,
          i
        );
    }
  }
  ((class extends pl {
    constructor(e, t, n = 1) {
      super(void 0, n);
      const i = new pe().set(e),
        r = new pe().set(t),
        s = new Te(i.r, i.g, i.b),
        a = new Te(r.r, r.g, r.b),
        o = Math.sqrt(Math.PI),
        l = o * Math.sqrt(0.75);
      this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),
        this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
    }
  }).prototype.isHemisphereLightProbe = !0),
    (class extends pl {
      constructor(e, t = 1) {
        super(void 0, t);
        const n = new pe().set(e);
        this.sh.coefficients[0]
          .set(n.r, n.g, n.b)
          .multiplyScalar(2 * Math.sqrt(Math.PI));
      }
    }.prototype.isAmbientLightProbe = !0);
  function xl() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }
  class yl {
    constructor(e, t, n) {
      let i, r, s;
      switch (((this.binding = e), (this.valueSize = n), t)) {
        case "quaternion":
          (i = this._slerp),
            (r = this._slerpAdditive),
            (s = this._setAdditiveIdentityQuaternion),
            (this.buffer = new Float64Array(6 * n)),
            (this._workIndex = 5);
          break;
        case "string":
        case "bool":
          (i = this._select),
            (r = this._select),
            (s = this._setAdditiveIdentityOther),
            (this.buffer = new Array(5 * n));
          break;
        default:
          (i = this._lerp),
            (r = this._lerpAdditive),
            (s = this._setAdditiveIdentityNumeric),
            (this.buffer = new Float64Array(5 * n));
      }
      (this._mixBufferRegion = i),
        (this._mixBufferRegionAdditive = r),
        (this._setIdentity = s),
        (this._origIndex = 3),
        (this._addIndex = 4),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        (this.useCount = 0),
        (this.referenceCount = 0);
    }
    accumulate(e, t) {
      const n = this.buffer,
        i = this.valueSize,
        r = e * i + i;
      let s = this.cumulativeWeight;
      if (0 === s) {
        for (let e = 0; e !== i; ++e) n[r + e] = n[e];
        s = t;
      } else {
        s += t;
        const e = t / s;
        this._mixBufferRegion(n, r, 0, e, i);
      }
      this.cumulativeWeight = s;
    }
    accumulateAdditive(e) {
      const t = this.buffer,
        n = this.valueSize,
        i = n * this._addIndex;
      0 === this.cumulativeWeightAdditive && this._setIdentity(),
        this._mixBufferRegionAdditive(t, i, 0, e, n),
        (this.cumulativeWeightAdditive += e);
    }
    apply(e) {
      const t = this.valueSize,
        n = this.buffer,
        i = e * t + t,
        r = this.cumulativeWeight,
        s = this.cumulativeWeightAdditive,
        a = this.binding;
      if (
        ((this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        r < 1)
      ) {
        const e = t * this._origIndex;
        this._mixBufferRegion(n, i, e, 1 - r, t);
      }
      s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
      for (let e = t, r = t + t; e !== r; ++e)
        if (n[e] !== n[e + t]) {
          a.setValue(n, i);
          break;
        }
    }
    saveOriginalState() {
      const e = this.binding,
        t = this.buffer,
        n = this.valueSize,
        i = n * this._origIndex;
      e.getValue(t, i);
      for (let e = n, r = i; e !== r; ++e) t[e] = t[i + (e % n)];
      this._setIdentity(),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0);
    }
    restoreOriginalState() {
      const e = 3 * this.valueSize;
      this.binding.setValue(this.buffer, e);
    }
    _setAdditiveIdentityNumeric() {
      const e = this._addIndex * this.valueSize,
        t = e + this.valueSize;
      for (let n = e; n < t; n++) this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
      this._setAdditiveIdentityNumeric(),
        (this.buffer[this._addIndex * this.valueSize + 3] = 1);
    }
    _setAdditiveIdentityOther() {
      const e = this._origIndex * this.valueSize,
        t = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++)
        this.buffer[t + n] = this.buffer[e + n];
    }
    _select(e, t, n, i, r) {
      if (i >= 0.5) for (let i = 0; i !== r; ++i) e[t + i] = e[n + i];
    }
    _slerp(e, t, n, i) {
      Se.slerpFlat(e, t, e, t, e, n, i);
    }
    _slerpAdditive(e, t, n, i, r) {
      const s = this._workIndex * r;
      Se.multiplyQuaternionsFlat(e, s, e, t, e, n),
        Se.slerpFlat(e, t, e, t, e, s, i);
    }
    _lerp(e, t, n, i, r) {
      const s = 1 - i;
      for (let a = 0; a !== r; ++a) {
        const r = t + a;
        e[r] = e[r] * s + e[n + a] * i;
      }
    }
    _lerpAdditive(e, t, n, i, r) {
      for (let s = 0; s !== r; ++s) {
        const r = t + s;
        e[r] = e[r] + e[n + s] * i;
      }
    }
  }
  const _l = new RegExp("[\\[\\]\\.:\\/]", "g"),
    bl = "[^\\[\\]\\.:\\/]",
    wl = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
    Ml = /((?:WC+[\/:])*)/.source.replace("WC", bl),
    Sl = /(WCOD+)?/.source.replace("WCOD", wl),
    Tl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", bl),
    El = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", bl),
    Al = new RegExp("^" + Ml + Sl + Tl + El + "$"),
    Rl = ["material", "materials", "bones"];
  class Ll {
    constructor(e, t, n) {
      (this.path = t),
        (this.parsedPath = n || Ll.parseTrackName(t)),
        (this.node = Ll.findNode(e, this.parsedPath.nodeName) || e),
        (this.rootNode = e),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
    static create(e, t, n) {
      return e && e.isAnimationObjectGroup
        ? new Ll.Composite(e, t, n)
        : new Ll(e, t, n);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, "_").replace(_l, "");
    }
    static parseTrackName(e) {
      const t = Al.exec(e);
      if (null === t)
        throw new Error("PropertyBinding: Cannot parse trackName: " + e);
      const n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const e = n.nodeName.substring(i + 1);
        -1 !== Rl.indexOf(e) &&
          ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = e));
      }
      if (null === n.propertyName || 0 === n.propertyName.length)
        throw new Error(
          "PropertyBinding: can not parse propertyName from trackName: " + e
        );
      return n;
    }
    static findNode(e, t) {
      if (
        void 0 === t ||
        "" === t ||
        "." === t ||
        -1 === t ||
        t === e.name ||
        t === e.uuid
      )
        return e;
      if (e.skeleton) {
        const n = e.skeleton.getBoneByName(t);
        if (void 0 !== n) return n;
      }
      if (e.children) {
        const n = function (e) {
            for (let i = 0; i < e.length; i++) {
              const r = e[i];
              if (r.name === t || r.uuid === t) return r;
              const s = n(r.children);
              if (s) return s;
            }
            return null;
          },
          i = n(e.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      (this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      (this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      (this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _getValue_unbound(e, t) {
      this.bind(), this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
      this.bind(), this.setValue(e, t);
    }
    bind() {
      let e = this.node;
      const t = this.parsedPath,
        n = t.objectName,
        i = t.propertyName;
      let r = t.propertyIndex;
      if (
        (e ||
          ((e = Ll.findNode(this.rootNode, t.nodeName) || this.rootNode),
          (this.node = e)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !e)
      )
        return void console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found."
        );
      if (n) {
        let i = t.objectIndex;
        switch (n) {
          case "materials":
            if (!e.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!e.material.materials)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this
              );
            e = e.material.materials;
            break;
          case "bones":
            if (!e.skeleton)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this
              );
            e = e.skeleton.bones;
            for (let t = 0; t < e.length; t++)
              if (e[t].name === i) {
                i = t;
                break;
              }
            break;
          default:
            if (void 0 === e[n])
              return void console.error(
                "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                this
              );
            e = e[n];
        }
        if (void 0 !== i) {
          if (void 0 === e[i])
            return void console.error(
              "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              e
            );
          e = e[i];
        }
      }
      const s = e[i];
      if (void 0 === s) {
        const n = t.nodeName;
        return void console.error(
          "THREE.PropertyBinding: Trying to update property for track: " +
            n +
            "." +
            i +
            " but it wasn't found.",
          e
        );
      }
      let a = this.Versioning.None;
      (this.targetObject = e),
        void 0 !== e.needsUpdate
          ? (a = this.Versioning.NeedsUpdate)
          : void 0 !== e.matrixWorldNeedsUpdate &&
            (a = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!e.geometry)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this
            );
          if (!e.geometry.isBufferGeometry)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
              this
            );
          if (!e.geometry.morphAttributes)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
          void 0 !== e.morphTargetDictionary[r] &&
            (r = e.morphTargetDictionary[r]);
        }
        (o = this.BindingType.ArrayElement),
          (this.resolvedProperty = s),
          (this.propertyIndex = r);
      } else
        void 0 !== s.fromArray && void 0 !== s.toArray
          ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = s))
          : Array.isArray(s)
          ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = s))
          : (this.propertyName = i);
      (this.getValue = this.GetterByBindingType[o]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
    }
    unbind() {
      (this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
  }
  (Ll.Composite = class {
    constructor(e, t, n) {
      const i = n || Ll.parseTrackName(t);
      (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
    }
    getValue(e, t) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_,
        i = this._bindings[n];
      void 0 !== i && i.getValue(e, t);
    }
    setValue(e, t) {
      const n = this._bindings;
      for (
        let i = this._targetGroup.nCachedObjects_, r = n.length;
        i !== r;
        ++i
      )
        n[i].setValue(e, t);
    }
    bind() {
      const e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].bind();
    }
    unbind() {
      const e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].unbind();
    }
  }),
    (Ll.prototype.BindingType = {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3,
    }),
    (Ll.prototype.Versioning = {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2,
    }),
    (Ll.prototype.GetterByBindingType = [
      Ll.prototype._getValue_direct,
      Ll.prototype._getValue_array,
      Ll.prototype._getValue_arrayElement,
      Ll.prototype._getValue_toArray,
    ]),
    (Ll.prototype.SetterByBindingTypeAndVersioning = [
      [
        Ll.prototype._setValue_direct,
        Ll.prototype._setValue_direct_setNeedsUpdate,
        Ll.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
      ],
      [
        Ll.prototype._setValue_array,
        Ll.prototype._setValue_array_setNeedsUpdate,
        Ll.prototype._setValue_array_setMatrixWorldNeedsUpdate,
      ],
      [
        Ll.prototype._setValue_arrayElement,
        Ll.prototype._setValue_arrayElement_setNeedsUpdate,
        Ll.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
      ],
      [
        Ll.prototype._setValue_fromArray,
        Ll.prototype._setValue_fromArray_setNeedsUpdate,
        Ll.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
      ],
    ]);
  class Cl {
    constructor(e, t, n = null, i = t.blendMode) {
      (this._mixer = e),
        (this._clip = t),
        (this._localRoot = n),
        (this.blendMode = i);
      const r = t.tracks,
        s = r.length,
        a = new Array(s),
        o = { endingStart: R, endingEnd: R };
      for (let e = 0; e !== s; ++e) {
        const t = r[e].createInterpolant(null);
        (a[e] = t), (t.settings = o);
      }
      (this._interpolantSettings = o),
        (this._interpolants = a),
        (this._propertyBindings = new Array(s)),
        (this._cacheIndex = null),
        (this._byClipCacheIndex = null),
        (this._timeScaleInterpolant = null),
        (this._weightInterpolant = null),
        (this.loop = 2201),
        (this._loopCount = -1),
        (this._startTime = null),
        (this.time = 0),
        (this.timeScale = 1),
        (this._effectiveTimeScale = 1),
        (this.weight = 1),
        (this._effectiveWeight = 1),
        (this.repetitions = 1 / 0),
        (this.paused = !1),
        (this.enabled = !0),
        (this.clampWhenFinished = !1),
        (this.zeroSlopeAtStart = !0),
        (this.zeroSlopeAtEnd = !0);
    }
    play() {
      return this._mixer._activateAction(this), this;
    }
    stop() {
      return this._mixer._deactivateAction(this), this.reset();
    }
    reset() {
      return (
        (this.paused = !1),
        (this.enabled = !0),
        (this.time = 0),
        (this._loopCount = -1),
        (this._startTime = null),
        this.stopFading().stopWarping()
      );
    }
    isRunning() {
      return (
        this.enabled &&
        !this.paused &&
        0 !== this.timeScale &&
        null === this._startTime &&
        this._mixer._isActiveAction(this)
      );
    }
    isScheduled() {
      return this._mixer._isActiveAction(this);
    }
    startAt(e) {
      return (this._startTime = e), this;
    }
    setLoop(e, t) {
      return (this.loop = e), (this.repetitions = t), this;
    }
    setEffectiveWeight(e) {
      return (
        (this.weight = e),
        (this._effectiveWeight = this.enabled ? e : 0),
        this.stopFading()
      );
    }
    getEffectiveWeight() {
      return this._effectiveWeight;
    }
    fadeIn(e) {
      return this._scheduleFading(e, 0, 1);
    }
    fadeOut(e) {
      return this._scheduleFading(e, 1, 0);
    }
    crossFadeFrom(e, t, n) {
      if ((e.fadeOut(t), this.fadeIn(t), n)) {
        const n = this._clip.duration,
          i = e._clip.duration,
          r = i / n,
          s = n / i;
        e.warp(1, r, t), this.warp(s, 1, t);
      }
      return this;
    }
    crossFadeTo(e, t, n) {
      return e.crossFadeFrom(this, t, n);
    }
    stopFading() {
      const e = this._weightInterpolant;
      return (
        null !== e &&
          ((this._weightInterpolant = null),
          this._mixer._takeBackControlInterpolant(e)),
        this
      );
    }
    setEffectiveTimeScale(e) {
      return (
        (this.timeScale = e),
        (this._effectiveTimeScale = this.paused ? 0 : e),
        this.stopWarping()
      );
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale;
    }
    setDuration(e) {
      return (this.timeScale = this._clip.duration / e), this.stopWarping();
    }
    syncWith(e) {
      return (
        (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
      );
    }
    halt(e) {
      return this.warp(this._effectiveTimeScale, 0, e);
    }
    warp(e, t, n) {
      const i = this._mixer,
        r = i.time,
        s = this.timeScale;
      let a = this._timeScaleInterpolant;
      null === a &&
        ((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
      const o = a.parameterPositions,
        l = a.sampleValues;
      return (o[0] = r), (o[1] = r + n), (l[0] = e / s), (l[1] = t / s), this;
    }
    stopWarping() {
      const e = this._timeScaleInterpolant;
      return (
        null !== e &&
          ((this._timeScaleInterpolant = null),
          this._mixer._takeBackControlInterpolant(e)),
        this
      );
    }
    getMixer() {
      return this._mixer;
    }
    getClip() {
      return this._clip;
    }
    getRoot() {
      return this._localRoot || this._mixer._root;
    }
    _update(e, t, n, i) {
      if (!this.enabled) return void this._updateWeight(e);
      const r = this._startTime;
      if (null !== r) {
        const i = (e - r) * n;
        if (i < 0 || 0 === n) return;
        (this._startTime = null), (t = n * i);
      }
      t *= this._updateTimeScale(e);
      const s = this._updateTime(t),
        a = this._updateWeight(e);
      if (a > 0) {
        const e = this._interpolants,
          t = this._propertyBindings;
        if (2501 === this.blendMode)
          for (let n = 0, i = e.length; n !== i; ++n)
            e[n].evaluate(s), t[n].accumulateAdditive(a);
        else
          for (let n = 0, r = e.length; n !== r; ++n)
            e[n].evaluate(s), t[n].accumulate(i, a);
      }
    }
    _updateWeight(e) {
      let t = 0;
      if (this.enabled) {
        t = this.weight;
        const n = this._weightInterpolant;
        if (null !== n) {
          const i = n.evaluate(e)[0];
          (t *= i),
            e > n.parameterPositions[1] &&
              (this.stopFading(), 0 === i && (this.enabled = !1));
        }
      }
      return (this._effectiveWeight = t), t;
    }
    _updateTimeScale(e) {
      let t = 0;
      if (!this.paused) {
        t = this.timeScale;
        const n = this._timeScaleInterpolant;
        null !== n &&
          ((t *= n.evaluate(e)[0]),
          e > n.parameterPositions[1] &&
            (this.stopWarping(),
            0 === t ? (this.paused = !0) : (this.timeScale = t)));
      }
      return (this._effectiveTimeScale = t), t;
    }
    _updateTime(e) {
      const t = this._clip.duration,
        n = this.loop;
      let i = this.time + e,
        r = this._loopCount;
      const s = 2202 === n;
      if (0 === e) return -1 === r ? i : s && 1 == (1 & r) ? t - i : i;
      if (2200 === n) {
        -1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
        e: {
          if (i >= t) i = t;
          else {
            if (!(i < 0)) {
              this.time = i;
              break e;
            }
            i = 0;
          }
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e < 0 ? -1 : 1,
            });
        }
      } else {
        if (
          (-1 === r &&
            (e >= 0
              ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, s))
              : this._setEndings(0 === this.repetitions, !0, s)),
          i >= t || i < 0)
        ) {
          const n = Math.floor(i / t);
          (i -= t * n), (r += Math.abs(n));
          const a = this.repetitions - r;
          if (a <= 0)
            this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
              (i = e > 0 ? t : 0),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: e > 0 ? 1 : -1,
              });
          else {
            if (1 === a) {
              const t = e < 0;
              this._setEndings(t, !t, s);
            } else this._setEndings(!1, !1, s);
            (this._loopCount = r),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: n,
              });
          }
        } else this.time = i;
        if (s && 1 == (1 & r)) return t - i;
      }
      return i;
    }
    _setEndings(e, t, n) {
      const i = this._interpolantSettings;
      n
        ? ((i.endingStart = L), (i.endingEnd = L))
        : ((i.endingStart = e ? (this.zeroSlopeAtStart ? L : R) : C),
          (i.endingEnd = t ? (this.zeroSlopeAtEnd ? L : R) : C));
    }
    _scheduleFading(e, t, n) {
      const i = this._mixer,
        r = i.time;
      let s = this._weightInterpolant;
      null === s &&
        ((s = i._lendControlInterpolant()), (this._weightInterpolant = s));
      const a = s.parameterPositions,
        o = s.sampleValues;
      return (a[0] = r), (o[0] = t), (a[1] = r + e), (o[1] = n), this;
    }
  }
  (class extends H {
    constructor(e) {
      super(),
        (this._root = e),
        this._initMemoryManager(),
        (this._accuIndex = 0),
        (this.time = 0),
        (this.timeScale = 1);
    }
    _bindAction(e, t) {
      const n = e._localRoot || this._root,
        i = e._clip.tracks,
        r = i.length,
        s = e._propertyBindings,
        a = e._interpolants,
        o = n.uuid,
        l = this._bindingsByRootAndName;
      let c = l[o];
      void 0 === c && ((c = {}), (l[o] = c));
      for (let e = 0; e !== r; ++e) {
        const r = i[e],
          l = r.name;
        let h = c[l];
        if (void 0 !== h) ++h.referenceCount, (s[e] = h);
        else {
          if (((h = s[e]), void 0 !== h)) {
            null === h._cacheIndex &&
              (++h.referenceCount, this._addInactiveBinding(h, o, l));
            continue;
          }
          const i = t && t._propertyBindings[e].binding.parsedPath;
          (h = new yl(Ll.create(n, l, i), r.ValueTypeName, r.getValueSize())),
            ++h.referenceCount,
            this._addInactiveBinding(h, o, l),
            (s[e] = h);
        }
        a[e].resultBuffer = h.buffer;
      }
    }
    _activateAction(e) {
      if (!this._isActiveAction(e)) {
        if (null === e._cacheIndex) {
          const t = (e._localRoot || this._root).uuid,
            n = e._clip.uuid,
            i = this._actionsByClip[n];
          this._bindAction(e, i && i.knownActions[0]),
            this._addInactiveAction(e, n, t);
        }
        const t = e._propertyBindings;
        for (let e = 0, n = t.length; e !== n; ++e) {
          const n = t[e];
          0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
        }
        this._lendAction(e);
      }
    }
    _deactivateAction(e) {
      if (this._isActiveAction(e)) {
        const t = e._propertyBindings;
        for (let e = 0, n = t.length; e !== n; ++e) {
          const n = t[e];
          0 == --n.useCount &&
            (n.restoreOriginalState(), this._takeBackBinding(n));
        }
        this._takeBackAction(e);
      }
    }
    _initMemoryManager() {
      (this._actions = []),
        (this._nActiveActions = 0),
        (this._actionsByClip = {}),
        (this._bindings = []),
        (this._nActiveBindings = 0),
        (this._bindingsByRootAndName = {}),
        (this._controlInterpolants = []),
        (this._nActiveControlInterpolants = 0);
      const e = this;
      this.stats = {
        actions: {
          get total() {
            return e._actions.length;
          },
          get inUse() {
            return e._nActiveActions;
          },
        },
        bindings: {
          get total() {
            return e._bindings.length;
          },
          get inUse() {
            return e._nActiveBindings;
          },
        },
        controlInterpolants: {
          get total() {
            return e._controlInterpolants.length;
          },
          get inUse() {
            return e._nActiveControlInterpolants;
          },
        },
      };
    }
    _isActiveAction(e) {
      const t = e._cacheIndex;
      return null !== t && t < this._nActiveActions;
    }
    _addInactiveAction(e, t, n) {
      const i = this._actions,
        r = this._actionsByClip;
      let s = r[t];
      if (void 0 === s)
        (s = { knownActions: [e], actionByRoot: {} }),
          (e._byClipCacheIndex = 0),
          (r[t] = s);
      else {
        const t = s.knownActions;
        (e._byClipCacheIndex = t.length), t.push(e);
      }
      (e._cacheIndex = i.length), i.push(e), (s.actionByRoot[n] = e);
    }
    _removeInactiveAction(e) {
      const t = this._actions,
        n = t[t.length - 1],
        i = e._cacheIndex;
      (n._cacheIndex = i), (t[i] = n), t.pop(), (e._cacheIndex = null);
      const r = e._clip.uuid,
        s = this._actionsByClip,
        a = s[r],
        o = a.knownActions,
        l = o[o.length - 1],
        c = e._byClipCacheIndex;
      (l._byClipCacheIndex = c),
        (o[c] = l),
        o.pop(),
        (e._byClipCacheIndex = null),
        delete a.actionByRoot[(e._localRoot || this._root).uuid],
        0 === o.length && delete s[r],
        this._removeInactiveBindingsForAction(e);
    }
    _removeInactiveBindingsForAction(e) {
      const t = e._propertyBindings;
      for (let e = 0, n = t.length; e !== n; ++e) {
        const n = t[e];
        0 == --n.referenceCount && this._removeInactiveBinding(n);
      }
    }
    _lendAction(e) {
      const t = this._actions,
        n = e._cacheIndex,
        i = this._nActiveActions++,
        r = t[i];
      (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
    }
    _takeBackAction(e) {
      const t = this._actions,
        n = e._cacheIndex,
        i = --this._nActiveActions,
        r = t[i];
      (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
    }
    _addInactiveBinding(e, t, n) {
      const i = this._bindingsByRootAndName,
        r = this._bindings;
      let s = i[t];
      void 0 === s && ((s = {}), (i[t] = s)),
        (s[n] = e),
        (e._cacheIndex = r.length),
        r.push(e);
    }
    _removeInactiveBinding(e) {
      const t = this._bindings,
        n = e.binding,
        i = n.rootNode.uuid,
        r = n.path,
        s = this._bindingsByRootAndName,
        a = s[i],
        o = t[t.length - 1],
        l = e._cacheIndex;
      (o._cacheIndex = l),
        (t[l] = o),
        t.pop(),
        delete a[r],
        0 === Object.keys(a).length && delete s[i];
    }
    _lendBinding(e) {
      const t = this._bindings,
        n = e._cacheIndex,
        i = this._nActiveBindings++,
        r = t[i];
      (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
    }
    _takeBackBinding(e) {
      const t = this._bindings,
        n = e._cacheIndex,
        i = --this._nActiveBindings,
        r = t[i];
      (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
    }
    _lendControlInterpolant() {
      const e = this._controlInterpolants,
        t = this._nActiveControlInterpolants++;
      let n = e[t];
      return (
        void 0 === n &&
          ((n = new Do(
            new Float32Array(2),
            new Float32Array(2),
            1,
            this._controlInterpolantsResultBuffer
          )),
          (n.__cacheIndex = t),
          (e[t] = n)),
        n
      );
    }
    _takeBackControlInterpolant(e) {
      const t = this._controlInterpolants,
        n = e.__cacheIndex,
        i = --this._nActiveControlInterpolants,
        r = t[i];
      (e.__cacheIndex = i), (t[i] = e), (r.__cacheIndex = n), (t[n] = r);
    }
    clipAction(e, t, n) {
      const i = t || this._root,
        r = i.uuid;
      let s = "string" == typeof e ? Go.findByName(i, e) : e;
      const a = null !== s ? s.uuid : e,
        o = this._actionsByClip[a];
      let l = null;
      if (
        (void 0 === n && (n = null !== s ? s.blendMode : 2500), void 0 !== o)
      ) {
        const e = o.actionByRoot[r];
        if (void 0 !== e && e.blendMode === n) return e;
        (l = o.knownActions[0]), null === s && (s = l._clip);
      }
      if (null === s) return null;
      const c = new Cl(this, s, t, n);
      return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
    }
    existingAction(e, t) {
      const n = t || this._root,
        i = n.uuid,
        r = "string" == typeof e ? Go.findByName(n, e) : e,
        s = r ? r.uuid : e,
        a = this._actionsByClip[s];
      return (void 0 !== a && a.actionByRoot[i]) || null;
    }
    stopAllAction() {
      const e = this._actions;
      for (let t = this._nActiveActions - 1; t >= 0; --t) e[t].stop();
      return this;
    }
    update(e) {
      e *= this.timeScale;
      const t = this._actions,
        n = this._nActiveActions,
        i = (this.time += e),
        r = Math.sign(e),
        s = (this._accuIndex ^= 1);
      for (let a = 0; a !== n; ++a) t[a]._update(i, e, r, s);
      const a = this._bindings,
        o = this._nActiveBindings;
      for (let e = 0; e !== o; ++e) a[e].apply(s);
      return this;
    }
    setTime(e) {
      this.time = 0;
      for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
      return this.update(e);
    }
    getRoot() {
      return this._root;
    }
    uncacheClip(e) {
      const t = this._actions,
        n = e.uuid,
        i = this._actionsByClip,
        r = i[n];
      if (void 0 !== r) {
        const e = r.knownActions;
        for (let n = 0, i = e.length; n !== i; ++n) {
          const i = e[n];
          this._deactivateAction(i);
          const r = i._cacheIndex,
            s = t[t.length - 1];
          (i._cacheIndex = null),
            (i._byClipCacheIndex = null),
            (s._cacheIndex = r),
            (t[r] = s),
            t.pop(),
            this._removeInactiveBindingsForAction(i);
        }
        delete i[n];
      }
    }
    uncacheRoot(e) {
      const t = e.uuid,
        n = this._actionsByClip;
      for (const e in n) {
        const i = n[e].actionByRoot[t];
        void 0 !== i &&
          (this._deactivateAction(i), this._removeInactiveAction(i));
      }
      const i = this._bindingsByRootAndName[t];
      if (void 0 !== i)
        for (const e in i) {
          const t = i[e];
          t.restoreOriginalState(), this._removeInactiveBinding(t);
        }
    }
    uncacheAction(e, t) {
      const n = this.existingAction(e, t);
      null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  }).prototype._controlInterpolantsResultBuffer = new Float32Array(1);
  class Pl {
    constructor(e) {
      "string" == typeof e &&
        (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        (e = arguments[1])),
        (this.value = e);
    }
    clone() {
      return new Pl(
        void 0 === this.value.clone ? this.value : this.value.clone()
      );
    }
  }
  (class extends bs {
    constructor(e, t, n = 1) {
      super(e, t), (this.meshPerAttribute = n);
    }
    copy(e) {
      return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
    }
    clone(e) {
      const t = super.clone(e);
      return (t.meshPerAttribute = this.meshPerAttribute), t;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.isInstancedInterleavedBuffer = !0),
        (t.meshPerAttribute = this.meshPerAttribute),
        t
      );
    }
  }).prototype.isInstancedInterleavedBuffer = !0;
  const Dl = new $();
  class Il {
    constructor(e = new $(1 / 0, 1 / 0), t = new $(-1 / 0, -1 / 0)) {
      (this.min = e), (this.max = t);
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = Dl.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = 1 / 0),
        (this.max.x = this.max.y = -1 / 0),
        this
      );
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    containsPoint(e) {
      return !(
        e.x < this.min.x ||
        e.x > this.max.x ||
        e.y < this.min.y ||
        e.y > this.max.y
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y)
      );
    }
    intersectsBox(e) {
      return !(
        e.max.x < this.min.x ||
        e.min.x > this.max.x ||
        e.max.y < this.min.y ||
        e.min.y > this.max.y
      );
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return Dl.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    intersect(e) {
      return this.min.max(e.min), this.max.min(e.max), this;
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  Il.prototype.isBox2 = !0;
  const Nl = new Te(),
    Ol = new nt(),
    zl = new nt();
  function Ul(e) {
    const t = [];
    !0 === e.isBone && t.push(e);
    for (let n = 0; n < e.children.length; n++)
      t.push.apply(t, Ul(e.children[n]));
    return t;
  }
  const Bl = new ArrayBuffer(4),
    Fl = (new Float32Array(Bl), new Uint32Array(Bl), new Uint32Array(512)),
    Hl = new Uint32Array(512);
  for (let e = 0; e < 256; ++e) {
    const t = e - 127;
    t < -27
      ? ((Fl[e] = 0), (Fl[256 | e] = 32768), (Hl[e] = 24), (Hl[256 | e] = 24))
      : t < -14
      ? ((Fl[e] = 1024 >> (-t - 14)),
        (Fl[256 | e] = (1024 >> (-t - 14)) | 32768),
        (Hl[e] = -t - 1),
        (Hl[256 | e] = -t - 1))
      : t <= 15
      ? ((Fl[e] = (t + 15) << 10),
        (Fl[256 | e] = ((t + 15) << 10) | 32768),
        (Hl[e] = 13),
        (Hl[256 | e] = 13))
      : t < 128
      ? ((Fl[e] = 31744),
        (Fl[256 | e] = 64512),
        (Hl[e] = 24),
        (Hl[256 | e] = 24))
      : ((Fl[e] = 31744),
        (Fl[256 | e] = 64512),
        (Hl[e] = 13),
        (Hl[256 | e] = 13));
  }
  const kl = new Uint32Array(2048),
    Gl = new Uint32Array(64),
    Vl = new Uint32Array(64);
  for (let e = 1; e < 1024; ++e) {
    let t = e << 13,
      n = 0;
    for (; 0 == (8388608 & t); ) (t <<= 1), (n -= 8388608);
    (t &= -8388609), (n += 947912704), (kl[e] = t | n);
  }
  for (let e = 1024; e < 2048; ++e) kl[e] = 939524096 + ((e - 1024) << 13);
  for (let e = 1; e < 31; ++e) Gl[e] = e << 23;
  (Gl[31] = 1199570944), (Gl[32] = 2147483648);
  for (let e = 33; e < 63; ++e) Gl[e] = 2147483648 + ((e - 32) << 23);
  Gl[63] = 3347054592;
  for (let e = 1; e < 64; ++e) 32 !== e && (Vl[e] = 1024);
  function Wl() {
    let e = {};
    return {
      get: function (t) {
        return e[t];
      },
      add: function (t, n) {
        e[t] = n;
      },
      remove: function (t) {
        delete e[t];
      },
      removeAll: function () {
        e = {};
      },
    };
  }
  (ya.create = function (e, t) {
    return (
      console.log("THREE.Curve.create() has been deprecated"),
      (e.prototype = Object.create(ya.prototype)),
      (e.prototype.constructor = e),
      (e.prototype.getPoint = t),
      e
    );
  }),
    (Fa.prototype.fromPoints = function (e) {
      return (
        console.warn(
          "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
        ),
        this.setFromPoints(e)
      );
    }),
    (class extends ha {
      constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
        (n = new pe(n)), (i = new pe(i));
        const r = t / 2,
          s = e / t,
          a = e / 2,
          o = [],
          l = [];
        for (let e = 0, c = 0, h = -a; e <= t; e++, h += s) {
          o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
          const t = e === r ? n : i;
          t.toArray(l, c),
            (c += 3),
            t.toArray(l, c),
            (c += 3),
            t.toArray(l, c),
            (c += 3),
            t.toArray(l, c),
            (c += 3);
        }
        const c = new tn();
        c.setAttribute("position", new Xt(o, 3)),
          c.setAttribute("color", new Xt(l, 3)),
          super(c, new ta({ vertexColors: !0, toneMapped: !1 })),
          (this.type = "GridHelper");
      }
    }.prototype.setColors = function () {
      console.error(
        "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
      );
    }),
    (class extends ha {
      constructor(e) {
        const t = Ul(e),
          n = new tn(),
          i = [],
          r = [],
          s = new pe(0, 0, 1),
          a = new pe(0, 1, 0);
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          n.parent &&
            n.parent.isBone &&
            (i.push(0, 0, 0),
            i.push(0, 0, 0),
            r.push(s.r, s.g, s.b),
            r.push(a.r, a.g, a.b));
        }
        n.setAttribute("position", new Xt(i, 3)),
          n.setAttribute("color", new Xt(r, 3)),
          super(
            n,
            new ta({
              vertexColors: !0,
              depthTest: !1,
              depthWrite: !1,
              toneMapped: !1,
              transparent: !0,
            })
          ),
          (this.type = "SkeletonHelper"),
          (this.isSkeletonHelper = !0),
          (this.root = e),
          (this.bones = t),
          (this.matrix = e.matrixWorld),
          (this.matrixAutoUpdate = !1);
      }
      updateMatrixWorld(e) {
        const t = this.bones,
          n = this.geometry,
          i = n.getAttribute("position");
        zl.copy(this.root.matrixWorld).invert();
        for (let e = 0, n = 0; e < t.length; e++) {
          const r = t[e];
          r.parent &&
            r.parent.isBone &&
            (Ol.multiplyMatrices(zl, r.matrixWorld),
            Nl.setFromMatrixPosition(Ol),
            i.setXYZ(n, Nl.x, Nl.y, Nl.z),
            Ol.multiplyMatrices(zl, r.parent.matrixWorld),
            Nl.setFromMatrixPosition(Ol),
            i.setXYZ(n + 1, Nl.x, Nl.y, Nl.z),
            (n += 2));
        }
        (n.getAttribute("position").needsUpdate = !0),
          super.updateMatrixWorld(e);
      }
    }.prototype.update = function () {
      console.error(
        "THREE.SkeletonHelper: update() no longer needs to be called."
      );
    }),
    (qo.prototype.extractUrlBase = function (e) {
      return (
        console.warn(
          "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
        ),
        fl.extractUrlBase(e)
      );
    }),
    (qo.Handlers = {
      add: function () {
        console.error(
          "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
        );
      },
      get: function () {
        console.error(
          "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
        );
      },
    }),
    (Il.prototype.center = function (e) {
      return (
        console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
        this.getCenter(e)
      );
    }),
    (Il.prototype.empty = function () {
      return (
        console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
      );
    }),
    (Il.prototype.isIntersectionBox = function (e) {
      return (
        console.warn(
          "THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
        ),
        this.intersectsBox(e)
      );
    }),
    (Il.prototype.size = function (e) {
      return (
        console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
        this.getSize(e)
      );
    }),
    (Re.prototype.center = function (e) {
      return (
        console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
        this.getCenter(e)
      );
    }),
    (Re.prototype.empty = function () {
      return (
        console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
      );
    }),
    (Re.prototype.isIntersectionBox = function (e) {
      return (
        console.warn(
          "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
        ),
        this.intersectsBox(e)
      );
    }),
    (Re.prototype.isIntersectionSphere = function (e) {
      return (
        console.warn(
          "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
        ),
        this.intersectsSphere(e)
      );
    }),
    (Re.prototype.size = function (e) {
      return (
        console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
        this.getSize(e)
      );
    }),
    (dt.prototype.toVector3 = function () {
      console.error(
        "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
      );
    }),
    (Xe.prototype.empty = function () {
      return (
        console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
      );
    }),
    (Fn.prototype.setFromMatrix = function (e) {
      return (
        console.warn(
          "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
        ),
        this.setFromProjectionMatrix(e)
      );
    }),
    (ee.prototype.flattenToArrayOffset = function (e, t) {
      return (
        console.warn(
          "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
        ),
        this.toArray(e, t)
      );
    }),
    (ee.prototype.multiplyVector3 = function (e) {
      return (
        console.warn(
          "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
        ),
        e.applyMatrix3(this)
      );
    }),
    (ee.prototype.multiplyVector3Array = function () {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    }),
    (ee.prototype.applyToBufferAttribute = function (e) {
      return (
        console.warn(
          "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
        ),
        e.applyMatrix3(this)
      );
    }),
    (ee.prototype.applyToVector3Array = function () {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }),
    (ee.prototype.getInverse = function (e) {
      return (
        console.warn(
          "THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
        ),
        this.copy(e).invert()
      );
    }),
    (nt.prototype.extractPosition = function (e) {
      return (
        console.warn(
          "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
        ),
        this.copyPosition(e)
      );
    }),
    (nt.prototype.flattenToArrayOffset = function (e, t) {
      return (
        console.warn(
          "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
        ),
        this.toArray(e, t)
      );
    }),
    (nt.prototype.getPosition = function () {
      return (
        console.warn(
          "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
        ),
        new Te().setFromMatrixColumn(this, 3)
      );
    }),
    (nt.prototype.setRotationFromQuaternion = function (e) {
      return (
        console.warn(
          "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
        ),
        this.makeRotationFromQuaternion(e)
      );
    }),
    (nt.prototype.multiplyToArray = function () {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    }),
    (nt.prototype.multiplyVector3 = function (e) {
      return (
        console.warn(
          "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        e.applyMatrix4(this)
      );
    }),
    (nt.prototype.multiplyVector4 = function (e) {
      return (
        console.warn(
          "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        e.applyMatrix4(this)
      );
    }),
    (nt.prototype.multiplyVector3Array = function () {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    }),
    (nt.prototype.rotateAxis = function (e) {
      console.warn(
        "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
      ),
        e.transformDirection(this);
    }),
    (nt.prototype.crossVector = function (e) {
      return (
        console.warn(
          "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        e.applyMatrix4(this)
      );
    }),
    (nt.prototype.translate = function () {
      console.error("THREE.Matrix4: .translate() has been removed.");
    }),
    (nt.prototype.rotateX = function () {
      console.error("THREE.Matrix4: .rotateX() has been removed.");
    }),
    (nt.prototype.rotateY = function () {
      console.error("THREE.Matrix4: .rotateY() has been removed.");
    }),
    (nt.prototype.rotateZ = function () {
      console.error("THREE.Matrix4: .rotateZ() has been removed.");
    }),
    (nt.prototype.rotateByAxis = function () {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    }),
    (nt.prototype.applyToBufferAttribute = function (e) {
      return (
        console.warn(
          "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
        ),
        e.applyMatrix4(this)
      );
    }),
    (nt.prototype.applyToVector3Array = function () {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    }),
    (nt.prototype.makeFrustum = function (e, t, n, i, r, s) {
      return (
        console.warn(
          "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
        ),
        this.makePerspective(e, t, i, n, r, s)
      );
    }),
    (nt.prototype.getInverse = function (e) {
      return (
        console.warn(
          "THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
        ),
        this.copy(e).invert()
      );
    }),
    (zn.prototype.isIntersectionLine = function (e) {
      return (
        console.warn(
          "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
        ),
        this.intersectsLine(e)
      );
    }),
    (Se.prototype.multiplyVector3 = function (e) {
      return (
        console.warn(
          "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
        ),
        e.applyQuaternion(this)
      );
    }),
    (Se.prototype.inverse = function () {
      return (
        console.warn(
          "THREE.Quaternion: .inverse() has been renamed to invert()."
        ),
        this.invert()
      );
    }),
    (tt.prototype.isIntersectionBox = function (e) {
      return (
        console.warn(
          "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
        ),
        this.intersectsBox(e)
      );
    }),
    (tt.prototype.isIntersectionPlane = function (e) {
      return (
        console.warn(
          "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
        ),
        this.intersectsPlane(e)
      );
    }),
    (tt.prototype.isIntersectionSphere = function (e) {
      return (
        console.warn(
          "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
        ),
        this.intersectsSphere(e)
      );
    }),
    (Bt.prototype.area = function () {
      return (
        console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
        this.getArea()
      );
    }),
    (Bt.prototype.barycoordFromPoint = function (e, t) {
      return (
        console.warn(
          "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
        ),
        this.getBarycoord(e, t)
      );
    }),
    (Bt.prototype.midpoint = function (e) {
      return (
        console.warn(
          "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
        ),
        this.getMidpoint(e)
      );
    }),
    (Bt.prototypenormal = function (e) {
      return (
        console.warn(
          "THREE.Triangle: .normal() has been renamed to .getNormal()."
        ),
        this.getNormal(e)
      );
    }),
    (Bt.prototype.plane = function (e) {
      return (
        console.warn(
          "THREE.Triangle: .plane() has been renamed to .getPlane()."
        ),
        this.getPlane(e)
      );
    }),
    (Bt.barycoordFromPoint = function (e, t, n, i, r) {
      return (
        console.warn(
          "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
        ),
        Bt.getBarycoord(e, t, n, i, r)
      );
    }),
    (Bt.normal = function (e, t, n, i) {
      return (
        console.warn(
          "THREE.Triangle: .normal() has been renamed to .getNormal()."
        ),
        Bt.getNormal(e, t, n, i)
      );
    }),
    (Ha.prototype.extractAllPoints = function (e) {
      return (
        console.warn(
          "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
        ),
        this.extractPoints(e)
      );
    }),
    (Ha.prototype.extrude = function (e) {
      return (
        console.warn(
          "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
        ),
        new mo(this, e)
      );
    }),
    (Ha.prototype.makeGeometry = function (e) {
      return (
        console.warn(
          "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
        ),
        new vo(this, e)
      );
    }),
    ($.prototype.fromAttribute = function (e, t, n) {
      return (
        console.warn(
          "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
        ),
        this.fromBufferAttribute(e, t, n)
      );
    }),
    ($.prototype.distanceToManhattan = function (e) {
      return (
        console.warn(
          "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
        ),
        this.manhattanDistanceTo(e)
      );
    }),
    ($.prototype.lengthManhattan = function () {
      return (
        console.warn(
          "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
        ),
        this.manhattanLength()
      );
    }),
    (Te.prototype.setEulerFromRotationMatrix = function () {
      console.error(
        "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
      );
    }),
    (Te.prototype.setEulerFromQuaternion = function () {
      console.error(
        "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
      );
    }),
    (Te.prototype.getPositionFromMatrix = function (e) {
      return (
        console.warn(
          "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
        ),
        this.setFromMatrixPosition(e)
      );
    }),
    (Te.prototype.getScaleFromMatrix = function (e) {
      return (
        console.warn(
          "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
        ),
        this.setFromMatrixScale(e)
      );
    }),
    (Te.prototype.getColumnFromMatrix = function (e, t) {
      return (
        console.warn(
          "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
        ),
        this.setFromMatrixColumn(t, e)
      );
    }),
    (Te.prototype.applyProjection = function (e) {
      return (
        console.warn(
          "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
        ),
        this.applyMatrix4(e)
      );
    }),
    (Te.prototype.fromAttribute = function (e, t, n) {
      return (
        console.warn(
          "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
        ),
        this.fromBufferAttribute(e, t, n)
      );
    }),
    (Te.prototype.distanceToManhattan = function (e) {
      return (
        console.warn(
          "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
        ),
        this.manhattanDistanceTo(e)
      );
    }),
    (Te.prototype.lengthManhattan = function () {
      return (
        console.warn(
          "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
        ),
        this.manhattanLength()
      );
    }),
    (_e.prototype.fromAttribute = function (e, t, n) {
      return (
        console.warn(
          "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
        ),
        this.fromBufferAttribute(e, t, n)
      );
    }),
    (_e.prototype.lengthManhattan = function () {
      return (
        console.warn(
          "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
        ),
        this.manhattanLength()
      );
    }),
    (At.prototype.getChildByName = function (e) {
      return (
        console.warn(
          "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
        ),
        this.getObjectByName(e)
      );
    }),
    (At.prototype.renderDepth = function () {
      console.warn(
        "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
      );
    }),
    (At.prototype.translate = function (e, t) {
      return (
        console.warn(
          "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
        ),
        this.translateOnAxis(t, e)
      );
    }),
    (At.prototype.getWorldRotation = function () {
      console.error(
        "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
      );
    }),
    (At.prototype.applyMatrix = function (e) {
      return (
        console.warn(
          "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
        ),
        this.applyMatrix4(e)
      );
    }),
    Object.defineProperties(At.prototype, {
      eulerOrder: {
        get: function () {
          return (
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
          );
        },
        set: function (e) {
          console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            (this.rotation.order = e);
        },
      },
      useQuaternion: {
        get: function () {
          console.warn(
            "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
          );
        },
        set: function () {
          console.warn(
            "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
          );
        },
      },
    }),
    (_n.prototype.setDrawMode = function () {
      console.error(
        "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
      );
    }),
    Object.defineProperties(_n.prototype, {
      drawMode: {
        get: function () {
          return (
            console.error(
              "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
            ),
            0
          );
        },
        set: function () {
          console.error(
            "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
          );
        },
      },
    }),
    (Ws.prototype.initBones = function () {
      console.error("THREE.SkinnedMesh: initBones() has been removed.");
    }),
    (Rn.prototype.setLens = function (e, t) {
      console.warn(
        "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
      ),
        void 0 !== t && (this.filmGauge = t),
        this.setFocalLength(e);
    }),
    Object.defineProperties(Qo.prototype, {
      onlyShadow: {
        set: function () {
          console.warn("THREE.Light: .onlyShadow has been removed.");
        },
      },
      shadowCameraFov: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
          ),
            (this.shadow.camera.fov = e);
        },
      },
      shadowCameraLeft: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
          ),
            (this.shadow.camera.left = e);
        },
      },
      shadowCameraRight: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
          ),
            (this.shadow.camera.right = e);
        },
      },
      shadowCameraTop: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraTop is now .shadow.camera.top."
          ),
            (this.shadow.camera.top = e);
        },
      },
      shadowCameraBottom: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
          ),
            (this.shadow.camera.bottom = e);
        },
      },
      shadowCameraNear: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
          ),
            (this.shadow.camera.near = e);
        },
      },
      shadowCameraFar: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowCameraFar is now .shadow.camera.far."
          ),
            (this.shadow.camera.far = e);
        },
      },
      shadowCameraVisible: {
        set: function () {
          console.warn(
            "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
          );
        },
      },
      shadowBias: {
        set: function (e) {
          console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            (this.shadow.bias = e);
        },
      },
      shadowDarkness: {
        set: function () {
          console.warn("THREE.Light: .shadowDarkness has been removed.");
        },
      },
      shadowMapWidth: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
          ),
            (this.shadow.mapSize.width = e);
        },
      },
      shadowMapHeight: {
        set: function (e) {
          console.warn(
            "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
          ),
            (this.shadow.mapSize.height = e);
        },
      },
    }),
    Object.defineProperties(Wt.prototype, {
      length: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
            ),
            this.array.length
          );
        },
      },
      dynamic: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
            ),
            this.usage === U
          );
        },
        set: function () {
          console.warn(
            "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
          ),
            this.setUsage(U);
        },
      },
    }),
    (Wt.prototype.setDynamic = function (e) {
      return (
        console.warn(
          "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
        ),
        this.setUsage(!0 === e ? U : z),
        this
      );
    }),
    (Wt.prototype.copyIndicesArray = function () {
      console.error(
        "THREE.BufferAttribute: .copyIndicesArray() has been removed."
      );
    }),
    (Wt.prototype.setArray = function () {
      console.error(
        "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
      );
    }),
    (tn.prototype.addIndex = function (e) {
      console.warn(
        "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
      ),
        this.setIndex(e);
    }),
    (tn.prototype.addAttribute = function (e, t) {
      return (
        console.warn(
          "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
        ),
        (t && t.isBufferAttribute) || (t && t.isInterleavedBufferAttribute)
          ? "index" === e
            ? (console.warn(
                "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
              ),
              this.setIndex(t),
              this)
            : this.setAttribute(e, t)
          : (console.warn(
              "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
            ),
            this.setAttribute(e, new Wt(arguments[1], arguments[2])))
      );
    }),
    (tn.prototype.addDrawCall = function (e, t, n) {
      void 0 !== n &&
        console.warn(
          "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
        ),
        console.warn(
          "THREE.BufferGeometry: .addDrawCall() is now .addGroup()."
        ),
        this.addGroup(e, t);
    }),
    (tn.prototype.clearDrawCalls = function () {
      console.warn(
        "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
      ),
        this.clearGroups();
    }),
    (tn.prototype.computeOffsets = function () {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    }),
    (tn.prototype.removeAttribute = function (e) {
      return (
        console.warn(
          "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
        ),
        this.deleteAttribute(e)
      );
    }),
    (tn.prototype.applyMatrix = function (e) {
      return (
        console.warn(
          "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
        ),
        this.applyMatrix4(e)
      );
    }),
    Object.defineProperties(tn.prototype, {
      drawcalls: {
        get: function () {
          return (
            console.error(
              "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
            ),
            this.groups
          );
        },
      },
      offsets: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferGeometry: .offsets has been renamed to .groups."
            ),
            this.groups
          );
        },
      },
    }),
    (bs.prototype.setDynamic = function (e) {
      return (
        console.warn(
          "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
        ),
        this.setUsage(!0 === e ? U : z),
        this
      );
    }),
    (bs.prototype.setArray = function () {
      console.error(
        "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
      );
    }),
    (mo.prototype.getArrays = function () {
      console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
    }),
    (mo.prototype.addShapeList = function () {
      console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
    }),
    (mo.prototype.addShape = function () {
      console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
    }),
    (_s.prototype.dispose = function () {
      console.error("THREE.Scene: .dispose() has been removed.");
    }),
    (Pl.prototype.onUpdate = function () {
      return (
        console.warn(
          "THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
        ),
        this
      );
    }),
    Object.defineProperties(Ht.prototype, {
      wrapAround: {
        get: function () {
          console.warn("THREE.Material: .wrapAround has been removed.");
        },
        set: function () {
          console.warn("THREE.Material: .wrapAround has been removed.");
        },
      },
      overdraw: {
        get: function () {
          console.warn("THREE.Material: .overdraw has been removed.");
        },
        set: function () {
          console.warn("THREE.Material: .overdraw has been removed.");
        },
      },
      wrapRGB: {
        get: function () {
          return (
            console.warn("THREE.Material: .wrapRGB has been removed."), new pe()
          );
        },
      },
      shading: {
        get: function () {
          console.error(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          );
        },
        set: function (e) {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = 1 === e);
        },
      },
      stencilMask: {
        get: function () {
          return (
            console.warn(
              "THREE." +
                this.type +
                ": .stencilMask has been removed. Use .stencilFuncMask instead."
            ),
            this.stencilFuncMask
          );
        },
        set: function (e) {
          console.warn(
            "THREE." +
              this.type +
              ": .stencilMask has been removed. Use .stencilFuncMask instead."
          ),
            (this.stencilFuncMask = e);
        },
      },
      vertexTangents: {
        get: function () {
          console.warn(
            "THREE." + this.type + ": .vertexTangents has been removed."
          );
        },
        set: function () {
          console.warn(
            "THREE." + this.type + ": .vertexTangents has been removed."
          );
        },
      },
    }),
    Object.defineProperties(En.prototype, {
      derivatives: {
        get: function () {
          return (
            console.warn(
              "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
            ),
            this.extensions.derivatives
          );
        },
        set: function (e) {
          console.warn(
            "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
          ),
            (this.extensions.derivatives = e);
        },
      },
    }),
    (vs.prototype.clearTarget = function (e, t, n, i) {
      console.warn(
        "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
      ),
        this.setRenderTarget(e),
        this.clear(t, n, i);
    }),
    (vs.prototype.animate = function (e) {
      console.warn(
        "THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
      ),
        this.setAnimationLoop(e);
    }),
    (vs.prototype.getCurrentRenderTarget = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
        ),
        this.getRenderTarget()
      );
    }),
    (vs.prototype.getMaxAnisotropy = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
        ),
        this.capabilities.getMaxAnisotropy()
      );
    }),
    (vs.prototype.getPrecision = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
        ),
        this.capabilities.precision
      );
    }),
    (vs.prototype.resetGLState = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
        ),
        this.state.reset()
      );
    }),
    (vs.prototype.supportsFloatTextures = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
        ),
        this.extensions.get("OES_texture_float")
      );
    }),
    (vs.prototype.supportsHalfFloatTextures = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
        ),
        this.extensions.get("OES_texture_half_float")
      );
    }),
    (vs.prototype.supportsStandardDerivatives = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
        ),
        this.extensions.get("OES_standard_derivatives")
      );
    }),
    (vs.prototype.supportsCompressedTextureS3TC = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
        ),
        this.extensions.get("WEBGL_compressed_texture_s3tc")
      );
    }),
    (vs.prototype.supportsCompressedTexturePVRTC = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
        ),
        this.extensions.get("WEBGL_compressed_texture_pvrtc")
      );
    }),
    (vs.prototype.supportsBlendMinMax = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
        ),
        this.extensions.get("EXT_blend_minmax")
      );
    }),
    (vs.prototype.supportsVertexTextures = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
        ),
        this.capabilities.vertexTextures
      );
    }),
    (vs.prototype.supportsInstancedArrays = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
        ),
        this.extensions.get("ANGLE_instanced_arrays")
      );
    }),
    (vs.prototype.enableScissorTest = function (e) {
      console.warn(
        "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
      ),
        this.setScissorTest(e);
    }),
    (vs.prototype.initMaterial = function () {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    }),
    (vs.prototype.addPrePlugin = function () {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    }),
    (vs.prototype.addPostPlugin = function () {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    }),
    (vs.prototype.updateShadowMap = function () {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    }),
    (vs.prototype.setFaceCulling = function () {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    }),
    (vs.prototype.allocTextureUnit = function () {
      console.warn(
        "THREE.WebGLRenderer: .allocTextureUnit() has been removed."
      );
    }),
    (vs.prototype.setTexture = function () {
      console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    }),
    (vs.prototype.setTexture2D = function () {
      console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    }),
    (vs.prototype.setTextureCube = function () {
      console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    }),
    (vs.prototype.getActiveMipMapLevel = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
        ),
        this.getActiveMipmapLevel()
      );
    }),
    Object.defineProperties(vs.prototype, {
      shadowMapEnabled: {
        get: function () {
          return this.shadowMap.enabled;
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
          ),
            (this.shadowMap.enabled = e);
        },
      },
      shadowMapType: {
        get: function () {
          return this.shadowMap.type;
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
          ),
            (this.shadowMap.type = e);
        },
      },
      shadowMapCullFace: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
          );
        },
      },
      context: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
            ),
            this.getContext()
          );
        },
      },
      vr: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
            this.xr
          );
        },
      },
      gammaInput: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
            ),
            !1
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
          );
        },
      },
      gammaOutput: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
            ),
            !1
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
          ),
            (this.outputEncoding = !0 === e ? D : P);
        },
      },
      toneMappingWhitePoint: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
            ),
            1
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
          );
        },
      },
      gammaFactor: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    }),
    Object.defineProperties(as.prototype, {
      cullFace: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
          );
        },
      },
      renderReverseSided: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
          );
        },
      },
      renderSingleSided: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
          );
        },
      },
    }),
    Object.defineProperties(be.prototype, {
      wrapS: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
            ),
            this.texture.wrapS
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
          ),
            (this.texture.wrapS = e);
        },
      },
      wrapT: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
            ),
            this.texture.wrapT
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
          ),
            (this.texture.wrapT = e);
        },
      },
      magFilter: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
            ),
            this.texture.magFilter
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
          ),
            (this.texture.magFilter = e);
        },
      },
      minFilter: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
            ),
            this.texture.minFilter
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
          ),
            (this.texture.minFilter = e);
        },
      },
      anisotropy: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
            ),
            this.texture.anisotropy
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
          ),
            (this.texture.anisotropy = e);
        },
      },
      offset: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .offset is now .texture.offset."
            ),
            this.texture.offset
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .offset is now .texture.offset."
          ),
            (this.texture.offset = e);
        },
      },
      repeat: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
            ),
            this.texture.repeat
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
          ),
            (this.texture.repeat = e);
        },
      },
      format: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .format is now .texture.format."
            ),
            this.texture.format
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .format is now .texture.format."
          ),
            (this.texture.format = e);
        },
      },
      type: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .type is now .texture.type."
            ),
            this.texture.type
          );
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            (this.texture.type = e);
        },
      },
      generateMipmaps: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
            ),
            this.texture.generateMipmaps
          );
        },
        set: function (e) {
          console.warn(
            "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
          ),
            (this.texture.generateMipmaps = e);
        },
      },
    }),
    (class extends At {
      constructor(e) {
        super(),
          (this.type = "Audio"),
          (this.listener = e),
          (this.context = e.context),
          (this.gain = this.context.createGain()),
          this.gain.connect(e.getInput()),
          (this.autoplay = !1),
          (this.buffer = null),
          (this.detune = 0),
          (this.loop = !1),
          (this.loopStart = 0),
          (this.loopEnd = 0),
          (this.offset = 0),
          (this.duration = void 0),
          (this.playbackRate = 1),
          (this.isPlaying = !1),
          (this.hasPlaybackControl = !0),
          (this.source = null),
          (this.sourceType = "empty"),
          (this._startedAt = 0),
          (this._progress = 0),
          (this._connected = !1),
          (this.filters = []);
      }
      getOutput() {
        return this.gain;
      }
      setNodeSource(e) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "audioNode"),
          (this.source = e),
          this.connect(),
          this
        );
      }
      setMediaElementSource(e) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "mediaNode"),
          (this.source = this.context.createMediaElementSource(e)),
          this.connect(),
          this
        );
      }
      setMediaStreamSource(e) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "mediaStreamNode"),
          (this.source = this.context.createMediaStreamSource(e)),
          this.connect(),
          this
        );
      }
      setBuffer(e) {
        return (
          (this.buffer = e),
          (this.sourceType = "buffer"),
          this.autoplay && this.play(),
          this
        );
      }
      play(e = 0) {
        if (!0 === this.isPlaying)
          return void console.warn("THREE.Audio: Audio is already playing.");
        if (!1 === this.hasPlaybackControl)
          return void console.warn(
            "THREE.Audio: this Audio has no playback control."
          );
        this._startedAt = this.context.currentTime + e;
        const t = this.context.createBufferSource();
        return (
          (t.buffer = this.buffer),
          (t.loop = this.loop),
          (t.loopStart = this.loopStart),
          (t.loopEnd = this.loopEnd),
          (t.onended = this.onEnded.bind(this)),
          t.start(this._startedAt, this._progress + this.offset, this.duration),
          (this.isPlaying = !0),
          (this.source = t),
          this.setDetune(this.detune),
          this.setPlaybackRate(this.playbackRate),
          this.connect()
        );
      }
      pause() {
        if (!1 !== this.hasPlaybackControl)
          return (
            !0 === this.isPlaying &&
              ((this._progress +=
                Math.max(this.context.currentTime - this._startedAt, 0) *
                this.playbackRate),
              !0 === this.loop &&
                (this._progress =
                  this._progress % (this.duration || this.buffer.duration)),
              this.source.stop(),
              (this.source.onended = null),
              (this.isPlaying = !1)),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      stop() {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this._progress = 0),
            this.source.stop(),
            (this.source.onended = null),
            (this.isPlaying = !1),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      connect() {
        if (this.filters.length > 0) {
          this.source.connect(this.filters[0]);
          for (let e = 1, t = this.filters.length; e < t; e++)
            this.filters[e - 1].connect(this.filters[e]);
          this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput());
        return (this._connected = !0), this;
      }
      disconnect() {
        if (this.filters.length > 0) {
          this.source.disconnect(this.filters[0]);
          for (let e = 1, t = this.filters.length; e < t; e++)
            this.filters[e - 1].disconnect(this.filters[e]);
          this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput());
        return (this._connected = !1), this;
      }
      getFilters() {
        return this.filters;
      }
      setFilters(e) {
        return (
          e || (e = []),
          !0 === this._connected
            ? (this.disconnect(), (this.filters = e.slice()), this.connect())
            : (this.filters = e.slice()),
          this
        );
      }
      setDetune(e) {
        if (((this.detune = e), void 0 !== this.source.detune))
          return (
            !0 === this.isPlaying &&
              this.source.detune.setTargetAtTime(
                this.detune,
                this.context.currentTime,
                0.01
              ),
            this
          );
      }
      getDetune() {
        return this.detune;
      }
      getFilter() {
        return this.getFilters()[0];
      }
      setFilter(e) {
        return this.setFilters(e ? [e] : []);
      }
      setPlaybackRate(e) {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this.playbackRate = e),
            !0 === this.isPlaying &&
              this.source.playbackRate.setTargetAtTime(
                this.playbackRate,
                this.context.currentTime,
                0.01
              ),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      getPlaybackRate() {
        return this.playbackRate;
      }
      onEnded() {
        this.isPlaying = !1;
      }
      getLoop() {
        return !1 === this.hasPlaybackControl
          ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1)
          : this.loop;
      }
      setLoop(e) {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this.loop = e),
            !0 === this.isPlaying && (this.source.loop = this.loop),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      setLoopStart(e) {
        return (this.loopStart = e), this;
      }
      setLoopEnd(e) {
        return (this.loopEnd = e), this;
      }
      getVolume() {
        return this.gain.gain.value;
      }
      setVolume(e) {
        return (
          this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01),
          this
        );
      }
    }.prototype.load = function (e) {
      console.warn(
        "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
      );
      const t = this;
      return (
        new vl().load(e, function (e) {
          t.setBuffer(e);
        }),
        this
      );
    }),
    (Cn.prototype.updateCubeMap = function (e, t) {
      return (
        console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
        this.update(e, t)
      );
    }),
    (Cn.prototype.clear = function (e, t, n, i) {
      return (
        console.warn(
          "THREE.CubeCamera: .clear() is now .renderTarget.clear()."
        ),
        this.renderTarget.clear(e, t, n, i)
      );
    }),
    (me.crossOrigin = void 0),
    (me.loadTexture = function (e, t, n, i) {
      console.warn(
        "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
      );
      const r = new Ko();
      r.setCrossOrigin(this.crossOrigin);
      const s = r.load(e, n, void 0, i);
      return t && (s.mapping = t), s;
    }),
    (me.loadTextureCube = function (e, t, n, i) {
      console.warn(
        "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
      );
      const r = new Zo();
      r.setCrossOrigin(this.crossOrigin);
      const s = r.load(e, n, void 0, i);
      return t && (s.mapping = t), s;
    }),
    (me.loadCompressedTexture = function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
      );
    }),
    (me.loadCompressedTextureCube = function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
      );
    }),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("register", { detail: { revision: "140" } })
      ),
    "undefined" != typeof window &&
      (window.__THREE__
        ? console.warn(
            "WARNING: Multiple instances of Three.js being imported."
          )
        : (window.__THREE__ = "140"));
  const jl = "KHR_binary_glTF",
    ql = "KHR_draco_mesh_compression",
    Xl = "KHR_lights_punctual",
    Yl = "KHR_materials_clearcoat",
    Jl = "KHR_materials_ior",
    Zl = "KHR_materials_pbrSpecularGlossiness",
    Kl = "KHR_materials_sheen",
    Ql = "KHR_materials_specular",
    $l = "KHR_materials_transmission",
    ec = "KHR_materials_unlit",
    tc = "KHR_materials_volume",
    nc = "KHR_texture_basisu",
    ic = "KHR_texture_transform",
    rc = "KHR_mesh_quantization",
    sc = "KHR_materials_emissive_strength",
    ac = "EXT_texture_webp",
    oc = "EXT_meshopt_compression";
  class lc {
    constructor(e) {
      (this.parser = e),
        (this.name = Xl),
        (this.cache = { refs: {}, uses: {} });
    }
    _markDefs() {
      const e = this.parser,
        t = this.parser.json.nodes || [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        i.extensions &&
          i.extensions[this.name] &&
          void 0 !== i.extensions[this.name].light &&
          e._addNodeRef(this.cache, i.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser,
        n = "light:" + e;
      let i = t.cache.get(n);
      if (i) return i;
      const r = t.json,
        s = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
      let a;
      const o = new pe(16777215);
      void 0 !== s.color && o.fromArray(s.color);
      const l = void 0 !== s.range ? s.range : 0;
      switch (s.type) {
        case "directional":
          (a = new ul(o)), a.target.position.set(0, 0, -1), a.add(a.target);
          break;
        case "point":
          (a = new cl(o)), (a.distance = l);
          break;
        case "spot":
          (a = new rl(o)),
            (a.distance = l),
            (s.spot = s.spot || {}),
            (s.spot.innerConeAngle =
              void 0 !== s.spot.innerConeAngle ? s.spot.innerConeAngle : 0),
            (s.spot.outerConeAngle =
              void 0 !== s.spot.outerConeAngle
                ? s.spot.outerConeAngle
                : Math.PI / 4),
            (a.angle = s.spot.outerConeAngle),
            (a.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle),
            a.target.position.set(0, 0, -1),
            a.add(a.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
      }
      return (
        a.position.set(0, 0, 0),
        (a.decay = 2),
        void 0 !== s.intensity && (a.intensity = s.intensity),
        (a.name = t.createUniqueName(s.name || "light_" + e)),
        (i = Promise.resolve(a)),
        t.cache.add(n, i),
        i
      );
    }
    createNodeAttachment(e) {
      const t = this,
        n = this.parser,
        i = n.json.nodes[e],
        r = ((i.extensions && i.extensions[this.name]) || {}).light;
      return void 0 === r
        ? null
        : this._loadLight(r).then(function (e) {
            return n._getNodeRef(t.cache, r, e);
          });
    }
  }
  class cc {
    constructor() {
      this.name = ec;
    }
    getMaterialType() {
      return kt;
    }
    extendParams(e, t, n) {
      const i = [];
      (e.color = new pe(1, 1, 1)), (e.opacity = 1);
      const r = t.pbrMetallicRoughness;
      if (r) {
        if (Array.isArray(r.baseColorFactor)) {
          const t = r.baseColorFactor;
          e.color.fromArray(t), (e.opacity = t[3]);
        }
        void 0 !== r.baseColorTexture &&
          i.push(n.assignTexture(e, "map", r.baseColorTexture, D));
      }
      return Promise.all(i);
    }
  }
  class hc {
    constructor(e) {
      (this.parser = e), (this.name = sc);
    }
    extendMaterialParams(e, t) {
      const n = this.parser.json.materials[e];
      if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
      const i = n.extensions[this.name].emissiveStrength;
      return void 0 !== i && (t.emissiveIntensity = i), Promise.resolve();
    }
  }
  class uc {
    constructor(e) {
      (this.parser = e), (this.name = Yl);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? bo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      if (
        (void 0 !== s.clearcoatFactor && (t.clearcoat = s.clearcoatFactor),
        void 0 !== s.clearcoatTexture &&
          r.push(n.assignTexture(t, "clearcoatMap", s.clearcoatTexture)),
        void 0 !== s.clearcoatRoughnessFactor &&
          (t.clearcoatRoughness = s.clearcoatRoughnessFactor),
        void 0 !== s.clearcoatRoughnessTexture &&
          r.push(
            n.assignTexture(
              t,
              "clearcoatRoughnessMap",
              s.clearcoatRoughnessTexture
            )
          ),
        void 0 !== s.clearcoatNormalTexture &&
          (r.push(
            n.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)
          ),
          void 0 !== s.clearcoatNormalTexture.scale))
      ) {
        const e = s.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new $(e, e);
      }
      return Promise.all(r);
    }
  }
  class dc {
    constructor(e) {
      (this.parser = e), (this.name = Kl);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? bo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [];
      (t.sheenColor = new pe(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
      const s = i.extensions[this.name];
      return (
        void 0 !== s.sheenColorFactor &&
          t.sheenColor.fromArray(s.sheenColorFactor),
        void 0 !== s.sheenRoughnessFactor &&
          (t.sheenRoughness = s.sheenRoughnessFactor),
        void 0 !== s.sheenColorTexture &&
          r.push(n.assignTexture(t, "sheenColorMap", s.sheenColorTexture, D)),
        void 0 !== s.sheenRoughnessTexture &&
          r.push(
            n.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)
          ),
        Promise.all(r)
      );
    }
  }
  class pc {
    constructor(e) {
      (this.parser = e), (this.name = $l);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? bo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      return (
        void 0 !== s.transmissionFactor &&
          (t.transmission = s.transmissionFactor),
        void 0 !== s.transmissionTexture &&
          r.push(n.assignTexture(t, "transmissionMap", s.transmissionTexture)),
        Promise.all(r)
      );
    }
  }
  class fc {
    constructor(e) {
      (this.parser = e), (this.name = tc);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? bo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      (t.thickness = void 0 !== s.thicknessFactor ? s.thicknessFactor : 0),
        void 0 !== s.thicknessTexture &&
          r.push(n.assignTexture(t, "thicknessMap", s.thicknessTexture)),
        (t.attenuationDistance = s.attenuationDistance || 0);
      const a = s.attenuationColor || [1, 1, 1];
      return (t.attenuationColor = new pe(a[0], a[1], a[2])), Promise.all(r);
    }
  }
  class mc {
    constructor(e) {
      (this.parser = e), (this.name = Jl);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? bo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser.json.materials[e];
      if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
      const i = n.extensions[this.name];
      return (t.ior = void 0 !== i.ior ? i.ior : 1.5), Promise.resolve();
    }
  }
  class gc {
    constructor(e) {
      (this.parser = e), (this.name = Ql);
    }
    getMaterialType(e) {
      const t = this.parser.json.materials[e];
      return t.extensions && t.extensions[this.name] ? bo : null;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [],
        s = i.extensions[this.name];
      (t.specularIntensity =
        void 0 !== s.specularFactor ? s.specularFactor : 1),
        void 0 !== s.specularTexture &&
          r.push(n.assignTexture(t, "specularIntensityMap", s.specularTexture));
      const a = s.specularColorFactor || [1, 1, 1];
      return (
        (t.specularColor = new pe(a[0], a[1], a[2])),
        void 0 !== s.specularColorTexture &&
          r.push(
            n.assignTexture(t, "specularColorMap", s.specularColorTexture, D)
          ),
        Promise.all(r)
      );
    }
  }
  class vc {
    constructor(e) {
      (this.parser = e), (this.name = nc);
    }
    loadTexture(e) {
      const t = this.parser,
        n = t.json,
        i = n.textures[e];
      if (!i.extensions || !i.extensions[this.name]) return null;
      const r = i.extensions[this.name],
        s = t.options.ktx2Loader;
      if (!s) {
        if (
          n.extensionsRequired &&
          n.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
          );
        return null;
      }
      return t.loadTextureImage(e, r.source, s);
    }
  }
  class xc {
    constructor(e) {
      (this.parser = e), (this.name = ac), (this.isSupported = null);
    }
    loadTexture(e) {
      const t = this.name,
        n = this.parser,
        i = n.json,
        r = i.textures[e];
      if (!r.extensions || !r.extensions[t]) return null;
      const s = r.extensions[t],
        a = i.images[s.source];
      let o = n.textureLoader;
      if (a.uri) {
        const e = n.options.manager.getHandler(a.uri);
        null !== e && (o = e);
      }
      return this.detectSupport().then(function (r) {
        if (r) return n.loadTextureImage(e, s.source, o);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
          throw new Error(
            "THREE.GLTFLoader: WebP required by asset but unsupported."
          );
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return (
        this.isSupported ||
          (this.isSupported = new Promise(function (e) {
            const t = new Image();
            (t.src =
              "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
              (t.onload = t.onerror =
                function () {
                  e(1 === t.height);
                });
          })),
        this.isSupported
      );
    }
  }
  class yc {
    constructor(e) {
      (this.name = oc), (this.parser = e);
    }
    loadBufferView(e) {
      const t = this.parser.json,
        n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const e = n.extensions[this.name],
          i = this.parser.getDependency("buffer", e.buffer),
          r = this.parser.options.meshoptDecoder;
        if (!r || !r.supported) {
          if (
            t.extensionsRequired &&
            t.extensionsRequired.indexOf(this.name) >= 0
          )
            throw new Error(
              "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
            );
          return null;
        }
        return Promise.all([i, r.ready]).then(function (t) {
          const n = e.byteOffset || 0,
            i = e.byteLength || 0,
            s = e.count,
            a = e.byteStride,
            o = new ArrayBuffer(s * a),
            l = new Uint8Array(t[0], n, i);
          return (
            r.decodeGltfBuffer(new Uint8Array(o), s, a, l, e.mode, e.filter), o
          );
        });
      }
      return null;
    }
  }
  const _c = "glTF";
  class bc {
    constructor(e) {
      (this.name = jl), (this.content = null), (this.body = null);
      const t = new DataView(e, 0, 12);
      if (
        ((this.header = {
          magic: fl.decodeText(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== _c)
      )
        throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2)
        throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const n = this.header.length - 12,
        i = new DataView(e, 12);
      let r = 0;
      for (; r < n; ) {
        const t = i.getUint32(r, !0);
        r += 4;
        const n = i.getUint32(r, !0);
        if (((r += 4), 1313821514 === n)) {
          const n = new Uint8Array(e, 12 + r, t);
          this.content = fl.decodeText(n);
        } else if (5130562 === n) {
          const n = 12 + r;
          this.body = e.slice(n, n + t);
        }
        r += t;
      }
      if (null === this.content)
        throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class wc {
    constructor(e, t) {
      if (!t)
        throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      (this.name = ql),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json,
        i = this.dracoLoader,
        r = e.extensions[this.name].bufferView,
        s = e.extensions[this.name].attributes,
        a = {},
        o = {},
        l = {};
      for (const e in s) {
        const t = Nc[e] || e.toLowerCase();
        a[t] = s[e];
      }
      for (const t in e.attributes) {
        const i = Nc[t] || t.toLowerCase();
        if (void 0 !== s[t]) {
          const r = n.accessors[e.attributes[t]],
            s = Cc[r.componentType];
          (l[i] = s), (o[i] = !0 === r.normalized);
        }
      }
      return t.getDependency("bufferView", r).then(function (e) {
        return new Promise(function (t) {
          i.decodeDracoFile(
            e,
            function (e) {
              for (const t in e.attributes) {
                const n = e.attributes[t],
                  i = o[t];
                void 0 !== i && (n.normalized = i);
              }
              t(e);
            },
            a,
            l
          );
        });
      });
    }
  }
  class Mc {
    constructor() {
      this.name = ic;
    }
    extendTexture(e, t) {
      return (
        void 0 !== t.texCoord &&
          console.warn(
            'THREE.GLTFLoader: Custom UV sets in "' +
              this.name +
              '" extension not yet supported.'
          ),
        (void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale) ||
          ((e = e.clone()),
          void 0 !== t.offset && e.offset.fromArray(t.offset),
          void 0 !== t.rotation && (e.rotation = t.rotation),
          void 0 !== t.scale && e.repeat.fromArray(t.scale),
          (e.needsUpdate = !0)),
        e
      );
    }
  }
  class Sc extends _o {
    constructor(e) {
      super(), (this.isGLTFSpecularGlossinessMaterial = !0);
      const t = [
          "#ifdef USE_SPECULARMAP",
          "\tuniform sampler2D specularMap;",
          "#endif",
        ].join("\n"),
        n = [
          "#ifdef USE_GLOSSINESSMAP",
          "\tuniform sampler2D glossinessMap;",
          "#endif",
        ].join("\n"),
        i = [
          "vec3 specularFactor = specular;",
          "#ifdef USE_SPECULARMAP",
          "\tvec4 texelSpecular = texture2D( specularMap, vUv );",
          "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
          "\tspecularFactor *= texelSpecular.rgb;",
          "#endif",
        ].join("\n"),
        r = [
          "float glossinessFactor = glossiness;",
          "#ifdef USE_GLOSSINESSMAP",
          "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
          "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
          "\tglossinessFactor *= texelGlossiness.a;",
          "#endif",
        ].join("\n"),
        s = [
          "PhysicalMaterial material;",
          "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
          "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
          "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
          "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
          "material.roughness += geometryRoughness;",
          "material.roughness = min( material.roughness, 1.0 );",
          "material.specularColor = specularFactor;",
        ].join("\n"),
        a = {
          specular: { value: new pe().setHex(16777215) },
          glossiness: { value: 1 },
          specularMap: { value: null },
          glossinessMap: { value: null },
        };
      (this._extraUniforms = a),
        (this.onBeforeCompile = function (e) {
          for (const t in a) e.uniforms[t] = a[t];
          e.fragmentShader = e.fragmentShader
            .replace("uniform float roughness;", "uniform vec3 specular;")
            .replace("uniform float metalness;", "uniform float glossiness;")
            .replace("#include <roughnessmap_pars_fragment>", t)
            .replace("#include <metalnessmap_pars_fragment>", n)
            .replace("#include <roughnessmap_fragment>", i)
            .replace("#include <metalnessmap_fragment>", r)
            .replace("#include <lights_physical_fragment>", s);
        }),
        Object.defineProperties(this, {
          specular: {
            get: function () {
              return a.specular.value;
            },
            set: function (e) {
              a.specular.value = e;
            },
          },
          specularMap: {
            get: function () {
              return a.specularMap.value;
            },
            set: function (e) {
              (a.specularMap.value = e),
                e
                  ? (this.defines.USE_SPECULARMAP = "")
                  : delete this.defines.USE_SPECULARMAP;
            },
          },
          glossiness: {
            get: function () {
              return a.glossiness.value;
            },
            set: function (e) {
              a.glossiness.value = e;
            },
          },
          glossinessMap: {
            get: function () {
              return a.glossinessMap.value;
            },
            set: function (e) {
              (a.glossinessMap.value = e),
                e
                  ? ((this.defines.USE_GLOSSINESSMAP = ""),
                    (this.defines.USE_UV = ""))
                  : (delete this.defines.USE_GLOSSINESSMAP,
                    delete this.defines.USE_UV);
            },
          },
        }),
        delete this.metalness,
        delete this.roughness,
        delete this.metalnessMap,
        delete this.roughnessMap,
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.specularMap = e.specularMap),
        this.specular.copy(e.specular),
        (this.glossinessMap = e.glossinessMap),
        (this.glossiness = e.glossiness),
        delete this.metalness,
        delete this.roughness,
        delete this.metalnessMap,
        delete this.roughnessMap,
        this
      );
    }
  }
  class Tc {
    constructor() {
      (this.name = Zl),
        (this.specularGlossinessParams = [
          "color",
          "map",
          "lightMap",
          "lightMapIntensity",
          "aoMap",
          "aoMapIntensity",
          "emissive",
          "emissiveIntensity",
          "emissiveMap",
          "bumpMap",
          "bumpScale",
          "normalMap",
          "normalMapType",
          "displacementMap",
          "displacementScale",
          "displacementBias",
          "specularMap",
          "specular",
          "glossinessMap",
          "glossiness",
          "alphaMap",
          "envMap",
          "envMapIntensity",
        ]);
    }
    getMaterialType() {
      return Sc;
    }
    extendParams(e, t, n) {
      const i = t.extensions[this.name];
      (e.color = new pe(1, 1, 1)), (e.opacity = 1);
      const r = [];
      if (Array.isArray(i.diffuseFactor)) {
        const t = i.diffuseFactor;
        e.color.fromArray(t), (e.opacity = t[3]);
      }
      if (
        (void 0 !== i.diffuseTexture &&
          r.push(n.assignTexture(e, "map", i.diffuseTexture, D)),
        (e.emissive = new pe(0, 0, 0)),
        (e.glossiness = void 0 !== i.glossinessFactor ? i.glossinessFactor : 1),
        (e.specular = new pe(1, 1, 1)),
        Array.isArray(i.specularFactor) &&
          e.specular.fromArray(i.specularFactor),
        void 0 !== i.specularGlossinessTexture)
      ) {
        const t = i.specularGlossinessTexture;
        r.push(n.assignTexture(e, "glossinessMap", t)),
          r.push(n.assignTexture(e, "specularMap", t, D));
      }
      return Promise.all(r);
    }
    createMaterial(e) {
      const t = new Sc(e);
      return (
        (t.fog = !0),
        (t.color = e.color),
        (t.map = void 0 === e.map ? null : e.map),
        (t.lightMap = null),
        (t.lightMapIntensity = 1),
        (t.aoMap = void 0 === e.aoMap ? null : e.aoMap),
        (t.aoMapIntensity = 1),
        (t.emissive = e.emissive),
        (t.emissiveIntensity =
          void 0 === e.emissiveIntensity ? 1 : e.emissiveIntensity),
        (t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap),
        (t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap),
        (t.bumpScale = 1),
        (t.normalMap = void 0 === e.normalMap ? null : e.normalMap),
        (t.normalMapType = 0),
        e.normalScale && (t.normalScale = e.normalScale),
        (t.displacementMap = null),
        (t.displacementScale = 1),
        (t.displacementBias = 0),
        (t.specularMap = void 0 === e.specularMap ? null : e.specularMap),
        (t.specular = e.specular),
        (t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap),
        (t.glossiness = e.glossiness),
        (t.alphaMap = null),
        (t.envMap = void 0 === e.envMap ? null : e.envMap),
        (t.envMapIntensity = 1),
        t
      );
    }
  }
  class Ec {
    constructor() {
      this.name = rc;
    }
  }
  class Ac extends Co {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = e * i * 3 + i;
      for (let e = 0; e !== i; e++) t[e] = n[r + e];
      return t;
    }
  }
  (Ac.prototype.beforeStart_ = Ac.prototype.copySampleValue_),
    (Ac.prototype.afterEnd_ = Ac.prototype.copySampleValue_),
    (Ac.prototype.interpolate_ = function (e, t, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = 2 * a,
        l = 3 * a,
        c = i - t,
        h = (n - t) / c,
        u = h * h,
        d = u * h,
        p = e * l,
        f = p - l,
        m = -2 * d + 3 * u,
        g = d - u,
        v = 1 - m,
        x = g - u + h;
      for (let e = 0; e !== a; e++) {
        const t = s[f + e + a],
          n = s[f + e + o] * c,
          i = s[p + e + a],
          l = s[p + e] * c;
        r[e] = v * t + x * n + m * i + g * l;
      }
      return r;
    });
  const Rc = new Se();
  class Lc extends Ac {
    interpolate_(e, t, n, i) {
      const r = super.interpolate_(e, t, n, i);
      return Rc.fromArray(r).normalize().toArray(r), r;
    }
  }
  const Cc = {
      5120: Int8Array,
      5121: Uint8Array,
      5122: Int16Array,
      5123: Uint16Array,
      5125: Uint32Array,
      5126: Float32Array,
    },
    Pc = { 9728: o, 9729: h, 9984: l, 9985: 1007, 9986: c, 9987: u },
    Dc = { 33071: s, 33648: a, 10497: r },
    Ic = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
    Nc = {
      POSITION: "position",
      NORMAL: "normal",
      TANGENT: "tangent",
      TEXCOORD_0: "uv",
      TEXCOORD_1: "uv2",
      COLOR_0: "color",
      WEIGHTS_0: "skinWeight",
      JOINTS_0: "skinIndex",
    },
    Oc = {
      scale: "scale",
      translation: "position",
      rotation: "quaternion",
      weights: "morphTargetInfluences",
    },
    zc = { CUBICSPLINE: void 0, LINEAR: E, STEP: T };
  function Uc(e, t, n) {
    for (const i in n.extensions)
      void 0 === e[i] &&
        ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
        (t.userData.gltfExtensions[i] = n.extensions[i]));
  }
  function Bc(e, t) {
    void 0 !== t.extras &&
      ("object" == typeof t.extras
        ? Object.assign(e.userData, t.extras)
        : console.warn(
            "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
          ));
  }
  function Fc(e, t) {
    if ((e.updateMorphTargets(), void 0 !== t.weights))
      for (let n = 0, i = t.weights.length; n < i; n++)
        e.morphTargetInfluences[n] = t.weights[n];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
      const n = t.extras.targetNames;
      if (e.morphTargetInfluences.length === n.length) {
        e.morphTargetDictionary = {};
        for (let t = 0, i = n.length; t < i; t++)
          e.morphTargetDictionary[n[t]] = t;
      } else
        console.warn(
          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
        );
    }
  }
  function Hc(e) {
    const t = e.extensions && e.extensions[ql];
    let n;
    return (
      (n = t
        ? "draco:" + t.bufferView + ":" + t.indices + ":" + kc(t.attributes)
        : e.indices + ":" + kc(e.attributes) + ":" + e.mode),
      n
    );
  }
  function kc(e) {
    let t = "";
    const n = Object.keys(e).sort();
    for (let i = 0, r = n.length; i < r; i++) t += n[i] + ":" + e[n[i]] + ";";
    return t;
  }
  function Gc(e) {
    switch (e) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error(
          "THREE.GLTFLoader: Unsupported normalized accessor component type."
        );
    }
  }
  class Vc {
    constructor(e = {}, t = {}) {
      (this.json = e),
        (this.extensions = {}),
        (this.plugins = {}),
        (this.options = t),
        (this.cache = new Wl()),
        (this.associations = new Map()),
        (this.primitiveCache = {}),
        (this.meshCache = { refs: {}, uses: {} }),
        (this.cameraCache = { refs: {}, uses: {} }),
        (this.lightCache = { refs: {}, uses: {} }),
        (this.sourceCache = {}),
        (this.textureCache = {}),
        (this.nodeNamesUsed = {});
      const n =
          !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        i = navigator.userAgent.indexOf("Firefox") > -1,
        r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
      "undefined" == typeof createImageBitmap || n || (i && r < 98)
        ? (this.textureLoader = new Ko(this.options.manager))
        : (this.textureLoader = new ml(this.options.manager)),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        (this.fileLoader = new Yo(this.options.manager)),
        this.fileLoader.setResponseType("arraybuffer"),
        "use-credentials" === this.options.crossOrigin &&
          this.fileLoader.setWithCredentials(!0);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this,
        i = this.json,
        r = this.extensions;
      this.cache.removeAll(),
        this._invokeAll(function (e) {
          return e._markDefs && e._markDefs();
        }),
        Promise.all(
          this._invokeAll(function (e) {
            return e.beforeRoot && e.beforeRoot();
          })
        )
          .then(function () {
            return Promise.all([
              n.getDependencies("scene"),
              n.getDependencies("animation"),
              n.getDependencies("camera"),
            ]);
          })
          .then(function (t) {
            const s = {
              scene: t[0][i.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: i.asset,
              parser: n,
              userData: {},
            };
            Uc(r, s, i),
              Bc(s, i),
              Promise.all(
                n._invokeAll(function (e) {
                  return e.afterRoot && e.afterRoot(s);
                })
              ).then(function () {
                e(s);
              });
          })
          .catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [],
        t = this.json.skins || [],
        n = this.json.meshes || [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n].joints;
        for (let t = 0, n = i.length; t < n; t++) e[i[t]].isBone = !0;
      }
      for (let t = 0, i = e.length; t < i; t++) {
        const i = e[t];
        void 0 !== i.mesh &&
          (this._addNodeRef(this.meshCache, i.mesh),
          void 0 !== i.skin && (n[i.mesh].isSkinnedMesh = !0)),
          void 0 !== i.camera && this._addNodeRef(this.cameraCache, i.camera);
      }
    }
    _addNodeRef(e, t) {
      void 0 !== t &&
        (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const i = n.clone(),
        r = (e, t) => {
          const n = this.associations.get(e);
          null != n && this.associations.set(t, n);
          for (const [n, i] of e.children.entries()) r(i, t.children[n]);
        };
      return r(n, i), (i.name += "_instance_" + e.uses[t]++), i;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const i = e(t[n]);
        if (i) return i;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let i = 0; i < t.length; i++) {
        const r = e(t[i]);
        r && n.push(r);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let i = this.cache.get(n);
      if (!i) {
        switch (e) {
          case "scene":
            i = this.loadScene(t);
            break;
          case "node":
            i = this.loadNode(t);
            break;
          case "mesh":
            i = this._invokeOne(function (e) {
              return e.loadMesh && e.loadMesh(t);
            });
            break;
          case "accessor":
            i = this.loadAccessor(t);
            break;
          case "bufferView":
            i = this._invokeOne(function (e) {
              return e.loadBufferView && e.loadBufferView(t);
            });
            break;
          case "buffer":
            i = this.loadBuffer(t);
            break;
          case "material":
            i = this._invokeOne(function (e) {
              return e.loadMaterial && e.loadMaterial(t);
            });
            break;
          case "texture":
            i = this._invokeOne(function (e) {
              return e.loadTexture && e.loadTexture(t);
            });
            break;
          case "skin":
            i = this.loadSkin(t);
            break;
          case "animation":
            i = this._invokeOne(function (e) {
              return e.loadAnimation && e.loadAnimation(t);
            });
            break;
          case "camera":
            i = this.loadCamera(t);
            break;
          default:
            throw new Error("Unknown type: " + e);
        }
        this.cache.add(n, i);
      }
      return i;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this,
          i = this.json[e + ("mesh" === e ? "es" : "s")] || [];
        (t = Promise.all(
          i.map(function (t, i) {
            return n.getDependency(e, i);
          })
        )),
          this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e],
        n = this.fileLoader;
      if (t.type && "arraybuffer" !== t.type)
        throw new Error(
          "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
        );
      if (void 0 === t.uri && 0 === e)
        return Promise.resolve(this.extensions[jl].body);
      const i = this.options;
      return new Promise(function (e, r) {
        n.load(fl.resolveURL(t.uri, i.path), e, void 0, function () {
          r(
            new Error(
              'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
            )
          );
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function (e) {
        const n = t.byteLength || 0,
          i = t.byteOffset || 0;
        return e.slice(i, i + n);
      });
    }
    loadAccessor(e) {
      const t = this,
        n = this.json,
        i = this.json.accessors[e];
      if (void 0 === i.bufferView && void 0 === i.sparse)
        return Promise.resolve(null);
      const r = [];
      return (
        void 0 !== i.bufferView
          ? r.push(this.getDependency("bufferView", i.bufferView))
          : r.push(null),
        void 0 !== i.sparse &&
          (r.push(
            this.getDependency("bufferView", i.sparse.indices.bufferView)
          ),
          r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
        Promise.all(r).then(function (e) {
          const r = e[0],
            s = Ic[i.type],
            a = Cc[i.componentType],
            o = a.BYTES_PER_ELEMENT,
            l = o * s,
            c = i.byteOffset || 0,
            h =
              void 0 !== i.bufferView
                ? n.bufferViews[i.bufferView].byteStride
                : void 0,
            u = !0 === i.normalized;
          let d, p;
          if (h && h !== l) {
            const e = Math.floor(c / h),
              n =
                "InterleavedBuffer:" +
                i.bufferView +
                ":" +
                i.componentType +
                ":" +
                e +
                ":" +
                i.count;
            let l = t.cache.get(n);
            l ||
              ((d = new a(r, e * h, (i.count * h) / o)),
              (l = new bs(d, h / o)),
              t.cache.add(n, l)),
              (p = new Ms(l, s, (c % h) / o, u));
          } else (d = null === r ? new a(i.count * s) : new a(r, c, i.count * s)), (p = new Wt(d, s, u));
          if (void 0 !== i.sparse) {
            const t = Ic.SCALAR,
              n = Cc[i.sparse.indices.componentType],
              o = i.sparse.indices.byteOffset || 0,
              l = i.sparse.values.byteOffset || 0,
              c = new n(e[1], o, i.sparse.count * t),
              h = new a(e[2], l, i.sparse.count * s);
            null !== r &&
              (p = new Wt(p.array.slice(), p.itemSize, p.normalized));
            for (let e = 0, t = c.length; e < t; e++) {
              const t = c[e];
              if (
                (p.setX(t, h[e * s]),
                s >= 2 && p.setY(t, h[e * s + 1]),
                s >= 3 && p.setZ(t, h[e * s + 2]),
                s >= 4 && p.setW(t, h[e * s + 3]),
                s >= 5)
              )
                throw new Error(
                  "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                );
            }
          }
          return p;
        })
      );
    }
    loadTexture(e) {
      const t = this.json,
        n = this.options,
        i = t.textures[e].source,
        r = t.images[i];
      let s = this.textureLoader;
      if (r.uri) {
        const e = n.manager.getHandler(r.uri);
        null !== e && (s = e);
      }
      return this.loadTextureImage(e, i, s);
    }
    loadTextureImage(e, t, n) {
      const i = this,
        s = this.json,
        a = s.textures[e],
        o = s.images[t],
        l = (o.uri || o.bufferView) + ":" + a.sampler;
      if (this.textureCache[l]) return this.textureCache[l];
      const c = this.loadImageSource(t, n)
        .then(function (t) {
          (t.flipY = !1), a.name && (t.name = a.name);
          const n = (s.samplers || {})[a.sampler] || {};
          return (
            (t.magFilter = Pc[n.magFilter] || h),
            (t.minFilter = Pc[n.minFilter] || u),
            (t.wrapS = Dc[n.wrapS] || r),
            (t.wrapT = Dc[n.wrapT] || r),
            i.associations.set(t, { textures: e }),
            t
          );
        })
        .catch(function () {
          return null;
        });
      return (this.textureCache[l] = c), c;
    }
    loadImageSource(e, t) {
      const n = this.json,
        i = this.options;
      if (void 0 !== this.sourceCache[e])
        return this.sourceCache[e].then((e) => e.clone());
      const r = n.images[e],
        s = self.URL || self.webkitURL;
      let a = r.uri || "",
        o = !1;
      if (void 0 !== r.bufferView)
        a = this.getDependency("bufferView", r.bufferView).then(function (e) {
          o = !0;
          const t = new Blob([e], { type: r.mimeType });
          return (a = s.createObjectURL(t)), a;
        });
      else if (void 0 === r.uri)
        throw new Error(
          "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
        );
      const l = Promise.resolve(a)
        .then(function (e) {
          return new Promise(function (n, r) {
            let s = n;
            !0 === t.isImageBitmapLoader &&
              (s = function (e) {
                const t = new ye(e);
                (t.needsUpdate = !0), n(t);
              }),
              t.load(fl.resolveURL(e, i.path), s, void 0, r);
          });
        })
        .then(function (e) {
          var t;
          return (
            !0 === o && s.revokeObjectURL(a),
            (e.userData.mimeType =
              r.mimeType ||
              ((t = r.uri).search(/\.jpe?g($|\?)/i) > 0 ||
              0 === t.search(/^data\:image\/jpeg/)
                ? "image/jpeg"
                : t.search(/\.webp($|\?)/i) > 0 ||
                  0 === t.search(/^data\:image\/webp/)
                ? "image/webp"
                : "image/png")),
            e
          );
        })
        .catch(function (e) {
          throw (
            (console.error("THREE.GLTFLoader: Couldn't load texture", a), e)
          );
        });
      return (this.sourceCache[e] = l), l;
    }
    assignTexture(e, t, n, i) {
      const r = this;
      return this.getDependency("texture", n.index).then(function (s) {
        if (
          (void 0 === n.texCoord ||
            0 == n.texCoord ||
            ("aoMap" === t && 1 == n.texCoord) ||
            console.warn(
              "THREE.GLTFLoader: Custom UV set " +
                n.texCoord +
                " for texture " +
                t +
                " not yet supported."
            ),
          r.extensions[ic])
        ) {
          const e = void 0 !== n.extensions ? n.extensions[ic] : void 0;
          if (e) {
            const t = r.associations.get(s);
            (s = r.extensions[ic].extendTexture(s, e)),
              r.associations.set(s, t);
          }
        }
        return void 0 !== i && (s.encoding = i), (e[t] = s), s;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const i = void 0 === t.attributes.tangent,
        r = void 0 !== t.attributes.color,
        s = void 0 === t.attributes.normal;
      if (e.isPoints) {
        const e = "PointsMaterial:" + n.uuid;
        let t = this.cache.get(e);
        t ||
          ((t = new da()),
          Ht.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          (t.sizeAttenuation = !1),
          this.cache.add(e, t)),
          (n = t);
      } else if (e.isLine) {
        const e = "LineBasicMaterial:" + n.uuid;
        let t = this.cache.get(e);
        t ||
          ((t = new ta()),
          Ht.prototype.copy.call(t, n),
          t.color.copy(n.color),
          this.cache.add(e, t)),
          (n = t);
      }
      if (i || r || s) {
        let e = "ClonedMaterial:" + n.uuid + ":";
        n.isGLTFSpecularGlossinessMaterial && (e += "specular-glossiness:"),
          i && (e += "derivative-tangents:"),
          r && (e += "vertex-colors:"),
          s && (e += "flat-shading:");
        let t = this.cache.get(e);
        t ||
          ((t = n.clone()),
          r && (t.vertexColors = !0),
          s && (t.flatShading = !0),
          i &&
            (t.normalScale && (t.normalScale.y *= -1),
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
          this.cache.add(e, t),
          this.associations.set(t, this.associations.get(n))),
          (n = t);
      }
      n.aoMap &&
        void 0 === t.attributes.uv2 &&
        void 0 !== t.attributes.uv &&
        t.setAttribute("uv2", t.attributes.uv),
        (e.material = n);
    }
    getMaterialType() {
      return _o;
    }
    loadMaterial(e) {
      const t = this,
        n = this.json,
        i = this.extensions,
        r = n.materials[e];
      let s;
      const a = {},
        o = r.extensions || {},
        l = [];
      if (o[Zl]) {
        const e = i[Zl];
        (s = e.getMaterialType()), l.push(e.extendParams(a, r, t));
      } else if (o[ec]) {
        const e = i[ec];
        (s = e.getMaterialType()), l.push(e.extendParams(a, r, t));
      } else {
        const n = r.pbrMetallicRoughness || {};
        if (
          ((a.color = new pe(1, 1, 1)),
          (a.opacity = 1),
          Array.isArray(n.baseColorFactor))
        ) {
          const e = n.baseColorFactor;
          a.color.fromArray(e), (a.opacity = e[3]);
        }
        void 0 !== n.baseColorTexture &&
          l.push(t.assignTexture(a, "map", n.baseColorTexture, D)),
          (a.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1),
          (a.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1),
          void 0 !== n.metallicRoughnessTexture &&
            (l.push(
              t.assignTexture(a, "metalnessMap", n.metallicRoughnessTexture)
            ),
            l.push(
              t.assignTexture(a, "roughnessMap", n.metallicRoughnessTexture)
            )),
          (s = this._invokeOne(function (t) {
            return t.getMaterialType && t.getMaterialType(e);
          })),
          l.push(
            Promise.all(
              this._invokeAll(function (t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, a);
              })
            )
          );
      }
      !0 === r.doubleSided && (a.side = 2);
      const c = r.alphaMode || "OPAQUE";
      if (
        ("BLEND" === c
          ? ((a.transparent = !0), (a.depthWrite = !1))
          : ((a.transparent = !1),
            "MASK" === c &&
              (a.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : 0.5)),
        void 0 !== r.normalTexture &&
          s !== kt &&
          (l.push(t.assignTexture(a, "normalMap", r.normalTexture)),
          (a.normalScale = new $(1, 1)),
          void 0 !== r.normalTexture.scale))
      ) {
        const e = r.normalTexture.scale;
        a.normalScale.set(e, e);
      }
      return (
        void 0 !== r.occlusionTexture &&
          s !== kt &&
          (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)),
          void 0 !== r.occlusionTexture.strength &&
            (a.aoMapIntensity = r.occlusionTexture.strength)),
        void 0 !== r.emissiveFactor &&
          s !== kt &&
          (a.emissive = new pe().fromArray(r.emissiveFactor)),
        void 0 !== r.emissiveTexture &&
          s !== kt &&
          l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, D)),
        Promise.all(l).then(function () {
          let n;
          return (
            (n = s === Sc ? i[Zl].createMaterial(a) : new s(a)),
            r.name && (n.name = r.name),
            Bc(n, r),
            t.associations.set(n, { materials: e }),
            r.extensions && Uc(i, n, r),
            n
          );
        })
      );
    }
    createUniqueName(e) {
      const t = Ll.sanitizeNodeName(e || "");
      let n = t;
      for (let e = 1; this.nodeNamesUsed[n]; ++e) n = t + "_" + e;
      return (this.nodeNamesUsed[n] = !0), n;
    }
    loadGeometries(e) {
      const t = this,
        n = this.extensions,
        i = this.primitiveCache;
      function r(e) {
        return n[ql].decodePrimitive(e, t).then(function (n) {
          return jc(n, e, t);
        });
      }
      const s = [];
      for (let n = 0, a = e.length; n < a; n++) {
        const a = e[n],
          o = Hc(a),
          l = i[o];
        if (l) s.push(l.promise);
        else {
          let e;
          (e = a.extensions && a.extensions[ql] ? r(a) : jc(new tn(), a, t)),
            (i[o] = { primitive: a, promise: e }),
            s.push(e);
        }
      }
      return Promise.all(s);
    }
    loadMesh(e) {
      const t = this,
        n = this.json,
        i = this.extensions,
        r = n.meshes[e],
        s = r.primitives,
        a = [];
      for (let e = 0, t = s.length; e < t; e++) {
        const t =
          void 0 === s[e].material
            ? (void 0 === (o = this.cache).DefaultMaterial &&
                (o.DefaultMaterial = new _o({
                  color: 16777215,
                  emissive: 0,
                  metalness: 1,
                  roughness: 1,
                  transparent: !1,
                  depthTest: !0,
                  side: 0,
                })),
              o.DefaultMaterial)
            : this.getDependency("material", s[e].material);
        a.push(t);
      }
      var o;
      return (
        a.push(t.loadGeometries(s)),
        Promise.all(a).then(function (n) {
          const a = n.slice(0, n.length - 1),
            o = n[n.length - 1],
            l = [];
          for (let n = 0, c = o.length; n < c; n++) {
            const c = o[n],
              h = s[n];
            let u;
            const d = a[n];
            if (
              4 === h.mode ||
              5 === h.mode ||
              6 === h.mode ||
              void 0 === h.mode
            )
              (u = !0 === r.isSkinnedMesh ? new Ws(c, d) : new _n(c, d)),
                !0 !== u.isSkinnedMesh ||
                  u.geometry.attributes.skinWeight.normalized ||
                  u.normalizeSkinWeights(),
                5 === h.mode
                  ? (u.geometry = qc(u.geometry, 1))
                  : 6 === h.mode && (u.geometry = qc(u.geometry, 2));
            else if (1 === h.mode) u = new ha(c, d);
            else if (3 === h.mode) u = new oa(c, d);
            else if (2 === h.mode) u = new ua(c, d);
            else {
              if (0 !== h.mode)
                throw new Error(
                  "THREE.GLTFLoader: Primitive mode unsupported: " + h.mode
                );
              u = new va(c, d);
            }
            Object.keys(u.geometry.morphAttributes).length > 0 && Fc(u, r),
              (u.name = t.createUniqueName(r.name || "mesh_" + e)),
              Bc(u, r),
              h.extensions && Uc(i, u, h),
              t.assignFinalMaterial(u),
              l.push(u);
          }
          for (let n = 0, i = l.length; n < i; n++)
            t.associations.set(l[n], { meshes: e, primitives: n });
          if (1 === l.length) return l[0];
          const c = new us();
          t.associations.set(c, { meshes: e });
          for (let e = 0, t = l.length; e < t; e++) c.add(l[e]);
          return c;
        })
      );
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e],
        i = n[n.type];
      if (i)
        return (
          "perspective" === n.type
            ? (t = new Rn(
                Q.radToDeg(i.yfov),
                i.aspectRatio || 1,
                i.znear || 1,
                i.zfar || 2e6
              ))
            : "orthographic" === n.type &&
              (t = new Qn(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
          n.name && (t.name = this.createUniqueName(n.name)),
          Bc(t, n),
          Promise.resolve(t)
        );
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
    }
    loadSkin(e) {
      const t = this.json.skins[e],
        n = { joints: t.joints };
      return void 0 === t.inverseBindMatrices
        ? Promise.resolve(n)
        : this.getDependency("accessor", t.inverseBindMatrices).then(function (
            e
          ) {
            return (n.inverseBindMatrices = e), n;
          });
    }
    loadAnimation(e) {
      const t = this.json.animations[e],
        n = [],
        i = [],
        r = [],
        s = [],
        a = [];
      for (let e = 0, o = t.channels.length; e < o; e++) {
        const o = t.channels[e],
          l = t.samplers[o.sampler],
          c = o.target,
          h = void 0 !== c.node ? c.node : c.id,
          u = void 0 !== t.parameters ? t.parameters[l.input] : l.input,
          d = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
        n.push(this.getDependency("node", h)),
          i.push(this.getDependency("accessor", u)),
          r.push(this.getDependency("accessor", d)),
          s.push(l),
          a.push(c);
      }
      return Promise.all([
        Promise.all(n),
        Promise.all(i),
        Promise.all(r),
        Promise.all(s),
        Promise.all(a),
      ]).then(function (n) {
        const i = n[0],
          r = n[1],
          s = n[2],
          a = n[3],
          o = n[4],
          l = [];
        for (let e = 0, t = i.length; e < t; e++) {
          const t = i[e],
            n = r[e],
            c = s[e],
            h = a[e],
            u = o[e];
          if (void 0 === t) continue;
          let d;
          switch ((t.updateMatrix(), (t.matrixAutoUpdate = !0), Oc[u.path])) {
            case Oc.weights:
              d = Uo;
              break;
            case Oc.rotation:
              d = Fo;
              break;
            default:
              d = ko;
          }
          const p = t.name ? t.name : t.uuid,
            f = void 0 !== h.interpolation ? zc[h.interpolation] : E,
            m = [];
          Oc[u.path] === Oc.weights
            ? t.traverse(function (e) {
                e.morphTargetInfluences && m.push(e.name ? e.name : e.uuid);
              })
            : m.push(p);
          let g = c.array;
          if (c.normalized) {
            const e = Gc(g.constructor),
              t = new Float32Array(g.length);
            for (let n = 0, i = g.length; n < i; n++) t[n] = g[n] * e;
            g = t;
          }
          for (let e = 0, t = m.length; e < t; e++) {
            const t = new d(m[e] + "." + Oc[u.path], n.array, g, f);
            "CUBICSPLINE" === h.interpolation &&
              ((t.createInterpolant = function (e) {
                return new (this instanceof Fo ? Lc : Ac)(
                  this.times,
                  this.values,
                  this.getValueSize() / 3,
                  e
                );
              }),
              (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
                !0)),
              l.push(t);
          }
        }
        const c = t.name ? t.name : "animation_" + e;
        return new Go(c, void 0, l);
      });
    }
    createNodeMesh(e) {
      const t = this.json,
        n = this,
        i = t.nodes[e];
      return void 0 === i.mesh
        ? null
        : n.getDependency("mesh", i.mesh).then(function (e) {
            const t = n._getNodeRef(n.meshCache, i.mesh, e);
            return (
              void 0 !== i.weights &&
                t.traverse(function (e) {
                  if (e.isMesh)
                    for (let t = 0, n = i.weights.length; t < n; t++)
                      e.morphTargetInfluences[t] = i.weights[t];
                }),
              t
            );
          });
    }
    loadNode(e) {
      const t = this.json,
        n = this.extensions,
        i = this,
        r = t.nodes[e],
        s = r.name ? i.createUniqueName(r.name) : "";
      return (function () {
        const t = [],
          n = i._invokeOne(function (t) {
            return t.createNodeMesh && t.createNodeMesh(e);
          });
        return (
          n && t.push(n),
          void 0 !== r.camera &&
            t.push(
              i.getDependency("camera", r.camera).then(function (e) {
                return i._getNodeRef(i.cameraCache, r.camera, e);
              })
            ),
          i
            ._invokeAll(function (t) {
              return t.createNodeAttachment && t.createNodeAttachment(e);
            })
            .forEach(function (e) {
              t.push(e);
            }),
          Promise.all(t)
        );
      })().then(function (t) {
        let a;
        if (
          ((a =
            !0 === r.isBone
              ? new js()
              : t.length > 1
              ? new us()
              : 1 === t.length
              ? t[0]
              : new At()),
          a !== t[0])
        )
          for (let e = 0, n = t.length; e < n; e++) a.add(t[e]);
        if (
          (r.name && ((a.userData.name = r.name), (a.name = s)),
          Bc(a, r),
          r.extensions && Uc(n, a, r),
          void 0 !== r.matrix)
        ) {
          const e = new nt();
          e.fromArray(r.matrix), a.applyMatrix4(e);
        } else void 0 !== r.translation && a.position.fromArray(r.translation), void 0 !== r.rotation && a.quaternion.fromArray(r.rotation), void 0 !== r.scale && a.scale.fromArray(r.scale);
        return (
          i.associations.has(a) || i.associations.set(a, {}),
          (i.associations.get(a).nodes = e),
          a
        );
      });
    }
    loadScene(e) {
      const t = this.json,
        n = this.extensions,
        i = this.json.scenes[e],
        r = this,
        s = new us();
      i.name && (s.name = r.createUniqueName(i.name)),
        Bc(s, i),
        i.extensions && Uc(n, s, i);
      const a = i.nodes || [],
        o = [];
      for (let e = 0, n = a.length; e < n; e++) o.push(Wc(a[e], s, t, r));
      return Promise.all(o).then(function () {
        return (
          (r.associations = ((e) => {
            const t = new Map();
            for (const [e, n] of r.associations)
              (e instanceof Ht || e instanceof ye) && t.set(e, n);
            return (
              e.traverse((e) => {
                const n = r.associations.get(e);
                null != n && t.set(e, n);
              }),
              t
            );
          })(s)),
          s
        );
      });
    }
  }
  function Wc(e, t, n, i) {
    const r = n.nodes[e];
    return i
      .getDependency("node", e)
      .then(function (e) {
        if (void 0 === r.skin) return e;
        let t;
        return i
          .getDependency("skin", r.skin)
          .then(function (e) {
            t = e;
            const n = [];
            for (let e = 0, r = t.joints.length; e < r; e++)
              n.push(i.getDependency("node", t.joints[e]));
            return Promise.all(n);
          })
          .then(function (n) {
            return (
              e.traverse(function (e) {
                if (!e.isMesh) return;
                const i = [],
                  r = [];
                for (let e = 0, s = n.length; e < s; e++) {
                  const s = n[e];
                  if (s) {
                    i.push(s);
                    const n = new nt();
                    void 0 !== t.inverseBindMatrices &&
                      n.fromArray(t.inverseBindMatrices.array, 16 * e),
                      r.push(n);
                  } else
                    console.warn(
                      'THREE.GLTFLoader: Joint "%s" could not be found.',
                      t.joints[e]
                    );
                }
                e.bind(new Js(i, r), e.matrixWorld);
              }),
              e
            );
          });
      })
      .then(function (e) {
        t.add(e);
        const s = [];
        if (r.children) {
          const t = r.children;
          for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r];
            s.push(Wc(a, e, n, i));
          }
        }
        return Promise.all(s);
      });
  }
  function jc(e, t, n) {
    const i = t.attributes,
      r = [];
    function s(t, i) {
      return n.getDependency("accessor", t).then(function (t) {
        e.setAttribute(i, t);
      });
    }
    for (const t in i) {
      const n = Nc[t] || t.toLowerCase();
      n in e.attributes || r.push(s(i[t], n));
    }
    if (void 0 !== t.indices && !e.index) {
      const i = n.getDependency("accessor", t.indices).then(function (t) {
        e.setIndex(t);
      });
      r.push(i);
    }
    return (
      Bc(e, t),
      (function (e, t, n) {
        const i = t.attributes,
          r = new Re();
        if (void 0 === i.POSITION) return;
        {
          const e = n.json.accessors[i.POSITION],
            t = e.min,
            s = e.max;
          if (void 0 === t || void 0 === s)
            return void console.warn(
              "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
            );
          if (
            (r.set(new Te(t[0], t[1], t[2]), new Te(s[0], s[1], s[2])),
            e.normalized)
          ) {
            const t = Gc(Cc[e.componentType]);
            r.min.multiplyScalar(t), r.max.multiplyScalar(t);
          }
        }
        const s = t.targets;
        if (void 0 !== s) {
          const e = new Te(),
            t = new Te();
          for (let i = 0, r = s.length; i < r; i++) {
            const r = s[i];
            if (void 0 !== r.POSITION) {
              const i = n.json.accessors[r.POSITION],
                s = i.min,
                a = i.max;
              if (void 0 !== s && void 0 !== a) {
                if (
                  (t.setX(Math.max(Math.abs(s[0]), Math.abs(a[0]))),
                  t.setY(Math.max(Math.abs(s[1]), Math.abs(a[1]))),
                  t.setZ(Math.max(Math.abs(s[2]), Math.abs(a[2]))),
                  i.normalized)
                ) {
                  const e = Gc(Cc[i.componentType]);
                  t.multiplyScalar(e);
                }
                e.max(t);
              } else
                console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
            }
          }
          r.expandByVector(e);
        }
        e.boundingBox = r;
        const a = new Xe();
        r.getCenter(a.center),
          (a.radius = r.min.distanceTo(r.max) / 2),
          (e.boundingSphere = a);
      })(e, t, n),
      Promise.all(r).then(function () {
        return void 0 !== t.targets
          ? (function (e, t, n) {
              let i = !1,
                r = !1,
                s = !1;
              for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                if (
                  (void 0 !== n.POSITION && (i = !0),
                  void 0 !== n.NORMAL && (r = !0),
                  void 0 !== n.COLOR_0 && (s = !0),
                  i && r && s)
                )
                  break;
              }
              if (!i && !r && !s) return Promise.resolve(e);
              const a = [],
                o = [],
                l = [];
              for (let c = 0, h = t.length; c < h; c++) {
                const h = t[c];
                if (i) {
                  const t =
                    void 0 !== h.POSITION
                      ? n.getDependency("accessor", h.POSITION)
                      : e.attributes.position;
                  a.push(t);
                }
                if (r) {
                  const t =
                    void 0 !== h.NORMAL
                      ? n.getDependency("accessor", h.NORMAL)
                      : e.attributes.normal;
                  o.push(t);
                }
                if (s) {
                  const t =
                    void 0 !== h.COLOR_0
                      ? n.getDependency("accessor", h.COLOR_0)
                      : e.attributes.color;
                  l.push(t);
                }
              }
              return Promise.all([
                Promise.all(a),
                Promise.all(o),
                Promise.all(l),
              ]).then(function (t) {
                const n = t[0],
                  a = t[1],
                  o = t[2];
                return (
                  i && (e.morphAttributes.position = n),
                  r && (e.morphAttributes.normal = a),
                  s && (e.morphAttributes.color = o),
                  (e.morphTargetsRelative = !0),
                  e
                );
              });
            })(e, t.targets, n)
          : e;
      })
    );
  }
  function qc(e, t) {
    let n = e.getIndex();
    if (null === n) {
      const t = [],
        i = e.getAttribute("position");
      if (void 0 === i)
        return (
          console.error(
            "THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          e
        );
      for (let e = 0; e < i.count; e++) t.push(e);
      e.setIndex(t), (n = e.getIndex());
    }
    const i = n.count - 2,
      r = [];
    if (2 === t)
      for (let e = 1; e <= i; e++)
        r.push(n.getX(0)), r.push(n.getX(e)), r.push(n.getX(e + 1));
    else
      for (let e = 0; e < i; e++)
        e % 2 == 0
          ? (r.push(n.getX(e)), r.push(n.getX(e + 1)), r.push(n.getX(e + 2)))
          : (r.push(n.getX(e + 2)), r.push(n.getX(e + 1)), r.push(n.getX(e)));
    r.length / 3 !== i &&
      console.error(
        "THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    const s = e.clone();
    return s.setIndex(r), s;
  }
  const Xc = new WeakMap();
  function Yc() {
    let e, t;
    function n(e, t, n, i, r, s) {
      const a = s.num_components(),
        o = n.num_points() * a,
        l = o * r.BYTES_PER_ELEMENT,
        c = (function (e, t) {
          switch (t) {
            case Float32Array:
              return e.DT_FLOAT32;
            case Int8Array:
              return e.DT_INT8;
            case Int16Array:
              return e.DT_INT16;
            case Int32Array:
              return e.DT_INT32;
            case Uint8Array:
              return e.DT_UINT8;
            case Uint16Array:
              return e.DT_UINT16;
            case Uint32Array:
              return e.DT_UINT32;
          }
        })(e, r),
        h = e._malloc(l);
      t.GetAttributeDataArrayForAllPoints(n, s, c, l, h);
      const u = new r(e.HEAPF32.buffer, h, o).slice();
      return e._free(h), { name: i, array: u, itemSize: a };
    }
    onmessage = function (i) {
      const r = i.data;
      switch (r.type) {
        case "init":
          (e = r.decoderConfig),
            (t = new Promise(function (t) {
              (e.onModuleLoaded = function (e) {
                t({ draco: e });
              }),
                DracoDecoderModule(e);
            }));
          break;
        case "decode":
          const i = r.buffer,
            s = r.taskConfig;
          t.then((e) => {
            const t = e.draco,
              a = new t.Decoder(),
              o = new t.DecoderBuffer();
            o.Init(new Int8Array(i), i.byteLength);
            try {
              const e = (function (e, t, i, r) {
                  const s = r.attributeIDs,
                    a = r.attributeTypes;
                  let o, l;
                  const c = t.GetEncodedGeometryType(i);
                  if (c === e.TRIANGULAR_MESH)
                    (o = new e.Mesh()), (l = t.DecodeBufferToMesh(i, o));
                  else {
                    if (c !== e.POINT_CLOUD)
                      throw new Error(
                        "THREE.DRACOLoader: Unexpected geometry type."
                      );
                    (o = new e.PointCloud()),
                      (l = t.DecodeBufferToPointCloud(i, o));
                  }
                  if (!l.ok() || 0 === o.ptr)
                    throw new Error(
                      "THREE.DRACOLoader: Decoding failed: " + l.error_msg()
                    );
                  const h = { index: null, attributes: [] };
                  for (const i in s) {
                    const l = self[a[i]];
                    let c, u;
                    if (r.useUniqueIDs)
                      (u = s[i]), (c = t.GetAttributeByUniqueId(o, u));
                    else {
                      if (((u = t.GetAttributeId(o, e[s[i]])), -1 === u))
                        continue;
                      c = t.GetAttribute(o, u);
                    }
                    h.attributes.push(n(e, t, o, i, l, c));
                  }
                  return (
                    c === e.TRIANGULAR_MESH &&
                      (h.index = (function (e, t, n) {
                        const i = 3 * n.num_faces(),
                          r = 4 * i,
                          s = e._malloc(r);
                        t.GetTrianglesUInt32Array(n, r, s);
                        const a = new Uint32Array(
                          e.HEAPF32.buffer,
                          s,
                          i
                        ).slice();
                        return e._free(s), { array: a, itemSize: 1 };
                      })(e, t, o)),
                    e.destroy(o),
                    h
                  );
                })(t, a, o, s),
                i = e.attributes.map((e) => e.array.buffer);
              e.index && i.push(e.index.array.buffer),
                self.postMessage({ type: "decode", id: r.id, geometry: e }, i);
            } catch (e) {
              console.error(e),
                self.postMessage({ type: "error", id: r.id, error: e.message });
            } finally {
              t.destroy(o), t.destroy(a);
            }
          });
      }
    };
  }
  const Jc = document.querySelector("html");
  window.addEventListener("dblclick", () => {
    document.fullscreenElement
      ? document.exitFullscreen()
      : Jc.requestFullscreen();
  }),
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      !1
    );
  const Zc = { width: window.innerWidth, height: window.innerHeight },
    Kc = -0.0118,
    Qc = { y: 0, z: 0, xClient: 0, yClient: 0 };
  window.addEventListener("mousemove", (e) => {
    (Qc.y = e.clientX / Zc.width - 0.5),
      (Qc.z = e.clientY / Zc.height - 0.5),
      (Qc.xClient = e.clientX),
      (Qc.yClient = e.clientY);
  });
  const $c = document.querySelector("canvas.webgl"),
    eh = new _s(),
    th = new Ko(),
    nh = new (class extends qo {
      constructor(e) {
        super(e),
          (this.decoderPath = ""),
          (this.decoderConfig = {}),
          (this.decoderBinary = null),
          (this.decoderPending = null),
          (this.workerLimit = 4),
          (this.workerPool = []),
          (this.workerNextTaskID = 1),
          (this.workerSourceURL = ""),
          (this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD",
          }),
          (this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array",
          });
      }
      setDecoderPath(e) {
        return (this.decoderPath = e), this;
      }
      setDecoderConfig(e) {
        return (this.decoderConfig = e), this;
      }
      setWorkerLimit(e) {
        return (this.workerLimit = e), this;
      }
      load(e, t, n, i) {
        const r = new Yo(this.manager);
        r.setPath(this.path),
          r.setResponseType("arraybuffer"),
          r.setRequestHeader(this.requestHeader),
          r.setWithCredentials(this.withCredentials),
          r.load(
            e,
            (e) => {
              const n = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: !1,
              };
              this.decodeGeometry(e, n).then(t).catch(i);
            },
            n,
            i
          );
      }
      decodeDracoFile(e, t, n, i) {
        const r = {
          attributeIDs: n || this.defaultAttributeIDs,
          attributeTypes: i || this.defaultAttributeTypes,
          useUniqueIDs: !!n,
        };
        this.decodeGeometry(e, r).then(t);
      }
      decodeGeometry(e, t) {
        for (const e in t.attributeTypes) {
          const n = t.attributeTypes[e];
          void 0 !== n.BYTES_PER_ELEMENT && (t.attributeTypes[e] = n.name);
        }
        const n = JSON.stringify(t);
        if (Xc.has(e)) {
          const t = Xc.get(e);
          if (t.key === n) return t.promise;
          if (0 === e.byteLength)
            throw new Error(
              "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
            );
        }
        let i;
        const r = this.workerNextTaskID++,
          s = e.byteLength,
          a = this._getWorker(r, s)
            .then(
              (n) => (
                (i = n),
                new Promise((n, s) => {
                  (i._callbacks[r] = { resolve: n, reject: s }),
                    i.postMessage(
                      { type: "decode", id: r, taskConfig: t, buffer: e },
                      [e]
                    );
                })
              )
            )
            .then((e) => this._createGeometry(e.geometry));
        return (
          a
            .catch(() => !0)
            .then(() => {
              i && r && this._releaseTask(i, r);
            }),
          Xc.set(e, { key: n, promise: a }),
          a
        );
      }
      _createGeometry(e) {
        const t = new tn();
        e.index && t.setIndex(new Wt(e.index.array, 1));
        for (let n = 0; n < e.attributes.length; n++) {
          const i = e.attributes[n],
            r = i.name,
            s = i.array,
            a = i.itemSize;
          t.setAttribute(r, new Wt(s, a));
        }
        return t;
      }
      _loadLibrary(e, t) {
        const n = new Yo(this.manager);
        return (
          n.setPath(this.decoderPath),
          n.setResponseType(t),
          n.setWithCredentials(this.withCredentials),
          new Promise((t, i) => {
            n.load(e, t, void 0, i);
          })
        );
      }
      preload() {
        return this._initDecoder(), this;
      }
      _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        const e =
            "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
          t = [];
        return (
          e
            ? t.push(this._loadLibrary("draco_decoder.js", "text"))
            : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
              t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
          (this.decoderPending = Promise.all(t).then((t) => {
            const n = t[0];
            e || (this.decoderConfig.wasmBinary = t[1]);
            const i = Yc.toString(),
              r = [
                "/* draco decoder */",
                n,
                "",
                "/* worker */",
                i.substring(i.indexOf("{") + 1, i.lastIndexOf("}")),
              ].join("\n");
            this.workerSourceURL = URL.createObjectURL(new Blob([r]));
          })),
          this.decoderPending
        );
      }
      _getWorker(e, t) {
        return this._initDecoder().then(() => {
          if (this.workerPool.length < this.workerLimit) {
            const e = new Worker(this.workerSourceURL);
            (e._callbacks = {}),
              (e._taskCosts = {}),
              (e._taskLoad = 0),
              e.postMessage({
                type: "init",
                decoderConfig: this.decoderConfig,
              }),
              (e.onmessage = function (t) {
                const n = t.data;
                switch (n.type) {
                  case "decode":
                    e._callbacks[n.id].resolve(n);
                    break;
                  case "error":
                    e._callbacks[n.id].reject(n);
                    break;
                  default:
                    console.error(
                      'THREE.DRACOLoader: Unexpected message, "' + n.type + '"'
                    );
                }
              }),
              this.workerPool.push(e);
          } else
            this.workerPool.sort(function (e, t) {
              return e._taskLoad > t._taskLoad ? -1 : 1;
            });
          const n = this.workerPool[this.workerPool.length - 1];
          return (n._taskCosts[e] = t), (n._taskLoad += t), n;
        });
      }
      _releaseTask(e, t) {
        (e._taskLoad -= e._taskCosts[t]),
          delete e._callbacks[t],
          delete e._taskCosts[t];
      }
      debug() {
        console.log(
          "Task load: ",
          this.workerPool.map((e) => e._taskLoad)
        );
      }
      dispose() {
        for (let e = 0; e < this.workerPool.length; ++e)
          this.workerPool[e].terminate();
        return (this.workerPool.length = 0), this;
      }
    })();
  nh.setDecoderPath("draco/");
  const ih = new (class extends qo {
    constructor(e) {
      super(e),
        (this.dracoLoader = null),
        (this.ktx2Loader = null),
        (this.meshoptDecoder = null),
        (this.pluginCallbacks = []),
        this.register(function (e) {
          return new uc(e);
        }),
        this.register(function (e) {
          return new vc(e);
        }),
        this.register(function (e) {
          return new xc(e);
        }),
        this.register(function (e) {
          return new dc(e);
        }),
        this.register(function (e) {
          return new pc(e);
        }),
        this.register(function (e) {
          return new fc(e);
        }),
        this.register(function (e) {
          return new mc(e);
        }),
        this.register(function (e) {
          return new hc(e);
        }),
        this.register(function (e) {
          return new gc(e);
        }),
        this.register(function (e) {
          return new lc(e);
        }),
        this.register(function (e) {
          return new yc(e);
        });
    }
    load(e, t, n, i) {
      const r = this;
      let s;
      (s =
        "" !== this.resourcePath
          ? this.resourcePath
          : "" !== this.path
          ? this.path
          : fl.extractUrlBase(e)),
        this.manager.itemStart(e);
      const a = function (t) {
          i ? i(t) : console.error(t),
            r.manager.itemError(e),
            r.manager.itemEnd(e);
        },
        o = new Yo(this.manager);
      o.setPath(this.path),
        o.setResponseType("arraybuffer"),
        o.setRequestHeader(this.requestHeader),
        o.setWithCredentials(this.withCredentials),
        o.load(
          e,
          function (n) {
            try {
              r.parse(
                n,
                s,
                function (n) {
                  t(n), r.manager.itemEnd(e);
                },
                a
              );
            } catch (e) {
              a(e);
            }
          },
          n,
          a
        );
    }
    setDRACOLoader(e) {
      return (this.dracoLoader = e), this;
    }
    setDDSLoader() {
      throw new Error(
        'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
      );
    }
    setKTX2Loader(e) {
      return (this.ktx2Loader = e), this;
    }
    setMeshoptDecoder(e) {
      return (this.meshoptDecoder = e), this;
    }
    register(e) {
      return (
        -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e),
        this
      );
    }
    unregister(e) {
      return (
        -1 !== this.pluginCallbacks.indexOf(e) &&
          this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
      );
    }
    parse(e, t, n, i) {
      let r;
      const s = {},
        a = {};
      if ("string" == typeof e) r = e;
      else if (fl.decodeText(new Uint8Array(e, 0, 4)) === _c) {
        try {
          s[jl] = new bc(e);
        } catch (e) {
          return void (i && i(e));
        }
        r = s[jl].content;
      } else r = fl.decodeText(new Uint8Array(e));
      const o = JSON.parse(r);
      if (void 0 === o.asset || o.asset.version[0] < 2)
        return void (
          i &&
          i(
            new Error(
              "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
            )
          )
        );
      const l = new Vc(o, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder,
      });
      l.fileLoader.setRequestHeader(this.requestHeader);
      for (let e = 0; e < this.pluginCallbacks.length; e++) {
        const t = this.pluginCallbacks[e](l);
        (a[t.name] = t), (s[t.name] = !0);
      }
      if (o.extensionsUsed)
        for (let e = 0; e < o.extensionsUsed.length; ++e) {
          const t = o.extensionsUsed[e],
            n = o.extensionsRequired || [];
          switch (t) {
            case ec:
              s[t] = new cc();
              break;
            case Zl:
              s[t] = new Tc();
              break;
            case ql:
              s[t] = new wc(o, this.dracoLoader);
              break;
            case ic:
              s[t] = new Mc();
              break;
            case rc:
              s[t] = new Ec();
              break;
            default:
              n.indexOf(t) >= 0 &&
                void 0 === a[t] &&
                console.warn(
                  'THREE.GLTFLoader: Unknown extension "' + t + '".'
                );
          }
        }
      l.setExtensions(s), l.setPlugins(a), l.parse(n, i);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function (i, r) {
        n.parse(e, t, i, r);
      });
    }
  })();
  ih.setDRACOLoader(nh),
    window.addEventListener("load", () => {
      document.querySelector(".preloadingPageDiv").classList.add("hidden");
    });
  const rh = th.load("./assets/images/bake.jpg");
  (rh.flipY = !1), (rh.encoding = D);
  let sh = th.load("./assets/images/zatpay.jpg");
  (sh.flipY = !0), (sh.encoding = D);
  let ah = th.load("./assets/images/portfolio.png");
  (ah.flipY = !0), (ah.encoding = D);
  let oh = th.load("./assets/images/virtuals.png");
  (oh.flipY = !0), (oh.encoding = D);
  let lh = th.load("./assets/images/cornucopias.png");
  (lh.flipY = !0), (lh.encoding = D);
  let ch = th.load("./assets/images/amuse.png");
  (ch.flipY = !0), (ch.encoding = D);
  let hh = th.load("./assets/images/scottybeam.png");
  (hh.flipY = !0), (hh.encoding = D);
  let uh = th.load("./assets/images/wbt.png");
  (uh.flipY = !0), (uh.encoding = D);
  let dh = th.load("./assets/images/mypethooligangame.png");
  (dh.flipY = !0), (dh.encoding = D);
  let ph = th.load("./assets/images/spark.png");
  (ph.flipY = !0), (ph.encoding = D);
  let fh = th.load("./assets/images/biswap.png");
  (fh.flipY = !0), (fh.encoding = D);
  let mh = th.load("./assets/images/laserfiche.png");
  (mh.flipY = !0), (mh.encoding = D);
  let gh = th.load("./assets/images/todoneumaticas.png");
  (gh.flipY = !0), (gh.encoding = D);
  let vh = th.load("./assets/images/innago.png");
  (vh.flipY = !0), (vh.encoding = D);
  let xh = th.load("./assets/images/forge.png");
  (xh.flipY = !0), (xh.encoding = D);
  let yh = th.load("./assets/images/yokaiswap.png");
  (yh.flipY = !0), (yh.encoding = D);
  let _h = th.load("./assets/images/metafluence.png");
  (_h.flipY = !0), (_h.encoding = D);
  let bh = th.load("./assets/images/ordigen.png");
  (bh.flipY = !0), (bh.encoding = D);
  let wh = th.load("./assets/images/vikingfehu.png");
  (wh.flipY = !0), (wh.encoding = D);
  let Mh = th.load("./assets/images/suoc.png");
  (Mh.flipY = !0), (Mh.encoding = D);
  let Sh = th.load("./assets/images/multibit.png");
  (Sh.flipY = !0), (Sh.encoding = D);
  const Th = new kt({ map: rh }),
    Eh = new kt({ map: sh }),
    Ah = new kt({ map: ah }),
    Rh = new kt({ map: oh }),
    Lh = new kt({ map: lh }),
    Ch = new kt({ map: ch }),
    Ph = new kt({ map: hh }),
    Dh = new kt({ map: uh }),
    Ih = new kt({ map: dh }),
    Nh = new kt({ map: ph }),
    Oh = new kt({ map: bh }),
    zh = new kt({ map: wh }),
    Uh = new kt({ map: fh }),
    Bh = new kt({ map: mh }),
    Fh = new kt({ map: gh }),
    Hh = new kt({ map: vh }),
    kh = new kt({ map: xh }),
    Gh = new kt({ map: yh }),
    Vh = new kt({ map: _h }),
    Wh = new kt({ map: Mh }),
    jh = new kt({ map: Sh }),
    qh = new kt({ color: 16777215 });
  ih.load("./glb/deskScene.glb", (e) => {
    e.scene.traverse((e) => {
      e.material = Th;
    });
    const t = e.scene.children.find((e) => "Sphere" === e.name);
    e.scene.children.find((e) => "screen" === e.name),
      (t.material = qh),
      (e.scene.rotation.z = -Math.PI / 20),
      eh.add(e.scene);
  });
  let Xh = Array.from(document.querySelectorAll(".singleline"));
  ih.load("./glb/screen.glb", (e) => {
    e.scene.traverse((e) => {
      (e.material = Eh),
        Xh.forEach((t) => {
          t.addEventListener("mouseover", () => {
            switch (t.getAttribute("id")) {
              case "portfolio":
                e.material = Ah;
                break;
              case "virtuals":
                e.material = Rh;
                break;
              case "cornucopias":
                e.material = Lh;
                break;
              case "amuse":
                e.material = Ch;
                break;
              case "scotty":
                e.material = Ph;
                break;
              case "presaleonsolana":
                e.material = Dh;
                break;
              case "mypethooligangame":
                e.material = Ih;
                break;
              case "sparks":
                e.material = Nh;
                break;
              case "biswap":
                e.material = Uh;
                break;
              case "laserfiche":
                e.material = Bh;
                break;
              case "todoneumaticas":
                e.material = Fh;
                break;
              case "innago":
                e.material = Hh;
                break;
              case "forge":
                e.material = kh;
                break;
              case "yokaiswap":
                e.material = Gh;
                break;
              case "metafluence":
                e.material = Vh;
                break;
              case "defisport":
                e.material = Oh;
                break;
              case "vikingfehu":
                e.material = zh;
                break;
              case "SuocAPP":
                e.material = Wh;
                break;
              case "multibit":
                e.material = jh;
            }
          }),
            t.addEventListener("mouseout", () => {
              e.material = Eh;
            });
        });
    }),
      (e.scene.rotation.z = -Math.PI / 20),
      eh.add(e.scene);
  });
  const Yh = new tn(),
    Jh = new Float32Array(900),
    Zh = new Float32Array(300);
  for (let e = 0; e < 300; e++)
    (Jh[3 * e + 0] = 10 * Math.random() - 6),
      (Jh[3 * e + 1] = 3 * Math.random() + 1.5),
      (Jh[3 * e + 2] = 10 * Math.random() - 8),
      (Zh[e] = Math.random());
  Yh.setAttribute("position", new Wt(Jh, 3)),
    Yh.setAttribute("aScale", new Wt(Zh, 1));
  const Kh = new En({
      transparent: !0,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 100 },
      },
      vertexShader:
        "uniform float uTime;\nuniform float uPixelRatio;\nuniform float uSize;\n\nattribute float aScale;\n\nvoid main()\n{\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    modelPosition.y += sin(uTime + modelPosition.y ) * aScale * 0.6;\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectionPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectionPosition;\n    gl_PointSize = 40.0 * uPixelRatio;\n    gl_PointSize *= (1.0 / - viewPosition.z);\n}",
      fragmentShader:
        "void main()\n{\n    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n    float strength = 0.035 / distanceToCenter - 0.1;\n        gl_FragColor = vec4(0.6 ,1.0, 1.0, strength);\n}",
      blending: 2,
      depthWrite: !1,
    }),
    Qh = new va(Yh, Kh);
  eh.add(Qh),
    window.addEventListener("resize", () => {
      console.log("resize"),
        (Zc.width = window.innerWidth),
        (Zc.height = window.innerHeight),
        (iu.aspect = Zc.width / Zc.height),
        iu.updateProjectionMatrix(),
        ru.setSize(Zc.width, Zc.height),
        ru.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
        (Kh.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2));
    });
  const $h = document.getElementById("scrollToNavigate"),
    eu = document.getElementById("scrollView");
  let tu = window.scrollY;
  window.addEventListener("scroll", () => {
    (tu = window.scrollY),
      tu > 250 && (($h.style.display = "none"), (eu.style.display = "none")),
      tu <= 250 && (($h.style.display = "flex"), (eu.style.display = "flex"));
  });
  const nu = new us();
  eh.add(nu);
  const iu = new Rn(40, Zc.width / Zc.height, 0.1, 1e3);
  (iu.position.x = 1.118),
    (iu.position.y = 3.4),
    (iu.position.z = Kc),
    (iu.rotation.y = Math.PI / 2),
    nu.add(iu);
  const ru = new vs({ canvas: $c, antialias: !0, alpha: !0 });
  ru.setSize(Zc.width, Zc.height),
    ru.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
    (ru.outputEncoding = D);
  const su = new (class {
      constructor(e = !0) {
        (this.autoStart = e),
          (this.startTime = 0),
          (this.oldTime = 0),
          (this.elapsedTime = 0),
          (this.running = !1);
      }
      start() {
        (this.startTime = xl()),
          (this.oldTime = this.startTime),
          (this.elapsedTime = 0),
          (this.running = !0);
      }
      stop() {
        this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
      }
      getElapsedTime() {
        return this.getDelta(), this.elapsedTime;
      }
      getDelta() {
        let e = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
          const t = xl();
          (e = (t - this.oldTime) / 1e3),
            (this.oldTime = t),
            (this.elapsedTime += e);
        }
        return e;
      }
    })(),
    au = () => {
      const e = su.getElapsedTime();
      (iu.position.y = 3.4 - (tu / Zc.height) * 0.28500000000000014),
        (iu.position.x = 1.118 + (tu / Zc.height) * 1.2),
        (iu.position.z = Kc - (tu / Zc.height) * 0.3);
      const t = 0.5 * Qc.y,
        n = 0.5 * -Qc.z;
      (nu.position.y += 0.04 * (t - nu.position.y)),
        (nu.position.z += 0.04 * (n - nu.position.z)),
        (nu.rotation.y += 0.06 * (-t - nu.rotation.y)),
        (Kh.uniforms.uTime.value = 0.2 * e),
        ru.render(eh, iu),
        window.requestAnimationFrame(au);
    };
  au();
  const ou = document.querySelector(".mouseInfo"),
    lu = Array.from(document.querySelectorAll("div.technologyUsedDiv > a")),
    cu = Array.from(document.querySelectorAll(".block > a"));
  if (
    (lu.concat(cu).forEach((e) => {
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
        ? (e.addEventListener("touchstart", () => {
            let t = e.getBoundingClientRect(),
              n = e.getAttribute("id");
            (ou.style.display = "inline-block"),
              (ou.style.left = t.left - 15 + "px"),
              (ou.style.top = t.top - 42 + "px"),
              (ou.innerHTML = `<p style="font-size:1.6vmin; margin: 11px 12px 10px 12px; color:white;">${n}</p>`);
          }),
          e.addEventListener("touchend", () => {
            ou.style.display = "none";
          }))
        : (e.addEventListener("mouseover", () => {
            let t = e.getBoundingClientRect(),
              n = e.getAttribute("id");
            (ou.style.display = "inline-block"),
              (ou.style.left = t.left - 20 + "px"),
              (ou.style.top = t.top - 55 + "px"),
              (ou.innerHTML = `<p style="font-size:1.3vmin; margin: 11px 12px 10px 12px; color:white;">${n}</p>`);
          }),
          e.addEventListener("mouseleave", () => {
            ou.style.display = "none";
          }));
    }),
    "ontouchstart" in document.documentElement ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0)
  )
    try {
      for (var hu in document.styleSheets) {
        var uu = document.styleSheets[hu];
        if (uu.rules)
          for (var du = uu.rules.length - 1; du >= 0; du--)
            uu.rules[du].selectorText &&
              uu.rules[du].selectorText.match(":hover") &&
              uu.deleteRule(du);
      }
    } catch (e) {}
})();
//# sourceMappingURL=bundle.ebc3b3fb4a9df54f.js.map
