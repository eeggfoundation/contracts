// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./../abstracts/Pausable.sol";

/**
 * @dev PausableMock mock exposes `private` and `internal` functions publicly to allow testing.
 */
contract PausableMock is Pausable {
    function pauseInternal() public {
        _pause();
    }

    function unpauseInternal() public {
        _unpause();
    }

    function testWhenPausedModifier() public virtual whenPaused {}

    function testWhenNotPausedModifier() public virtual whenNotPaused {}
}
