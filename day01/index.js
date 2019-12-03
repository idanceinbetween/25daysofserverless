module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    function spinDreidel(){
        const list = ["נ", "ג", "ה", "ש"]
        return list[Math.floor(Math.random()*list.length)]
    }

    if (spinDreidel()) {
        context.res = {
            status: 200,
            body: spinDreidel()
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Santa is lost again."
        };
    }
};