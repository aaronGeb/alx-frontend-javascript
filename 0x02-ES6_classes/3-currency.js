export default Currency {
    // check eslint.
    constructor (code, name) {
        if (typeof name !=='string') {
            throw new TypeError('Name must be string')
        }
        if ( typeof code !== 'string') {
            throw new TypeError('Code must be string')
        }
        this._name = name
        this._code = code
    }
}