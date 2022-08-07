// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./../abstracts/Pauseable.sol";

/**
 * @dev PauseableMock mock exposes `private` and `internal` functions publicly to allow testing.
 */
contract PauseableMock is Pauseable {
    function pauseInternal() public {
        _pause();
    }

    function unpauseInternal() public {
        _unpause();
    }

    function testWhenPausedModifier() public virtual whenPaused {}

    function testWhenNotPausedModifier() public virtual whenNotPaused {}
}
