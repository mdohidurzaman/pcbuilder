import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import React from "react";

const pcbuilding = () => {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Components Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>CPU / Processor</td>
            <td>
              <Link href={"category/processor"}>
                <button class="btn">Select</button>
              </Link>
            </td>
          </tr>

          <tr>
            <th>2</th>
            <td>Monitor</td>
            <td>
              <Link href={"category/monitor"}>
                <button class="btn">Select</button>
              </Link>
            </td>
          </tr>

          <tr>
            <th>3</th>
            <td>Ram</td>

            <td>
              <Link href={"category/ram"}>
                <button class="btn">Select</button>
              </Link>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Motherboard</td>

            <td>
              <Link href={"category/motherboard"}>
                <button class="btn">Select</button>
              </Link>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>Storage</td>

            <td>
              <Link href={"category/storage"}>
                <button class="btn">Select</button>
              </Link>
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>UPS</td>

            <td>
              <Link href={"category/ups"}>
                <button class="btn">Select</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default pcbuilding;
pcbuilding.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
