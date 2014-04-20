/**
 * Created by stuart on 4/19/14.
 */
describe("hello", function() {
    it("should say hello", function () {
        var name = 'Bobby';
        dump("Trying to say hello to [" + name + "]")
        expect(hello(name)).toBe("Hi " + name + "!")
        console.log("Said hello to [" + name + "]")
    })

})
