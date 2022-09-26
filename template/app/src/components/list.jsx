export default {
  oninit: () => $ui.store["user"].ctrl.list(),
  view: () => (
    <ul class="user-list">
      {$ui.store["user"].data.list.map((user) => (
        <li
          class="user-list-item"
          onclick={() => $ui.go(`/edit/${user.id}`)}
          key={user.id}
        >
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  ),
};
