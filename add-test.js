(async () => {
    const bytes = await (await fetch("./build/optimized.wasm")).arrayBuffer();
    const result = await WebAssembly.instantiate(bytes,{imports:{}});
    console.log(result.instance.exports.add(1,2))
    console.log(result.instance.exports.multiply(3,4))
})()