// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @dev Contract module which allows to implement an emergency stop mechanism.
 */
abstract contract Pausable {
    bool private paused;

    event Paused(address account);
    event Unpaused(address account);

    /**
     * @dev Initializes the contract in unpaused state.
     */
    constructor() {
        paused = false;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is not paused.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    modifier whenNotPaused() {
        _requireNotPaused();
        _;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is paused.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    modifier whenPaused() {
        _requireIsPaused();
        _;
    }

    /**
     * @dev Returns true if the contract is paused, and false otherwise.
     */
    function isPaused() public view virtual returns (bool) {
        return paused;
    }

    /**
     * @dev Throws if the contract is paused.
     */
    function _requireNotPaused() internal view virtual {
        require(!isPaused(), "Contract is paused");
    }

    /**
     * @dev Throws if the contract is not paused.
     */
    function _requireIsPaused() internal view virtual {
        require(isPaused(), "Contract is not paused");
    }

    /**
     * @dev Triggers stopped state.
     *
     * Requirements:
     * - The contract must not be paused.
     */
    function _pause() internal virtual whenNotPaused {
        paused = true;
        emit Paused(msg.sender);
    }

    /**
     * @dev Returns to normal state.
     *
     * Requirements:
     * - The contract must be paused.
     */
    function _unpause() internal virtual whenPaused {
        paused = false;
        emit Unpaused(msg.sender);
    }
}
