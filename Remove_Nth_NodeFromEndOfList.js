
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    console.log(head);
    console.log(head.next);
    console.log(n, "\n");
    console.log("head: ", head);

    if(head.next === null) {
        return head.next;
    };




    let nodeArray = [];

    let _bool = true;
    let ticker = 0;
    let timer = 0;

    function reload(_original, _nodeContainer, _valContainer, _bool) {
        // console.log("!!!!!TEST", myBoolean);
        if(timer === ticker - n + 1 && _bool != undefined && _bool === true) {
            console.log("TEST", ticker, n, ticker - n, timer, _bool);
            console.log("TEST", _original);
            timer++;
            _nodeContainer.push(_original);
            if(_valContainer != null) {
                console.log("TINKERING", _original);
                while(_original.next != null) {
                    _valContainer.push(_original.val);
                    _original = _original.next;
                };
                _valContainer.push(_original.val);
            };
            return _original;
        };
        if(_original.next === null) {
            timer++;
            _nodeContainer.push(_original);
            if(_valContainer != null && _bool === undefined) {
                _valContainer.push(_original.val)
            };
            return _original;
        }
        _nodeContainer.push(_original);
        if(_valContainer != null && _bool === undefined) {
            _valContainer.push(_original.val)
        };
        timer++;
        if(_bool != null)  {
            return reload(_original.next, _nodeContainer, _valContainer, _bool);
        } else {
            return reload(_original.next, _nodeContainer, _valContainer);
        }
    };

    let valCopiesArr = [];
    reload(head, nodeArray, valCopiesArr);
    // console.log(timer, "*****", nodeArray);
    console.log(timer, "1st*****", nodeArray[0]);
    console.log(valCopiesArr);

    let listCopy = nodeArray[0];

    ticker = timer;
    timer = 0;

    // nodeArray = [];
    let tailSideVal = [];
    let _tailSide = reload(listCopy, nodeArray, tailSideVal, true);
    console.log(timer, "2nd*****", _tailSide);
    console.log("####@", tailSideVal);

    console.log(valCopiesArr);
    let headSideContainer = [];
    for (var x = 0; x < valCopiesArr.length; x++) {
        if(x < valCopiesArr.length - n) {
            headSideContainer.push(valCopiesArr[x]);
        };
    };

    console.log(headSideContainer);
    let headSide = [];
    function arrToListPieces(_arr, _container) {
        if(_arr.length === 0) {
            return _container
        }
        _container.push(new ListNode(_arr[0]));
        let _newArr = _arr.slice(1, _arr.length);
        // let _newArr2 = _newArr.slice(1, _arr.length);
        // let _newArr3 = _newArr2.slice(1, _arr.length);
        // console.log(_newArr)
        // console.log(_newArr2);
        // console.log(_newArr3);
        // console.log(_container);
        return arrToListPieces(_newArr, _container);
    };
    console.log("head side:", headSideContainer);
    console.log("tail side:", tailSideVal);
    let compiledVals = headSideContainer.concat(tailSideVal);
    console.log("@@@@@@@", compiledVals);
    let _newList = arrToListPieces(compiledVals, headSide);

    console.log("\n", _newList);

    for(var x = _newList.length - 1; x > 0; x--) {
        if(x > 0) {
            _newList[x-1].next = _newList[x];
        };
        _newList.pop();
    };
    console.log("\nFin", _newList);
    _newList = _newList[0];
    console.log(_newList);


    // let current = _headSide;
    // while(_newList.next != null) {
    //     console.log(_newList.val);
    //     _newList = _newList.next;
    // }
    // console.log(_newList.val);

    return _newList;

};