import {fun1} from './fun1'
import {fun2} from './fun2'
import {fun3} from './fun3'
import {validate_priority} from './validate'

const checkList=[
    fun1,
    fun2,
    fun3
]

const r = validate_priority(...checkList)

console.log(r)

















