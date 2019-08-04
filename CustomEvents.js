/**
*   @author Teodor Zhelyazkov
*
*   @class CustomEvents
*   @param {Object, Array, Class etc...}
*
*   @return {CustomEvents}
*/
class CustomEvents
{
    /**
    *   @method constructor
    *   @param {Object}
    *
    *   @return {Void}
    **/
    constructor( $customBindObject = null )
    {
        this.events = [];

        /**
        *    Clone "CustomEvents" prototype to the "$customBindObject" prototype
        **/
        if( $customBindObject )
            Object.setPrototypeOf($customBindObject, this);
    }

    /**
    *   @method on
    *   @param {String}
    *   @param {Function}
    *
    *   @return {CustomEvents}
    **/
    on( $event = "", $callBack = Function )
    {
        this.events.push({
            event    : $event,
            callback : $callBack
        });

        return this;
    }

    /**
    *   @method dispatch
    *   @param {String}
    *
    *   @return {Void} (Index in events array)
    **/
    dispatch( $event = "" )
    {
        for (var i = 0; i < this.events.length; i++)
        {
            if( $event && this.events[i].event == $event )
                setTimeout(this.events[i].callback, 0);
            else if( !$event )
                setTimeout(this.events[i].callback, 0);
        }
    }
}
